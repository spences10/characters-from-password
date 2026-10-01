export type BreachStatus =
	| 'idle'
	| 'checking'
	| 'found'
	| 'clear'
	| 'error';

export function create_breaches() {
	let status = $state<BreachStatus>('idle');
	let count = $state(0);
	let latest = 0;

	async function check(sha1: string) {
		const request = ++latest;
		status = 'checking';

		try {
			const url = `https://api.pwnedpasswords.com/range/${sha1.substring(0, 5)}`;
			const res = await fetch(url);
			if (!res.ok) throw new Error(`HIBP responded ${res.status}`);
			const body = await res.text();
			if (request !== latest) return;

			const suffix = sha1.slice(5);
			const match = body
				.split('\r\n')
				.find(
					(line) => line.substring(0, line.indexOf(':')) === suffix,
				);

			count = match
				? Number(match.substring(match.indexOf(':') + 1))
				: 0;
			status = count > 0 ? 'found' : 'clear';
		} catch {
			if (request !== latest) return;
			count = 0;
			status = 'error';
		}
	}

	function reset() {
		latest++;
		count = 0;
		status = 'idle';
	}

	return {
		get status() {
			return status;
		},
		get count() {
			return count;
		},
		check,
		reset,
	};
}
