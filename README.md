# Anupama Jawale, academic website

A plain HTML, CSS and JavaScript website. There is nothing to install or build, and it works on GitHub Pages (free hosting from GitHub) exactly as it is.

## What is in this folder

```
index.html              Home page (about, research, education, roles, projects, teaching, contact)
publications.html       Full publication list with search and filters
css/style.css           All colours, fonts and layout
js/publications-data.js Every publication, in one list (edit this to add papers)
js/gallery-data.js      The list of gallery photos (captions go here)
js/gallery.js           Cork board and the click-to-enlarge photo viewer
js/main.js              Menu, teaching tabs, hero animation, small helpers
js/publications.js      Search and filter on the publications page
images/Cover.jpg        The photo next to her name (see images/README.txt)
images/gallery/         The 11 gallery photos (see images/gallery/README.txt)
```

## Preview it on your own computer

Double-click `index.html`. It opens in your browser. (You need an internet connection to see the web fonts. Without it the site still works, using standard fonts.)

---

## Put it online with GitHub Pages (first-time guide)

You do not need to learn Git or any commands. You can do everything in the browser.

### 1. Create a GitHub account
1. Go to **github.com** and click **Sign up**.
2. Choose a username. This becomes part of your website address, so pick something you are happy to share.
3. Confirm your email address when GitHub sends you a message.

### 2. Create a repository (a folder on GitHub)
1. Click the **+** icon at the top right, then **New repository**.
2. **Repository name**, choose one of these:
   - `yourusername.github.io` (replace `yourusername` with your exact username). The site will be at `https://yourusername.github.io`.
   - or any name, such as `anupama-jawale`. The site will be at `https://yourusername.github.io/anupama-jawale/`.
3. Choose **Public**. (Free GitHub Pages needs a public repository.)
4. Click **Create repository**.

### 3. Upload the website files
1. On the new empty repository page, click **uploading an existing file**.
2. Open this website folder on your computer. Select everything **inside** it (`index.html`, `publications.html`, and the `css`, `js` and `images` folders) and drag it into the browser window.
   - Upload the contents, not the outer folder. `index.html` must sit at the top level of the repository.
3. Wait for the upload to finish, then click **Commit changes** at the bottom.

### 4. Turn on GitHub Pages
1. In your repository, click **Settings**.
2. In the left menu, click **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to **main** and the folder to **/ (root)**, then click **Save**.
5. Wait one to two minutes and refresh the page. A message appears at the top: "Your site is live at ...". Click the link.

That link is what you send to Dr. Jawale.

---

## Changing things later

You can edit files directly on GitHub: open a file, click the **pencil icon**, make the change, then click **Commit changes**. The live site updates after a minute or two.

| To change | Edit this file |
|---|---|
| Add or change a publication | `js/publications-data.js` (copy an existing entry and change the text) |
| Choose which papers appear under "Selected publications" on the home page | In `js/publications-data.js`, add or remove `featured: true` |
| Text on the home page (about, roles, projects, lectures, contact) | `index.html` |
| Colours | The `:root` block at the top of `css/style.css` |
| Cover photo (next to her name) | Replace `images/Cover.jpg` with a new file of the same name |
| Gallery photos | Replace or add files in `images/gallery/`. Descriptions, captions and extra photos: `js/gallery-data.js` |
| Contact details (the purple footer) | The `<footer>` at the bottom of `index.html` and `publications.html` |
| Teaching and invited lectures | The three `tabpanel` blocks in `index.html` (copy an existing `<li class="row">` to add one) |
| Email addresses | Search for `data-email` in `index.html` (format is `name|domain`) |

## Using her own domain later (optional)

Her current site uses `anupamajawale.in`. GitHub Pages can serve a custom domain (Settings, then Pages, then **Custom domain**), but that also needs a change to the domain's DNS settings, which currently point to Google Sites. Do that only once she is happy with the new site, and keep the old one running until then.

## Things to confirm with Dr. Jawale before publishing

- Which email address to show. The original site's visible text says `anupamajawale@mu.ac.in`, but its link points to `anupama.jawale@nmcce.ac.in`.
- The SET qualification years (the original says "SET 2012" in one place and "SET 2013" in another).
- Gallery captions, if she wants any. They are blank for now (edit `js/gallery-data.js`).
- One gallery photo is a seminar poster that gives her title as "Assistant Professor & Head" at Narsee Monjee College, which differs from the title on the site. She may prefer to swap it for another photo.
- Only the About section is written in the first person ("I am..."). She should read it once to confirm it says what she wants.
- The two datasets: her old site lists them under "Copyright - Dataset Application", so the new site says "copyright application". Confirm whether they are only applied for or already registered.
- Whether the "Selected publications" are the ones she wants to feature.
