# Sahanara Online Service & Telecom — Version 2

## Upload these files to the repository root
- index.html
- style.css
- script.js
- supabase-config.js
- auth.js

Upload all five files together and choose **Commit changes**.

## Supabase authentication setup
1. Create a Supabase project.
2. In Supabase project settings, copy the Project URL and anon/public key.
3. Open `supabase-config.js` in GitHub and replace the two placeholder values.
4. Save/commit the change.
5. In Supabase Authentication settings, configure the Site URL to your GitHub Pages URL:
   `https://sksarfaraj208-dotcom.github.io/SAHANARA-ONLINE-SERVICE/`
6. Add that same URL to the allowed redirect URLs if required.

Important:
- Use only the anon/public key in browser code.
- NEVER put the `service_role` key, database password, OTP, Aadhaar number, bank PIN or other secrets in this repository.
- This version includes the Login/Registration interface and Supabase Auth connection code. A full customer dashboard, order database, admin panel and role-based access are not included yet.
- Do not treat an account creation message as proof of email verification; follow Supabase's confirmation settings.
