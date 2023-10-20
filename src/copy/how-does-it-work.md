# How Does It Work?

When you type in a password into this site, a few things happen behind
the scenes to ensure you have useful information while keeping your
password secure. Here's a step-by-step rundown of the process:

1. **Scrambling Your Password:** As soon as you start typing, your
   password gets scrambled into a unique code using a process called
   hashing. This process is one-way and irreversible. So, your
   original password stays on your device and never leaves it.

1. **Asking the Have I Been Pwned Database:** With the scrambled code
   in hand, this site will ask a special database called "Have I Been
   Pwned" if they've seen this code before in any data breaches. But
   instead of sending the whole code, only first few characters of it
   are sent. This is a clever way to keep your password secure while
   checking if it's safe.

1. **Getting the Answer:** The Have I Been Pwned database then sends
   back a list of scrambled codes that match the first few characters
   this site sent. This site will then check this list to see if the
   rest of your scrambled code is on it.

1. **Showing You the Result:** If there's a match, it means your
   password has appeared in data breaches and might not be safe. This
   site will show you how many times that password has been seen in
   data breaches before. If there's no match, your password hasn't
   appeared in any known data breaches, which is a good sign!

Remember, this site will never see, store, or share your original
password. It stays with you.
