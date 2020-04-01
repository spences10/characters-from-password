# Get character from password

[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![styled components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

I use strong passwords, "[correct battery horse staple]" ftw!

But I also get quite annoyed counting out my password onto my fingers
when prompted to give characters 18, 7 and 12 from my password.

I put this together for just that, paste or type in your password then
pick out your character you need.

Demo: https://cfromp.scottspence.me

For Have I Been Pwnd check, use the pwndpasswords API
https://api.pwnedpasswords.com/range/5BAA6

To use `pwndpasswords`, SHA-1 the password then pass the first five
characters to the API then check the remainder of the SHA-1 against
the results of the API

So, the SHA-1 of the password `password` is
`5BAA61E4C9B93F3F0682250B6CF8331B7EE68FD8` take the first five chars
`5BAA6` and pass to the API https://api.pwnedpasswords.com/range/5BAA6

You will be presented with a range of SHA-1'd passwords that contain
that fist five chars. Then you need to check the remainder
`1E4C9B93F3F0682250B6CF8331B7EE68FD8` against the results.

```bash
1E4C9B93F3F0682250B6CF8331B7EE68FD8:3533661
```

The number after the colon is the amount of times it has been found in
password dumps.

# Further reading

https://haveibeenpwned.com/API/v2#PwnedPasswords
https://haveibeenpwned.com/Passwords
https://www.troyhunt.com/ive-just-launched-pwned-passwords-version-2/

## Related

https://passwordsecurity.info/

[correct battery horse staple]: https://xkcd.com/936/
