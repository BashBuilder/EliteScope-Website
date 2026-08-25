# Elite Scope — Marketing Website

Next.js (App Router) landing site for the Elite Scope trading-signals app,
plus the legal/support pages required for App Store and Google Play review.

## What's included

- `/` — landing page: hero, features, "how it works," pricing (Explorer /
  Strategist / Mathematician, weekly & monthly), FAQ, and download CTA.
- `/terms` — Terms of Use (includes the "not financial advice" disclosure
  a trading-signals app needs).
- `/privacy` — Privacy Policy.
- `/subscription-terms` — auto-renewal, cancellation, and refund details
  (required for apps using auto-renewable subscriptions).
- `/support` — help/contact page.
- `/delete-account` — account & data deletion instructions (Apple requires
  this for any app that supports account creation — see note below).

## Before you deploy: things to fill in

Everything editable lives in one file: **`src/lib/site-config.ts`**.

1. `company.legalName`, `company.address`, `company.jurisdiction` — your
   real registered business details. These feed directly into the Terms
   and Privacy Policy text.
2. `company.supportEmail`, `company.privacyEmail` — real inboxes you
   monitor.
3. `appStoreUrl` / `playStoreUrl` — once your app is live, paste the real
   listing URLs and flip `appStoreLive` / `playStoreLive` to `true`. Until
   then, the store buttons render but don't link anywhere (so you don't
   ship a broken/wrong link).
4. `url` — your production domain, used for metadata and Open Graph tags.
5. `legalDates.termsEffective` / `privacyEffective` — the date you publish
   these documents.

The pricing shown on `/` and `/subscription-terms` is pulled from the
`tiers` array in the same file, mirrored from the app's own tier config —
update both together if pricing changes.

## Running locally

```bash
npm install
npm run dev
```

## Deploying

This is a standard Next.js app — it deploys as-is to Vercel, Netlify, or
any Node host. On Vercel: push to a Git repo, import it, no config needed.

## App Store / Play Store submission notes

Both stores will ask for URLs during submission — point them at your
deployed site:

- **Privacy Policy URL** -> `https://yourdomain.com/privacy`
- **Support URL** -> `https://yourdomain.com/support`
- **Marketing URL** (optional) -> `https://yourdomain.com`

**Account deletion:** Apple's guideline 5.1.1(v) requires apps that let
people create an account to also offer a way to *delete* that account —
and Apple generally expects this to be possible from inside the app
itself, not only via a web form. The current app codebase has a logout
flow but no in-app delete-account action. The `/delete-account` page here
covers the web/email path, but you'll likely also want to add an in-app
"Delete Account" button before submitting for review.

**Subscription disclosure:** both stores expect the auto-renewal terms
(price, duration, cancellation window) to be clearly stated before
purchase. `/subscription-terms` covers this; make sure the in-app paywall
also states it (Apple's App Store Review Guideline 3.1.2 is specific about
this).
