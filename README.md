# Air and Climate Research Lab (ACRL), BUET — website

The design lives in `index.html`. You should not need to edit it.
All text and lists live in six small **content files**, one per section:

| File | What it controls |
|---|---|
| `content-site.js` | Lab name, the line under it, footer "About" text, address, LinkedIn link, map location |
| `content-news.js` | News (home page, left box) |
| `content-events.js` | Upcoming events (home page, right box) |
| `content-research-areas.js` | The five coloured Research area cards |
| `content-projects.js` | Projects page |
| `content-people.js` | People page, group order, and the Lab directory on the Contact page |

Photos and logos are in the `images` folder.

## How to edit on GitHub

1. Click the file you want to change (for example `content-news.js`).
2. Click the **pencil icon** (Edit this file) at the top right.
3. Make your change.
4. Click **Commit changes**. The live site updates within a minute or two.

Each content file starts with a **TEMPLATE**. To add something, copy the template, paste it inside the list (between `[` and `]`), and fill it in.

## Adding a new member

1. Open the `images` folder → **Add file → Upload files** → upload the photo (JPG, face near the top-centre, at least 400 px wide, ideally under 300 KB). Use a simple file name with no spaces, e.g. `rahman.jpg`.
2. Open `content-people.js`, copy the template, paste it into the `PEOPLE` list, and fill it in. Put the photo's file name in `photo: "rahman.jpg"`.
3. Set `group:` to one of the names in `GROUP_ORDER` (e.g. `"Director"`, `"Principal Investigators"`, `"Resource Persons"`, `"Research Assistants"`). To add a new kind of group, add its name to `GROUP_ORDER` in the position you want.

No photo yet? Use `photo: ""` and a neutral placeholder is shown.
The member's email is added to their profile and to the Contact page directory automatically.

## Rules that prevent most mistakes

- Text goes **inside quote marks**: `title: "My title",`
- Items in a list are separated by **commas**: `{ ... },` then the next `{ ... }`
- Every `{` needs a matching `}`, and every `[` a matching `]`.
- If your text contains a double quote, use the curly ones (“ ”) or a single quote instead.
- Dates are written `"YYYY-MM-DD"`, for example `"2026-12-31"`.

## If something breaks

If a content file has a mistake, the website shows a **red message at the top** naming the file and the line number. Open that file, look at that line and the line just above it (usually a missing comma or quote), fix it, and commit again.

You can always undo a change: open the file, click **History**, pick the earlier version, and copy its contents back.

## Replacing a logo

Upload a new file into `images` with exactly the same name (`acrl-logo.png` or `buet-logo.png`). It replaces the old one.
