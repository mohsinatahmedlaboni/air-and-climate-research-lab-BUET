# Air and Climate Research Lab (ACRL), BUET — website

| File / folder | What it is |
|---|---|
| `index.html` | The whole website: all pages, design, menu, animations. |
| `content-people.js` | Everyone on the People pages and the Contact page directory. |
| `content-news.js` | News items and events (News & Events pages, Researchers' Network sessions). |
| `images/` | Logos, member photos and news images. |

Keep all of these together in one folder. It works from any folder, e.g. `smrahman.buet.ac.bd/acrl/`.

## Editing people (`content-people.js`)
Each person is one `{ ... }` block. Fields:
- `group`: `"Faculty"`, `"Collaborators"`, `"Members"` (Lab members), `"Research Fellows"`, `"Field Staff"` (Technical and support staff) or `"Alumni"`
- `name`, `role` (e.g. "Principal Investigator", "Advisor"), `title` (designation for the Contact directory, e.g. "Professor, Department of Civil Engineering, BUET"), `aff` (affiliation)
- `email` (leave `""` to hide), `photo` (file name in `images/`, or `""` for initials)
- `bio` (80 words or fewer), `tags` (up to 5), `links` (`["Label", "https://..."]`)

## Editing news and events (`content-news.js`)
- News: `slug` (short unique id used in the page address), `date`, `type` ("News" or "Opportunity"), `status` ("Open" or "Closed", optional), `deadline` (for open calls), `title`, `text`, `img` (optional), `link` and `linkText` (optional).
  Items with `status: "Open"` are pinned and highlighted at the top of News & Events. Change to `"Closed"` once the deadline passes.
- Events: `date` (or `null` for TBA), `kind` ("Workshop", "Webinar"…), `title`, `who`, `where`, `reg` (registration link). Add `past: true` once an event has happened. `network: true` also shows it on the Researchers' Network page.

## Rules that prevent most mistakes
- Text goes inside straight quotes `"…"`; items are separated by commas; every `{` and `[` needs its closing `}` and `]`.
- Image file names must match exactly, including lowercase/uppercase and `.jpg` / `.png`.

Other text (About, Research areas, project pages, Publications) is in `index.html`. These will move into the admin panel when it is built.
