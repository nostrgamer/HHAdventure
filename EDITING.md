# Editing the blog (no CMS)

All content is plain Markdown in this repo. Edit files and push to GitHub; Netlify rebuilds the site automatically.

---

## Option A: Edit on GitHub (browser)

1. Go to **[github.com/nostrgamer/HHAdventure](https://github.com/nostrgamer/HHAdventure)**.
2. Open the file you want to edit (e.g. `about.md`, or a file in `posts/`).
3. Click the **pencil** (Edit) icon.
4. Make your changes.
5. Scroll down, add a short commit message (e.g. "Update about page"), and click **Commit changes**.
6. Netlify will rebuild; the site updates in a minute or two.

**To add a new post:**

1. In the repo, go to the `posts/` folder.
2. Click **Add file** → **Create new file**.
3. Name the file like `2025-02-my-trip.md` (use a date prefix so they sort nicely).
4. Put this at the very top (front matter), then your story below:

```yaml
---
title: "Your post title"
date: 2025-02-15
description: "Short summary for the list view."
---

Your story in Markdown here. You can use **bold**, *italic*, and [links](url).

![Photo caption](/images/your-photo.jpg)
```

5. Click **Commit new file**. To add images, upload them via **Add file** → **Upload files** into the `images/` folder (e.g. `images/van-build/photo.jpg`), then reference them in the post as `/images/van-build/photo.jpg`.

---

## Option B: Edit locally (your computer)

1. Open the project in your editor (e.g. Cursor/VS Code).
2. Edit `about.md`, or any file in `posts/`, or add a new `.md` file in `posts/` with the same front matter as above.
3. Add images by putting files in `images/` (e.g. `images/travels/sunset.jpg`) and reference them in Markdown: `![caption](/images/travels/sunset.jpg)`.
4. In a terminal:

   ```bash
   cd c:\Users\eheming\TravelBlog
   git add .
   git commit -m "Update about page"   # or whatever message
   git push
   ```

5. Netlify rebuilds after the push.

**Preview before pushing:** Run `npm run serve` and open http://localhost:8080 to see the site with your changes.

---

## File reference

| What you want to do | File to edit |
|---------------------|--------------|
| Change the About page | `about.md` |
| Add or edit a blog post | New or existing file in `posts/` (e.g. `posts/2025-02-trip.md`) |
| Add a photo to a post | Upload image to `images/` (e.g. `images/uploads/photo.jpg`), then in the post write `![caption](/images/uploads/photo.jpg)` |

The **Home** page and **Blog** list page are built automatically from the posts; you don’t edit those pages directly.

---

## Note about /admin

The `admin/` folder was for Netlify CMS (browser-based editing). Netlify Identity has been deprecated, so that flow may not work. You can ignore `/admin` and use the Git workflow above. If you prefer, you can delete the `admin/` folder; the site will work the same.
