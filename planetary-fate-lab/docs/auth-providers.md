# Planetary Fate Lab — Sign-In Options

Planetary Fate Lab v6.7 supports these user-facing entry paths:

- **Google / Gmail** — Google account identity only. Requested scopes: `openid email profile`. No Gmail mailbox scope is requested.
- **GitHub** — identity and verified email only. Requested scopes: `read:user user:email`. Repository scopes are not requested.
- **Microsoft** — identity/profile access through OpenID Connect and Microsoft Graph `User.Read`. Mail, calendar, and file scopes are not requested.
- **Guest** — immediate pseudonymous local profile. No email is required or stored on the browser.
- **Custom offline alias** — user-selected local alias for offline play.

Federated providers are enabled only when the secure backend, exact HTTPS callback URL, legal release gate, and real provider credentials are configured. Provider client secrets remain server-side and are never embedded in the PWA.
