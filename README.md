# Air and Climate Research Lab (ACRL), BUET — website

The website is built from a few files. **You only ever need to edit the `content-…js` files** and upload photos. `index.html` holds the design and animation; leave it as it is.

| File | What it controls |
|---|---|
| `content-site.js` | Lab name, the line under it, footer "About" text, address, LinkedIn link, map location |
| `content-news.js` | News (home page, left box) |
| `content-events.js` | Upcoming events (home page, right box) |
| `content-research-areas.js` | The five coloured Research area cards (home page) |
| `content-research.js` | The projects listed on the **Research** page |
| `content-people.js` | People page, the order of its sections, and the Lab directory on the Contact page |
| `images/` | Logos, member photos and `placeholder.png` (shown when a member has no photo) |

---

## How to edit a file on GitHub

1. Click the file (for example `content-news.js`).
2. Click the **pencil icon** (Edit this file) at the top right.
3. Make your change.
4. Click **Commit changes…**, then **Commit changes** again in the pop-up.
5. Wait 1–2 minutes, then open the site and press **Ctrl + Shift + R** (Mac: **Cmd + Shift + R**).

Each content file starts with a **TEMPLATE** in its comments. To add something, copy the template, paste it inside the list (between `[` and `]`), and fill it in.

---

## Adding a member (People page)

**1. Upload the photo**
- Open the `images` folder → **Add file → Upload files** → drag in the photo → **Commit changes**.
- JPG, face near the top-centre, at least 400 px wide, ideally under 300 KB.
- Use a simple **lowercase** name with no spaces or special letters: `alper-unal.jpg`, not `Alper Ünal.JPG`.
- No photo yet? Skip this and write `photo: ""` — a neutral placeholder is shown.

**2. Add the entry**
- Open `content-people.js` → pencil icon.
- Copy the TEMPLATE from the top of the file and paste it inside `window.PEOPLE = [ … ]`.
- Fill it in and commit.

**What each line means**

| Line | What to write |
|---|---|
| `group` | Which section they appear in. Must match a name in `GROUP_ORDER` **exactly** |
| `name` | Full name as it should appear |
| `role` | Designation, e.g. `"Co-Principal Investigator"`, `"Research Assistant"` |
| `affiliation` | Department or institution |
| `email` | Shown in their profile and the Contact page directory. `""` to leave out |
| `photo` | The photo's file name exactly as in the `images` folder |
| `bio` | Third person, **80 words or fewer**, wrapped in **backticks** (see below) |
| `interests` | Up to **5** short tags, e.g. `["Air quality", "Emission inventories"]` |
| `links` | Profile links as `["Label", "web address"]`, or `[]` for none |

**Sections and their order**

The sections on the People page always appear in the order of `GROUP_ORDER` at the top of `content-people.js`:

1. Principal Investigators *(PIs and Co-PIs)*
2. Advisors
3. Project Team *(research assistants, project managers, administrative staff)*
4. Research Fellows *(PhD fellows, postdoctoral researchers)*
5. Field Staff

- It does **not** matter where in the list you paste someone: a Principal Investigator added at the bottom still appears in the Principal Investigators section at the top.
- **Within** a section, people appear in the order they are listed in the file.
- A section with nobody in it is hidden automatically.
- To add a new kind of section, add its name to `GROUP_ORDER` where you want it, then use that exact name in `group`.
- If someone appears in a strange section at the very bottom, their `group` is misspelled (e.g. `"Principal Investigator"` without the **s**).

---

## The rules that prevent almost every problem

**1. Commas between members.** Every member is wrapped in `{ }`. Each `}` needs a comma after it **except the very last one**:

```js
  { … first member … },
  { … second member … },
  { … last member … }
];
```

> ⚠️ **Adding someone at the end?** The member who *used to be* last has no comma. Add one after their `}` — this is the most common mistake.

**2. Bios use backticks.** In `content-people.js`, each bio is wrapped in backticks `` ` `` (the key under **Esc**), not quote marks:

```js
    bio: `She works on the project "Developing Tools…" and it's going well.`,
```

Inside backticks you can freely use "double quotes", 'single quotes' and apostrophes. Just never put a backtick inside a bio.

**3. Everything else uses straight quote marks.** `name: "Full Name",` — keep the quotes and the comma at the end of the line. If the text itself needs a double quote, use curly ones (“ ”).

**4. Brackets come in pairs.** Every `{` needs a `}`, every `[` needs a `]`.

**5. Don't touch the first line.** Each content file must begin with `/*` (slash + star). Deleting the slash breaks the whole file.

**6. Dates** are written `"YYYY-MM-DD"`, e.g. `"2026-12-31"`. For an event with no date yet, write `date: null` (no quotes) and it shows **TBA**.

---

## Troubleshooting

**A red message appears at the top of the site**
It names the file and line number with the problem. Open that file and look at that line **and the line just above it** — usually a missing comma, a missing quote mark, or an unclosed `}`.

**The page doesn't change after editing**
1. Open the file on GitHub (without editing) and check the change is there and the last commit says "just now" / a few minutes ago. If not, the change was not committed.
2. Open the **Actions** tab: the newest *pages build and deployment* run should have a green ✓ and be newer than your edit.
3. GitHub can serve the old version for up to ~10 minutes. Wait, then open the site in a **private/incognito window**.
4. Make sure there is only one copy of the file, named exactly right (not `content-people (1).js`), sitting next to `index.html` — not inside `images`.

**A photo doesn't show (placeholder or broken image)**
- The photo must be inside the `images` folder.
- The name in `photo: "…"` must match the file name **exactly**, including lowercase/uppercase and the extension (`.jpg` vs `.jpeg` vs `.JPG`).

**Something went wrong and I want to undo it**
Open the file → **History** → choose an earlier version → copy its contents → edit the current file, paste, and commit.

---

## Other common edits

| To change… | Open… |
|---|---|
| The line under the lab name, footer About text, address, LinkedIn link | `content-site.js` |
| Tab names, page headings, button labels (e.g. "Research", "Explore research") | `index.html` — the only text kept there; search for the words with Ctrl + F |
| Add / edit news | `content-news.js` (newest date is shown first and larger) |
| Add / edit events | `content-events.js` |
| Research area cards | `content-research-areas.js` (always five; colours are fixed by position) |
| Add / edit a project on the Research page | `content-research.js` |
| Replace a logo | Upload a new file to `images` with exactly the same name (`acrl-logo.png` or `buet-logo.png`) |
