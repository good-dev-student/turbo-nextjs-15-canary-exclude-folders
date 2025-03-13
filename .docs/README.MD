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
