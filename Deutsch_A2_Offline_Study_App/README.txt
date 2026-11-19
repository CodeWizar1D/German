DEUTSCH A2 — OFFLINE STUDY APP

WHAT THIS IS
A mobile-friendly Progressive Web App (PWA). It includes:
- Teacher-style Day 1 lesson on Perfekt
- 60-minute session structure
- Vocabulary flip cards
- 64-day progress tracker (stored on this device)
- Offline caching after the first load

IMPORTANT
The current app is a working starter with a sample first lesson. Your full Netzwerk neu A2 Kursbuch PDF was not available as an accessible file in this build session, so the other 63 lessons are placeholders. Upload the Kursbuch PDF again in the chat and the lesson content can be filled chapter-by-chapter from your actual material.

HOW TO RUN ON A PHONE
1. Extract this ZIP.
2. Put the folder on a static HTTPS host (for example GitHub Pages or Netlify).
   A service worker / installable PWA requires HTTPS (localhost is fine for testing).
3. Open the hosted URL in Chrome on Android.
4. Choose browser menu > Install app / Add to Home screen.
5. Open once while online. Then the app shell and lesson are cached for offline use.

LOCAL TEST
Run a local static server from this folder, then visit localhost. Do not open index.html as file:// because service workers do not work there.

PROGRESS
Progress is saved in localStorage on that device/browser. Clearing browser site data will clear progress. It does not sync between devices.

NEXT STEP
Upload the full Netzwerk neu A2 Kursbuch PDF to generate all lessons using the exact chapters, grammar and exercises from your book.