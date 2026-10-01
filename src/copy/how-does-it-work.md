# How it works

Your password never leaves your browser. Picking characters happens
entirely on this page, and the breach check is built so that the
password itself is never sent anywhere.

1. **Your password is hashed.** As you type, the page turns your
   password into a SHA-1 hash: a 40 character fingerprint that can't
   be turned back into the password.

1. **Only the start of the hash is sent.** The first five characters
   of that hash go to the [Have I Been Pwned Passwords API][hibp].
   That's all it receives.

1. **The API replies with every match.** It sends back the hashes of
   every breached password that starts with those five characters,
   usually several hundred of them, each with a count of how often it
   has appeared in breaches.

1. **The comparison happens here.** Your browser looks for your full
   hash in that list. If it's there, you'll see how many times the
   password has turned up in known breaches. If it isn't, it hasn't
   appeared in any breach Have I Been Pwned knows about.

This approach is called k-anonymity: the API can't tell which of the
hundreds of matching passwords you were checking. This site never
receives your password either, so it can't see, store or share it.

[hibp]: https://haveibeenpwned.com/API/v3#PwnedPasswords
