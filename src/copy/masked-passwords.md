## Masked Passwords

Some password-authenticated sites, ask you to enter a random selection
of specific characters from your password whole word/phrase.

For example, it might say 'Enter the 1st, 4th and 8th letter' and
provide three separate input boxes.

This method of password entry is popular in bank sites in here in the
UK.

It's meant to protect from keyloggers - and keyloggers only.

The reasoning is that if keylogger is installed on client's device, it
will never get access to the full password.

This logic has a few flaws however:

- An attacker needs to enter fewer characters (e.g. only 4 characters,
  often numbers only) for a single try. Therefore it's easier to brute
  force this authentication step. That is why masked passwords need to
  be paired with account lockout policy.

- With just a few known characters at certain positions (e.g. gathered
  by a keylogger/screengrabber) an attacker can simply try logging in
  when the server chose positions that are known.

- Getting to know the whole password only needs capturing a few
  successful authentications (e.g. when password length is 12 and
  there are always 4 positions chosen, it could take 8 tries), so a
  keylogger/screengrabber will get it, eventually.

- The biggest threat for Internet banking authentication is malware
  (man-in-the-browser attacks) like ZeUS or SpyEye and this kind of
  software usually conducts social engineering attacks that totally
  overcome masked passwords scheme. For example, this software (ZeUS
  or SpyEye) can:

  - ask for a whole password
  - display a fake password change form after fake authentication
  - simulate password entry errors and redisplay the form with other
    positions to fill to get full password in 2-3 tries

Masked passwords are being **difficult to handle for users and tricky
to implement correctly.** At the very least developers need to add
account lockout policy, positions choice storage and partial hashes.

Contrary to popular belief, masked password, especially in e-banking
sites, though they offer protection from basic keylogging, completely
fail to other, more prevalent threats like malware utilizing social
engineering.

[Source].

Two step authentication (2FA) is yet another layer of security, being
something you know (your password) and something you have (2FA
device). This is still not completely secure such as SMS where in some
instances criminals have gone into a phone shop and requested a new
SIM for a target without their knowledge.

<!-- Links -->

[source]:
  https://security.stackexchange.com/questions/7467/how-secure-is-asking-for-specific-characters-of-passwords-instead-of-the-entire
