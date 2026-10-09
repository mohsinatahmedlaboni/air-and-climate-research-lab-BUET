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
     c) Every member ends with  },  (closing brace + comma) before the next one.

   BIO TEXT: the bio is wrapped in BACKTICKS ( ` ), not quote marks, so it can safely
   contain "double quotes", 'single quotes' and apostrophes. Don't use a backtick inside it.

   TEMPLATE:
   {
     group: "Project Team",                    // must match a name in GROUP_ORDER exactly
     name: "Dr. Full Name",
     role: "Principal Investigator",            // designation
     affiliation: "Department of Civil Engineering, BUET",
     email: "name@example.com",
     photo: "filename.jpg",                     // file inside the images folder
     bio: `Short biography in the third person.`,   // keep it within 80 words
     interests: ["Topic one", "Topic two"],     // maximum 5. Shown as tags in the profile
     links: [                                   // any number of links, or [] for none
       ["Google Scholar", "https://scholar.google.com/..."],
       ["LinkedIn", "https://www.linkedin.com/in/..."]
     ]
   },
   ===================================================================== */

window.PEOPLE = [

  {
    group: "Principal Investigators",
    name: "Sheikh Mokhlesur Rahman, Ph.D.",
    role: "Principal Investigator",
    affiliation: "Bangladesh University of Engineering and Technology (BUET)",
    email: "smrahman@ce.buet.ac.bd",
    photo: "mokhlesur-rahman.jpg",
    bio: `Dr. Sheikh Mokhlesur Rahman is the principal investigator of the HEAT project. He received his Bachelor’s and Master’s degrees in Civil Engineering from BUET, followed by a PhD in Environmental Engineering from Northeastern University. His PhD research focused on applying data mining and machine learning approaches to assess, characterize, and predict chemical toxicity from toxicogenomic data. Currently, he is serving as a Professor in the Department of Civil Engineering at BUET, specializing in Environmental Engineering.`,
    interests: ["Environmental data analysis", "Life cycle assessment", "Pollution management", "Sustainable Development"],
    links: [
      ["ResearchGate", "https://www.researchgate.net/profile/Sheikh-Rahman-5"],                   
      ["Google Scholar", "https://scholar.google.com/citations?user=rTprlQsAAAAJ&hl=en"],
      ["LinkedIn", "https://bd.linkedin.com/in/mokhles-sh"]
    ]
  },

  {
    group: "Principal Investigators",
    name: "Provat Kumar Saha, Ph.D.",
    role: "Principal Investigator",
    affiliation: "University of Washington (UW)",
    email: "psaha3@uw.edu",
    photo: "provat-saha.jpg",
    bio: `Dr. Provat Kumar Saha is the principal investigator of the project titled 'Developing Tools to Improve Air Quality Management in Bangladesh'. He is currently serving as an adjunct assistant professor at the University of Washington and is part of the Marshall Research Group. His research uses models and measurements to help reduce air pollution in Bangladesh.`,
    interests: ["Air quality", "Low-cost sensors", "Particulate matter", "Chemical speciation", "Emission inventory"],
    links: [
      ["ResearchGate", "https://www.researchgate.net/profile/Provat-Saha"],
      ["Google Scholar", "https://scholar.google.com/citations?user=xCmoOTUAAAAJ&hl=en"]
    ]
  },

  {
    group: "Principal Investigators",
    name: "Julian Marshall, Ph.D.",
    role: "Co-Principal Investigator",
    affiliation: "University of Washington (UW)",
    email: "jdmarsh@uw.edu",
    photo: "julian-marshall.jpg",
    bio: `Dr. Julian Marshall is the Co-Principal Investigator of the project ‘Developing Tools to Improve Air Quality Management in Bangladesh’. His research lies at the intersection of air quality engineering and public health, focusing on how much pollution people breathe and how to reduce those exposures. His work spans mechanistic and empirical modeling of how air pollution varies in space and time and responds to emission changes; exposure measurement and modeling in low-income countries; and exposure disparities across race and income.`,
    interests: ["Air quality engineering", "Exposure assessment", "Air pollution modeling", "Exposure disparities"],
    links: [
      ["Google Scholar", "https://scholar.google.com/citations?user=41-6Uf4AAAAJ&hl=en"],
      ["LinkedIn", "https://www.linkedin.com/in/julian-marshall-59687710/"]
    ]
  },

  {
    group: "Project Team",
    name: "Sayma Sultana Keya",
    role: "Research Assistant",
    affiliation: "Bangladesh University of Engineering and Technology (BUET)",
    email: "saymakeya21@gmail.com",
    photo: "keya.jpg",
    bio: `Sayma Sultana Keya is a Research Assistant on the project ‘Developing Tools to Improve Air Quality Management in Bangladesh’, contributing to air quality research and related environmental analysis. A civil engineering graduate of Khulna University of Engineering & Technology (KUET), she focuses on environmental engineering and air quality, particularly air pollution modeling, including land-use regression, geospatial validation, and applications of artificial intelligence and machine learning. She aims to support greener, smarter and more sustainable urban environments through practical, interdisciplinary research.`,
    interests: ["Air quality", "Land-use regression", "Geospatial validation", "AI & machine learning"],
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/sayma-sultana-keya-39b301208/"],
      ["ResearchGate", "https://www.researchgate.net/profile/Sayma-Keya"],
      ["Google Scholar", "https://scholar.google.com/citations?user=HuOMarkAAAAJ&hl=en"]
    ]
  },

  {
    group: "Project Team",
    name: "Mohsinat Ahmed Laboni",
    role: "Research Assistant",
    affiliation: "Bangladesh University of Engineering and Technology (BUET)",
    email: "mohsinat.ahmed@gmail.com",
    photo: "laboni.jpg",
    bio: `Mohsinat Ahmed Laboni is a research assistant working under the project titled 'Developing Tools to Improve Air Quality Management in Bangladesh', where she's working towards building a national-scale emission inventory and developing Intervention Model for Air Pollution (InMAP) for Bangladesh. She earned her B.Sc. in Civil Engineering, specializing in Environmental Engineering. Her primary research areas encompass environmental contaminant dynamics in water and air systems, chemical transport modeling, emission inventories, and data-driven predictive analysis.`,
    interests: ["Contaminant dynamics", "Chemical transport modeling", "Emission inventories", "Predictive analysis"],
    links: [
      ["Website", "https://mohsinatahmedlaboni.github.io"],
      ["ResearchGate", "https://www.researchgate.net/profile/Mohsinat-Laboni?ev=hdr_xprf"],
      ["LinkedIn", "https://www.linkedin.com/in/mohsinat-ahmed-laboni"],
      ["Google Scholar", "https://scholar.google.com/citations?user=O_qegIwAAAAJ"]
    ]
  },

  {
    group: "Advisors",
    name: "Alper Ünal, Ph.D.",
    role: "Advisor",
    affiliation: "Istanbul Technical University",
    email: "aunal@itu.edu.tr",
    photo: "alper-unal.jpg",
    bio: `Dr. Alper Ünal is an advisor to the project 'Developing Tools to Improve Air Quality Management in Bangladesh', where he is one of the experts developing the national-scale emission inventory for Bangladesh, alongside chemical transport modeling using WRF-Chem and CMAQ. He is a professor at the Eurasia Institute of Earth Sciences, Istanbul Technical University.`,    interests: ["Emission inventories", "Chemical transport modeling", "WRF-Chem", "CMAQ", "Air quality management"],
    links: [
      ["Website", "https://research.itu.edu.tr/en/persons/alper-%C3%BCnal/"],
      ["ResearchGate", "https://www.researchgate.net/profile/Alper-Unal-2"],
      ["LinkedIn", "https://www.linkedin.com/in/alper-unal-953b271/"],
      ["Google Scholar", "https://scholar.google.com/citations?user=lhK5pdUAAAAJ&hl=en"]
    ]
  }


];
