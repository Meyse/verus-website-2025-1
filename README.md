npm install
npx next dev

## robots.txt

`src/app/robots.txt` is deployment-specific and intentionally ignored by Git.
Copy `src/app/robots.prod.txt` or `src/app/robots.dev.txt` to
`src/app/robots.txt` before building the deployment target.
