/* =====================================================================
 *  CONTENT FILE — this is the ONLY file you need to edit to update
 *  your website. Save it, then upload it to your host (replace the old
 *  one). No build step needed.
 *
 *  Tips:
 *   - Any text starting with "TODO" is shown highlighted on the page so
 *     you can spot what still needs filling in. Replace it or set it to "".
 *   - Empty strings ("") and empty lists ([]) are simply hidden.
 *   - Link fields (pdf, ssrn, slides, journal...) appear as buttons only
 *     when filled in. Put paper PDFs in the "papers/" folder and link
 *     them like "papers/my-paper.pdf".
 *   - Keep the commas between items! (A missing comma breaks the page —
 *     open the browser console with F12 to see the error line.)
 * ===================================================================== */

window.SITE = {
  name: "Min Yang",
  title: "PhD Candidate in Finance",
  affiliation: "University of Zurich & Swiss Finance Institute (SFI)",
  email: "min.yang2@df.uzh.ch",
  photo: "", // e.g. "assets/photo.jpg" — leave "" to show initials
  cv: "assets/CV_MinYang.pdf",

  // Optional highlighted line at the top, e.g. "I am on the 2026–2027 academic job market."
  announcement: "",

  links: [
    // Shown as icons/buttons under your name. Remove any you don't use.
    { label: "Google Scholar", url: "" }, // TODO: add URL
    { label: "SSRN", url: "" },
    { label: "LinkedIn", url: "" },
  ],

  bio: [
    // One string per paragraph.
    "TODO: Short bio. e.g. I am a PhD candidate in Finance at the University of Zurich and the Swiss Finance Institute, advised by Prof. Markus Leippold. My research focuses on behavioral finance, empirical asset pricing, and machine learning in finance.",
  ],

  interests: ["Behavioral Finance", "Empirical Asset Pricing", "Machine Learning in Finance"],

  // ---------------------------------------------------------------
  //  RESEARCH
  //  Fields per paper: title, coauthors, status, note, abstract,
  //                    links: { pdf, ssrn, slides, journal, ... any label }
  // ---------------------------------------------------------------
  jobMarketPaper: {
    title: "Beyond Content: News Consecutiveness, Investor Attention, and Market Reactions",
    coauthors: "",
    status: "",
    note: "SGF Conference (Poster)",
    abstract: "TODO: Add abstract.",
    links: { pdf: "", ssrn: "" },
  },

  workingPapers: [
    {
      title: "Dilution vs. Risk Taking: Capital Gains Taxation and Entrepreneurship",
      coauthors: "Eduardo Azevedo, Florian Scheuer, and Kent Smetters",
      status: "Revise & Resubmit, Quarterly Journal of Economics",
      note: "",
      abstract: "",
      links: { pdf: "", ssrn: "" },
    },
    {
      title: "A Credibility Premium: How PhD CEOs Shape Disclosure, Market Reactions, and Risk Resolution",
      coauthors: "Markus Leippold and Qian Wang",
      status: "",
      note: "CICF Conference",
      abstract: "",
      links: { pdf: "", ssrn: "" },
    },
  ],

  publications: [
    {
      title: "Technical Patterns and News Sentiment in Stock Markets",
      coauthors: "Markus Leippold and Qian Wang",
      status: "The Journal of Finance and Data Science, 10, 100145 (2024)",
      note: "",
      abstract: "",
      links: { journal: "" }, // TODO: add DOI / journal link
    },
  ],

  workInProgress: [
    {
      title: "What Drives Stablecoin Yields in DeFi Lending Markets?",
      coauthors: "Aron Bodisz and Yuan Chen",
    },
    {
      title: "The Signal or the Reader? Soft Information and Analyst Expectations When Hard Information is Weak",
      coauthors: "",
    },
  ],

  // ---------------------------------------------------------------
  //  OTHER SECTIONS
  // ---------------------------------------------------------------
  presentations: [
    { year: "2026", items: "UZH Brown Bag Seminar, SGF Conference (Poster), SFI Research Days, CICF Conference" },
    { year: "2025", items: "5th Global PhD Student Colloquium, SFI Research Days" },
    { year: "2024", items: "UZH Brown Bag Seminar" },
    { year: "2023", items: "UZH Brown Bag Seminar" },
  ],

  teaching: [
    {
      role: "Teaching Assistant",
      course: "Financial Engineering (Master level)",
      place: "University of Zurich",
      years: "2023 – Present",
    },
  ],

  education: [
    {
      degree: "PhD in Finance (Candidate)",
      school: "University of Zurich & Swiss Finance Institute",
      years: "2022 – Present",
      details: [
        "Supervisor: Prof. Markus Leippold",
        "Visiting PhD Student, USC Marshall School of Business (Host: Prof. David Hirshleifer)",
        "First-year Doctoral Grant",
      ],
    },
    {
      degree: "MSc Quantitative Finance",
      school: "ETH Zurich & University of Zurich",
      years: "2020 – 2022",
      details: [],
    },
    {
      degree: "MSc Mathematical and Computational Finance",
      school: "University of Oxford",
      years: "2019 – 2020",
      details: ["Graduated with Distinction"],
    },
    {
      degree: "BSc Mathematics",
      school: "Nanjing University",
      years: "2015 – 2019",
      details: ["National Elite Program; People’s Scholarship; Guanghua Scholarship"],
    },
  ],

  // Optional: references / letter writers. Leave [] to hide the section.
  references: [
    // { name: "Prof. Markus Leippold", place: "University of Zurich", email: "" },
  ],

  footer: "Last updated: November 2026",
};
