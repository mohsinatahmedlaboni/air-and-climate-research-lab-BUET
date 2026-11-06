/* NEWS and EVENTS. Newest news is shown first; items with status "Open" are pinned and highlighted.
   img: a file name inside the images folder (optional).  date / deadline: "YYYY-MM-DD".  Events with date null show "TBA". */
window.NEWS = [
  { slug: "freihardt", date: "2026-10-06", type: "News", title: "ACRL welcomes Dr. Jan Freihardt", img: "news-freihardt.jpg",
    text: "Dr. Freihardt is in Bangladesh to study how neighborhood-scale air pollution information shapes citizens’ awareness, perceptions and responses. ACRL will collaborate on air pollution monitoring and emission-related research using low-cost sensor technologies." },
  { slug: "phd-fellowship", date: "2026-10-01", deadline: "2026-10-31", type: "Opportunity", status: "Open", title: "PhD Research Fellowship: mobile air quality monitoring",
    text: "The HEAT sub-project invites applications for one full-time PhD Research Fellow. Stipend BDT 50,000 per month. Applications close 31 October 2026.",
    link: "#/research/projects/heat~fellowship", linkText: "Fellowship details" },
  { slug: "grad-fellowship", date: "2026-09-30", type: "Opportunity", status: "Closed", title: "Graduate Student Fellowship for Air Pollution Research in Bangladesh", img: "news-grad-fellowship.jpg", imgTop: true,
    text: "Up to 10 fellows per cycle receive BDT 100,000, mentorship and access to data.", link: "#/research/projects/aqm~fellowship", linkText: "Details" },
  { slug: "hiring", date: "2026-08-08", type: "Opportunity", status: "Closed", title: "Hiring: Project Manager and Research Assistants", img: "news-hiring.jpg", imgTop: true,
    text: "A Project Manager to lead nationwide monitoring, and Research Assistants based at BUET." },
  { slug: "ra-positions", date: "2026-03-03", type: "Opportunity", status: "Closed", title: "Research Assistant positions announced",
    text: "BUET opened 3 to 5 full-time Research Assistant positions on air pollution research." }
];
window.EVENTS = [
  { date: null, kind: "Workshop", network: true, title: "[Workshop title]", who: "[Facilitator name, affiliation]", where: "[Venue at BUET] · [Time]", reg: "#/network~join" },
  { date: null, kind: "Webinar", network: true, title: "[Webinar title]", who: "[Speaker name, affiliation]", where: "Online · [Time] Dhaka time", reg: "#/network~join" },
  { date: "2026-08-27", kind: "Webinar", past: true, title: "Fellowship virtual office hour", who: "ACRL team", where: "Online on Zoom, 8:00 to 9:00 PM Dhaka time" }
];

