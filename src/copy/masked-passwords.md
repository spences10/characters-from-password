# Masked passwords

Some sites, banks especially, don't ask for your whole password.
Instead they ask for a random selection of its characters, something
like "enter the 1st, 4th and 8th characters", with a separate box for
each one. It's a common sight on UK online banking.

The idea is to protect you from keyloggers. If malware records your
keystrokes, it only ever captures a few characters, never the whole
password.

That protection has a few flaws, though:

- Each login attempt needs fewer characters (often just 4, sometimes
  numbers only), so it's easier to brute force. Masked passwords only
  hold up when they're paired with an account lockout policy.

- With a few characters known at certain positions, say from a
  keylogger or screen grabber, an attacker can simply wait until the
  site asks for positions they already know.

- Capturing a handful of logins reveals the whole password. With a 12
  character password and 4 positions asked each time, it could take
  around 8 logins, so a keylogger or screen grabber gets there
  eventually.

- The bigger threat to online banking is malware that runs in the
  browser itself, such as ZeuS or SpyEye. It gets round masked
  passwords with social engineering, for example by:

  - asking for the whole password
  - showing a fake "change your password" form after a fake login
  - faking an entry error and asking again for different positions,
    collecting the full password in two or three tries

Masked passwords are **awkward for people to use and tricky for sites
to implement well.** At a minimum, a site needs an account lockout
policy, a record of which positions it has asked for, and partial
hashes of the password.

So while masked passwords do offer some protection from basic
keylogging, they fail against more common threats like malware that
uses social engineering ([source]).

Two-factor authentication (2FA) adds another layer: something you know
(your password) plus something you have (your phone or a security
key). It isn't bulletproof either. SMS codes can be intercepted
through SIM swapping, where a criminal convinces a phone shop to issue
a new SIM for someone else's number.

<!-- Links -->

[source]:
	https://security.stackexchange.com/questions/7467/how-secure-is-asking-for-specific-characters-of-passwords-instead-of-the-entire
