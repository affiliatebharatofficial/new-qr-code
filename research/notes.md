# QR Site — Pre-research notes

Research for upcoming daily guide articles (picked first-unchecked from content-calendar.md).

---

## 2026-10-10 — `do-qr-codes-expire` (target keyword: "do qr codes expire")

Topic for the 2026-10-11 ~09:19 IST run.

### Key facts (verified via web research 2026-10-10)

- The QR code format itself has NO built-in expiration mechanism (ISO/IEC 18004).
  A static QR code printed in 2010 still scans today; it will still scan in 2040
  as long as the physical print is readable and the destination is alive.
  Sources: freeqr.com/blog/do-qr-codes-expire, qrlynx.com/blog/do-qr-codes-expire
- **Static QR codes never expire.** Data is encoded directly in the pattern; no
  server involved; nothing can be switched off remotely. The only way a static
  code "expires" is if the URL it points to goes offline — that's the website
  expiring, not the code.
- **Dynamic QR codes CAN stop working.** They encode a platform-owned short link
  (e.g. qrtg.io/abc123); scanning sends an HTTP GET → server 302-redirects to the
  real destination. The redirect infrastructure is what "expires". The four ways
  it dies (per dev.to/nchgzl analysis): subscription cancellation/lapsed payment,
  monthly scan limit hit, provider shuts down, owner pauses/deletes/sets an
  expiry rule or downgrades the plan.
  Source: https://dev.to/nchgzl/why-qr-codes-expire-its-not-the-code-its-the-server-3e34
- An expired dynamic code shows an error page / "link not found" — there is NO
  visual indicator on the printed code itself. A single missed subscription
  renewal can deactivate every dynamic code on an account simultaneously,
  including codes already printed and distributed.
  Source: https://www.uniqode.com/blog/qr-code-basics/qr-codes-expiry
  (their claim: across 188M+ scans tracked, the most common cause of unexpected
  code failure is a lapsed dynamic subscription, not physical damage —
  ATTRIBUTE this as Uniqode's claim, do not present as our measurement)
- Common failure chain to teach readers: scan → read the address the code opens
  → check whether that address still loads in a browser → check the provider
  dashboard for account/subscription status → check print quality.
  Source: https://wpforms.com/do-qr-codes-expire/
- Practical rules: never print dynamic codes from free trials on material with
  a shelf life longer than the trial; always test a code AFTER the trial ends
  before committing to a print run; upgrading usually reactivates codes;
  for anything permanent (signage, packaging, business cards) use a STATIC code
  pointing at a URL you own (no third party in the middle billing you for the
  forward).
  Sources: https://toolsque.com/do-qr-codes-expire/, https://wpforms.com/do-qr-codes-expire/

### Four-layer lifetime model (qrlynx.com — good explainer structure)
1. The printed symbol (physical damage/print quality can break decoding;
   time alone cannot)
2. The encoded destination (static code decodes fine even after the site moved
   or died)
3. The redirect (dynamic only — needs the provider's routing service + active
   code record)
4. The owner's rules and account state (pause/delete/expiry rules/downgrade)

### Figures suggestion (2-4 required by skill)
- Reuse existing screenshots from public/guides/screenshots/ (generator hero,
  type selector showing static vs dynamic choice)
- Caption idea: "A dynamic code printed from a trial account will stop working
  when the trial ends — nothing on the print warns you"

### Honesty notes
- Never claim "we tested it" — this is a research-based explainer.
- Don't present dynamic QR as bad; it's the right choice for campaigns/menus
  where the destination changes. The risk is only in long-lived print without
  a paid plan.
- Attribution: Uniqode's 188M+ scans figure is THEIR claim — cite as such.
