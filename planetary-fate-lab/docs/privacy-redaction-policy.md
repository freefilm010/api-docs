# Privacy & Public-Release Redaction Policy

Public-facing operator alias: **PFL-Operator**. User-facing accounts use pseudonymous **Explorer-XXXXXX** aliases unless a user chooses another non-identifying alias.

## Never publish
- personal names, personal email addresses, phone numbers, home/work addresses, ZIP codes, or personal device names;
- private repository names, account or installation identifiers, local machine/user paths, private branch names, or access tokens;
- OAuth client secrets, API keys, database credentials, HMAC/session secrets, signing keys, certificates, backup credentials, or raw device credentials;
- user email addresses in multiplayer member lists, public profiles, room events, shared exports, screenshots, or public logs.

## Identity model
Verified email is an authentication attribute only. Public/display identity is an alias. Offline play stores an alias rather than email. Authenticated multiplayer must return aliases rather than member email addresses.

## Hosting caveat
A github.io URL inherently reveals its GitHub account/repository in the URL. The application does not repeat that identifier. A custom domain/CDN or alternate host is required to hide repository ownership from end users.
