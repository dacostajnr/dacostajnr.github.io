# dacostajnr.github.io

Personal site built with [Astro](https://astro.build/). Pushing to **`master`** triggers [GitHub Actions](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.

## Prerequisites

- **Node.js 20** (matches the CI workflow)
- **Git**

## Install and run locally

From the repository root:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`) to preview changes.

Useful scripts:

| Command           | Purpose                          |
| ----------------- | -------------------------------- |
| `npm run dev`     | Development server with hot reload |
| `npm run build`   | Production build into `dist/`     |
| `npm run preview` | Serve the production build locally |

If you use Yarn instead, run `yarn` then `yarn dev` / `yarn build` / `yarn preview`.

## Where to edit

- **Pages and routes:** `src/pages/` (`.astro` files)
- **Blog posts:** `src/content/blog/`
- **Other content collections:** `src/content/` (see `src/content/config.ts`)
- **Layouts and components:** `src/layouts/`, `src/components/`
- **Global styles:** `src/styles/`
- **Static assets** (served as-is): `public/`

After substantive edits, run `npm run build` once to confirm the site builds before you push.

## Make changes and push

1. **Create a branch** (optional but recommended for larger changes):

   ```bash
   git checkout -b your-branch-name
   ```

2. **Edit files**, then check what changed:

   ```bash
   git status
   git diff
   ```

3. **Stage and commit:**

   ```bash
   git add .
   git commit -m "Short, clear description of the change"
   ```

4. **Push:**

   - If you are on a feature branch:

     ```bash
     git push -u origin your-branch-name
     ```

     Then open a pull request on GitHub and merge into `master` when ready.

   - To deploy straight from your machine (you have commit rights and use `master`):

     ```bash
     git checkout master
     git pull origin master
     # merge or cherry-pick your work as needed
     git push origin master
     ```

Deployment runs automatically after a successful push to **`master`**. Check the **Actions** tab on the repository if a deploy fails.

## First-time clone

```bash
git clone https://github.com/dacostajnr/dacostajnr.github.io.git
cd dacostajnr.github.io
npm install
npm run dev
```

Replace the clone URL with SSH (`git@github.com:...`) if that is how you authenticate with GitHub.
