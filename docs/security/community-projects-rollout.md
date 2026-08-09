# Community projects security rollout

The registry and website changes must be deployed in this order. Do not enable
the final CSP until production is serving the source-controlled report-only
header without violations.

## 1. Merge and publish the registry

1. Merge the `Meyse/verus-projects` hardening changes.
2. In **Settings → Actions → General**, set the default workflow token to
   read-only and require approval for workflows from outside contributors.
3. Protect `main` with pull requests, the up-to-date `validate` check, resolved
   conversations, blocked force pushes/deletion, and administrator enforcement.
   Keep required approvals at zero while `@Meyse` is the sole reviewer.
4. In the `github-pages` environment, allow deployments only from `main` and
   disable administrator bypass.
5. Enable the `Publish registry` workflow if GitHub still reports it as disabled
   due to inactivity. Run it manually once and confirm Pages contains only
   `projects.json`, the schema, and sanitized PNG/JPEG/WebP assets.
6. Run `Refresh registry metadata` manually once. A future inactivity disablement
   of this scheduled workflow must not disable `Publish registry`.

## 2. Deploy the website to nextdev in report-only mode

1. Deploy the website revision to `nextdev.verus.io` using a production build.
   The report-only header is intentionally not emitted by `next dev`.
2. Confirm nextdev returns exactly one report-only policy and no enforced CSP
   header:

   ```bash
   curl -sS -I https://nextdev.verus.io/projects
   ```

3. Exercise `/projects`, at least one `/projects/[slug]` page, `/projects/add`,
   search/filter controls, the YAML download, and `/api/projects.json` in a real
   browser. Investigate every `securitypolicyviolation` or CSP console message.
   Add only an exact source required by confirmed site functionality.

## 3. Promote the report-only website to production

1. On the production host, run `nginx -T` and locate every directive that sets,
   hides, or replaces `Content-Security-Policy`.
2. Remove the malformed nginx CSP override. Keep the existing HSTS,
   `X-Frame-Options`, `X-Content-Type-Options`, and referrer headers.
3. Run `nginx -t` before reloading nginx.
4. Deploy the same website revision tested on nextdev.
5. Confirm production returns exactly one report-only policy and no enforced
   CSP header:

   ```bash
   curl -sS -I https://verus.io/projects
   ```

6. Repeat the nextdev browser checks against production before enforcing the
   policy.

## 4. Enforce the CSP

After a clean production crawl, change the header name in `next.config.ts` from
`Content-Security-Policy-Report-Only` to `Content-Security-Policy` and add
`upgrade-insecure-requests` to the policy directives. Deploy, repeat the browser
crawl, and confirm production returns exactly one enforced CSP header.

If enforcement breaks a confirmed feature, revert the header name to report-only
while the exact missing source is investigated. Do not add broad script origins
or remove `script-src-attr 'none'`, `frame-ancestors 'none'`, or
`object-src 'none'` as a quick workaround.

## 5. Account recovery

Verify the `Meyse` GitHub account has two-factor authentication, a passkey or
hardware security key, and an offline recovery method. Never place recovery
codes, tokens, or screenshots of account-security settings in either repository.
