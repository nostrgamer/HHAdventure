# Travel Blog – Plan (Netlify)

A simple, maintainable plan for a family van-build and travel blog hosted on Netlify.

---

## 1. Goals

- **Content:** Text and photos from your van build and travels.
- **Design:** Clean and simple.
- **Workflow:** Easy to add and update content over time—**edit in Git** (locally or on GitHub); Netlify rebuilds on push. See **EDITING.md** for step-by-step instructions.

---

## 2. Recommended approach: static site generator + Markdown

Use a **static site generator** so that:

- Content lives in **Markdown** (and optional front matter for dates, titles, photo credits).
- You get **fast, reliable** pages and **simple hosting** on Netlify.
- You can **version content in Git** and deploy on push.

**Recommended tool: Eleventy (11ty)**

- No JavaScript by default → fast and simple.
- Built for content-first sites and blogs.
- Works very well with Netlify (native support, fast builds).
- Easy to add new posts by creating a new Markdown file.

**Alternative:** **Astro** – if you later want more interactive bits or MDX; still great for blogs and images.

---

## 3. Site structure (high level)

```
TravelBlog/
├── src/ or site/
│   ├── index.html or index.md          # Homepage
│   ├── about.md                        # About / family / van
│   ├── _includes/                      # Layouts, header, footer
│   ├── css/
│   ├── posts/                          # Blog posts (van build, travels)
│   │   ├── 2025-01-van-conversion-start.md
│   │   ├── 2025-02-first-trip.md
│   │   └── ...
│   └── photos/ or gallery/             # Optional: dedicated photo pages
├── public/ or static/                  # Images, favicon, etc.
│   └── images/
│       ├── van-build/
│       └── travels/
├── admin/                              # Netlify CMS – browser-based editing
│   ├── index.html                      # CMS script entry point
│   └── config.yml                      # Collections, media, auth
├── netlify.toml                        # Build and redirects
├── package.json
└── .gitignore
```

- **Home:** Short intro + list of recent posts (and maybe a featured photo).
- **About:** Who you are, the van, the trip.
- **Blog:** Chronological posts (van build + travel stories).
- **Photos:** Either inside each post or separate gallery pages—your choice.

---

## 4. Content model (how one post looks)

Each post = one Markdown file with **front matter** and body text.

**Example post:** `posts/2025-01-our-van-conversion-begins.md`

```yaml
---
title: "Our Van Conversion Begins"
date: 2025-01-15
description: "We bought a van and started the conversion. Here's where we began."
tags:
  - van-build
  - conversion
image: /images/van-build/empty-van.jpg
---
```

Then your story in Markdown, with photos referenced like:

```markdown
We started with an empty cargo van...

![Empty van interior](/images/van-build/empty-van.jpg)

First step was insulation...
```

- **Adding a new post** = new file in `posts/` with the same pattern.
- Images go in `public/images/` (or your chosen folder) and you link them in Markdown.

---

## 5. Editing content (Git; CMS optional)

**Recommended workflow:** Edit Markdown files in Git—either **on GitHub** (edit file → Commit) or **locally** (edit in your editor → `git add` / `commit` / `push`). Netlify rebuilds the site on every push. See **EDITING.md** in this repo for step-by-step instructions.

**Netlify CMS (optional, may be broken):** The admin at **`yoursite.com/admin`** relied on Netlify Identity, which has been deprecated. You can ignore the `admin/` folder and use the Git workflow above; the site works the same without it.

---

## 6. Design direction (clean and simple)

- **Typography:** One clear font for headings, one for body (e.g. a system stack or a single Google Font).
- **Layout:** Single column for posts; consistent max-width (e.g. 720px) for reading.
- **Photos:** Full-width or centered, with consistent spacing; optional light captions.
- **Colors:** Neutral background (white or off-white), dark text, one accent color for links and key elements.
- **Navigation:** Simple header: Home, About, Blog (or “Stories”), optional Contact or social links.

No heavy animations or complex UI—focus on readability and your photos.

---

## 7. Netlify setup (summary)

1. **Repository:** Put the project in a Git repo (GitHub, GitLab, or Bitbucket).
2. **Netlify:** New site from Git → connect repo.
3. **Build settings (for Eleventy):**
   - Build command: `npm run build` or `npx @11ty/eleventy`
   - Publish directory: `_site` (Eleventy’s default output).
4. **Netlify Identity (for CMS):** In Netlify dashboard → Site settings → Identity → Enable Identity. Use “Invite only” or “Invite only” + “External providers” so only you (and anyone you invite) can log in.
5. **Git Gateway:** Identity → Services → Enable “Git Gateway” so the CMS can commit on your behalf.
6. **Invite users:** Identity → Invite users → send invites; they’ll set a password and can then use `yoursite.com/admin`.

After this, every push (from you or from the CMS) triggers a build and deploy.

---

## 8. Suggested next steps

| Step | Action |
|------|--------|
| 1 | Initialize the project (e.g. `npm init`, add Eleventy). |
| 2 | Add a minimal layout (HTML shell, header, footer) and global CSS. |
| 3 | Create homepage and one sample post with 1–2 images. |
| 4 | Define permalinks and any tags/categories you want. |
| 5 | Add Netlify CMS: `admin/index.html` (load CMS script) and `admin/config.yml` (backend, media folder, collections for Posts and About). |
| 6 | Push to Git and connect to Netlify; set build command and publish directory. |
| 7 | Enable Netlify Identity and Git Gateway; invite yourself (and any editors); test creating/editing a post at `yoursite.com/admin`. |

---

## 9. Tech summary

| Item | Choice |
|------|--------|
| Site generator | Eleventy (11ty) |
| Content | Markdown + front matter (edited via CMS or directly in repo) |
| **Editing** | **Netlify CMS** – browser-based admin at `/admin` |
| Styling | Plain CSS or a minimal framework (e.g. simple custom CSS) |
| Hosting | Netlify (build from Git) |
| Auth for CMS | Netlify Identity + Git Gateway |

This gives you a clean, simple travel blog that you can edit in the browser. If you want to move to implementation next, we can scaffold the Eleventy project and add the Netlify CMS config (admin pages + `config.yml`) in this repo.

---

## 10. Getting started (no Git yet)

Do these in order. You can stop after any step and pick up later.

| Order | What to do |
|-------|------------|
| **1. Install Git** | Download and install from [git-scm.com](https://git-scm.com). Open a terminal and run `git --version` to confirm. |
| **2. Create a Git hosting account** | Sign up at **GitHub** ([github.com](https://github.com)), **GitLab**, or **Bitbucket**. Netlify works with all of them; GitHub is the most common. |
| **3. Build the site locally** | In this folder (TravelBlog), we scaffold the Eleventy project, add the layout and one sample post, and add the Netlify CMS files (`admin/index.html` + `admin/config.yml`). You’ll be able to run the site on your machine with `npm run build` and `npm run serve` (or similar). |
| **4. Initialize Git and push** | In the project folder: `git init`, add a `.gitignore`, commit everything, create a new repo on GitHub (or your host), add it as `origin`, and push. Your code and content then live in the cloud. |
| **5. Connect Netlify** | Sign up at [netlify.com](https://www.netlify.com), add a new site “from Git,” connect your repo, set build command (e.g. `npm run build`) and publish directory (`_site`). Netlify will build and give you a live URL. |
| **6. Turn on the CMS** | In Netlify: enable **Identity** and **Git Gateway**, then invite yourself (and any editors) via email. After that, go to `https://your-site.netlify.app/admin` to log in and add or edit posts in the browser. |

**Summary:** 1) Install Git → 2) Get a GitHub (or similar) account → 3) Build the site in this folder (we can do this step together) → 4) Put the project on GitHub with Git → 5) Connect Netlify to the repo → 6) Enable Identity + Git Gateway and use `/admin` to edit.

If you want to start with **step 3** (building the site here), say so and we can scaffold the Eleventy project and Netlify CMS in this repo next.
