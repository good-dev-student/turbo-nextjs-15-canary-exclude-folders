## README

[x] add ".docs" folder

---

create latest nextjs project (turbopack) - Run : `npx create-next-app@latest . --use-pnpm`

Issue N°1:
$ npx create-next-app@latest . --use-pnpm
Need to install the following packages:
create-next-app@15.2.2
Ok to proceed? (y) y

The directory turbo-nextjs-15-canary-exclude-folders contains files that could conflict:

.docs/

Either try using a new directory name, or remove the files listed above.

---

Rename to .local-docs and run `npx create-next-app@latest . --use-pnpm`

$ mv .docs/ .local-docs

$ npx create-next-app@latest . --use-pnpm
The directory turbo-nextjs-15-canary-exclude-folders contains files that could conflict:

.local-docs/

Either try using a new directory name, or remove the files listed above.

same problem

---

[] move to up level then create latest nextjs project (turbopack) - Run : `npx create-next-app@latest . --use-pnpm`

$ npx create-next-app@latest . --use-pnpm
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
Creating a new Next.js app in /home/xuser/Documents/GitHub/UPPR/turbo-nextjs-15-canary-exclude-folders.

Using pnpm.

Initializing project with template: app-tw

---

[x] Without the docs folder works okey!

$ d

> turbo-nextjs-15-canary-exclude-folders@0.1.0 dev /home/xuser/Documents/GitHub/UPPR/turbo-nextjs-15-canary-exclude-folders
> next dev --turbopack

▲ Next.js 15.2.2 (Turbopack)

- Local: http://localhost:3000
- Network: http://192.168.1.18:3000

✓ Starting...
✓ Ready in 987ms
○ Compiling / ...
✓ Compiled / in 2.3s
GET / 200 in 2652ms
○ Compiling /favicon.ico ...
✓ Compiled /favicon.ico in 643ms
GET /favicon.ico?favicon.45db1c09.ico 200 in 704ms
^C

---

[] adding the .local-docs and try again
