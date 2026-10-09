/* =====================================================================
   PEOPLE  (People page + the Lab directory on the Contact page)

   1) GROUP ORDER: the sections on the People page appear in this order.
      Add or rename groups here. A group with nobody in it is not shown.
   ===================================================================== */

window.GROUP_ORDER = [
  "Principal Investigators",
  "Advisors",
  "Project Team",      // research assistants, project managers, administrative staff
  "Research Fellows",  // PhD fellows, postdoctoral researchers
  "Field Staff"
];

/* =====================================================================
   2) MEMBERS
   To ADD a member:
     a) Upload their photo into the "images" folder (JPG, face near the top-centre,
        at least 400 px wide). Leave photo as "" if there is no photo yet:
        a neutral placeholder will be shown.
     b) Copy the template, paste it inside the list, fill it in.

   TEMPLATE:
   {
     group: "Project Team",                    // must match a name in GROUP_ORDER exactly
     name: "Dr. Full Name",
     role: "Principal Investigator",            // designation
     affiliation: "Department of Civil Engineering, BUET",
     email: "name@example.com",
     photo: "filename.jpg",                     // file inside the images folder
     bio: "Short biography in the third person.",
     interests: ["Topic one", "Topic two"],     // shown as tags in the profile
     links: [                                   // any number of links, or [] for none
       ["Google Scholar", "https://scholar.google.com/..."],
       ["LinkedIn", "https://www.linkedin.com/in/..."]
     ]
   },
   ===================================================================== */

window.PEOPLE = [

  {
    group: "Project Team",
    name: "Sayma Sultana Keya",
    role: "Research Assistant",
    affiliation: "Bangladesh University of Engineering and Technology (BUET)",
    email: "saymakeya21@gmail.com",
    photo: "keya.jpg",
    bio: "Sayma Sultana Keya is a research assistant working in the project titled "Developing Tools to Improve Air Quality Management in Bangladesh", whereshe contributes to air quality research and related environmental analysis. She is a civil engineering graduate from Khulna University of Engineering & Technology (KUET). Her academic and research interests focus on environmental engineering and air quality. She is particularly interested in air pollution modeling, including land-use regression, geospatial validation, and the application of artificial intelligence and machine learning in environmental research. Through her research, she aims to contribute to greener, smarter, and more sustainable urban environments through practical and interdisciplinary approaches.",
    interests: ["Air quality", "Land-use regression", "Geospatial validation", "AI & machine learning"],
    links: [
      ["Phone", "tel:+8801771181149"],
      ["LinkedIn", "https://www.linkedin.com/in/sayma-sultana-keya-39b301208/"],
      ["ResearchGate", "https://www.researchgate.net/profile/Sayma-Keya"],
      ["Google Scholar", "https://scholar.google.com/citations?user=HuOMarkAAAAJ&hl=en"]
    ]
  },

  {
    group: "Project Team",
    name: "Mohsinat Ahmed Laboni",
    role: "Research Assistant",
    affiliation: "BUET",
    email: "mohsinat.ahmed@gmail.com",
    photo: "laboni.jpg",
    bio: "Mohsinat Ahmed Laboni earned her B.Sc. in Civil Engineering, specializing in Environmental Engineering. Currently a Research Assistant for the project “Developing Tools to Improve Air Quality Management in Bangladesh,” her primary research areas encompass environmental contaminant dynamics in water and air systems, chemical transport modeling, emission inventories, and data-driven predictive analysis.",
    interests: ["Contaminant dynamics", "Chemical transport modeling", "Emission inventories", "Predictive analysis"],
    links: [
      ["Website", "https://mohsinatahmedlaboni.github.io"],
      ["LinkedIn", "https://www.linkedin.com/in/mohsinat-ahmed-laboni"],
      ["Google Scholar", "https://scholar.google.com/citations?user=O_qegIwAAAAJ"]
    ]
  }

];
