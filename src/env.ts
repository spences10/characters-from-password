import { defineEnvVars } from '@sveltejs/kit/env';

const optional = (value: string | undefined) => value || undefined;

export const variables = defineEnvVars({
	PUBLIC_FATHOM_ID: {
		public: true,
		static: true,
		schema: optional,
		description: 'Fathom site id; analytics disabled when unset',
	},
	PUBLIC_FATHOM_URL: { public: true, static: true, schema: optional },
});
