# minyang.io — personal academic website

A plain static site (HTML/CSS/JS). There's no build step, no database, and no framework.

```
site/
├── content.js      ← EDIT THIS to update the site (papers, status, bio, ...)
├── index.html      page layout (rarely touched)
├── render.js       turns content.js into the page (don't need to touch)
├── style.css       look & feel (change --accent to re-color)
├── assets/         CV_MinYang.pdf, photo.jpg
└── papers/         put paper PDFs here (create the folder when needed)
```

## Common updates

| Task | What to do in `content.js` |
|---|---|
| New working paper | Copy a `{ ... },` block in `workingPapers` and edit it |
| Paper gets published | Move its block from `workingPapers` to `publications`, update `status` |
| R&R / new status | Edit the paper's `status` field |
| Add paper PDF / SSRN | Put the file in `papers/` and set `links: { pdf: "papers/file.pdf", ssrn: "https://..." }` |
| New presentation | Add to the year's `items` string, or add a new `{ year, items }` line at the top |
| Change of position | Edit `title` / `affiliation` (and `education`) |
| Job market / news banner | Set `announcement: "..."` (set `""` to hide it) |
| New CV | Replace `assets/CV_MinYang.pdf` (keep the same name) |
| Photo | Save as `assets/photo.jpg`, set `photo: "assets/photo.jpg"` |

Anything starting with `TODO` shows up **highlighted in yellow** on the page so you can see what still needs filling in.

**Preview locally:** double-click `index.html` to open it in a browser.

## Hosting

Buying the domain at GoDaddy doesn't get you hosting by default. Pick one of these:

### Option A: GitHub Pages (free, recommended)
1. Create a GitHub repo (e.g. `minyang.io`) and upload the contents of `site/` to it.
2. In the repo, go to **Settings → Pages**. Set Source to *Deploy from branch*, branch `main`, folder `/ (root)`.
3. Under **Custom domain**, enter `minyang.io` and tick **Enforce HTTPS** once it becomes available.
4. In **GoDaddy → My Products → minyang.io → DNS**:
   - Delete the existing `A` record for `@` (the "Parked" one).
   - Add four `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Add a `CNAME` record: name `www` → value `<your-github-username>.github.io`
5. Wait for DNS to update (from a few minutes up to a few hours).

To update later, edit `content.js` on github.com (pencil icon) and commit. The site redeploys automatically in about a minute.

### Option B: GoDaddy Web Hosting (cPanel), if you bought a hosting plan
1. Open **GoDaddy → My Products → Web Hosting → Manage → cPanel Admin → File Manager**.
2. Open `public_html/` and upload every file and folder inside `site/`. `index.html` has to sit directly in `public_html/`.
3. To update later, upload the new `content.js` (and any new PDFs) over the old ones.
4. Turn on the free SSL certificate in the hosting dashboard so `https://` works.

If a change doesn't show up, do a hard refresh in the browser (Ctrl+Shift+R).
