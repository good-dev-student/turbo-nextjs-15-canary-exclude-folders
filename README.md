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

[x] adding the .local-docs and try again (failed to compile with turbo aka. next dev --turbopack / works without turbo : aka. next dev )

$ mv ../.local-docs/ .

$ d

> turbo-nextjs-15-canary-exclude-folders@0.1.0 dev /home/xuser/Documents/GitHub/UPPR/turbo-nextjs-15-canary-exclude-folders
> next dev --turbopack

▲ Next.js 15.2.2 (Turbopack)

- Local: http://localhost:3000
- Network: http://192.168.1.18:3000

✓ Starting...
✓ Ready in 953ms
○ Compiling / ...
✓ Compiled / in 3.4s
⨯ ./app/globals.css:11661:19
Parsing css source code failed
11659 | }
11660 | .\[\&\>div\.min-h-\[350px\]\]\:p-6 {

> 11661 | &>div.min-h-[350px] {

        |                   ^

11662 | padding: calc(var(--spacing) \* 6);
11663 | }
11664 | }

No qualified name in attribute selector: Dimension { has_sign: false, value: 350.0, int_value: Some(350), unit: "px" }. at [project]/app/globals.css:11660:18

○ Compiling /\_error ...
✓ Compiled /\_error in 1339ms
GET / 500 in 5221ms
○ Compiling /favicon.ico ...
✓ Compiled /favicon.ico in 604ms
GET /favicon.ico 500 in 766ms

## ==> so the single folder have min-h-[350px is this file ".local-docs/shadcn-ui-docs/components/typography.mdx" so the nextjs is compiling the ".local-docs" !!

---

[] use trurbo to comple and search if there are any config to exclude the ".local-docs" folder

Searching with query : "i have .local-docs folder will make a error when i use trubo pack and run the next dev --turbopack which config to add to nextjs 15 to exclude the folder ?"

---

NOT WORKING:

const nextConfig: NextConfig = {
turbo: {
resolveAlias: {
"./.local-docs/\*": {
type: "empty",
},
},
},
};

--

turbo: {
resolveAlias: {
'./.local-docs/\*': './mock-empty.js'
}
}

--

add the .local-docs folder to the exclude array in your tsconfig.json file:
{
"compilerOptions": {
// your compiler options
},
"exclude": [
"node_modules",
".local-docs",
// other folders to exclude
]
}

---

rename to .local-docs to local-docs same problem

searching exclude folder in postcss postcss.config.mjs nextjs no result!!

testing with src folder same problem!
