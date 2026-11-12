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
  photo: "assets/my.jpg", // leave "" to show initials
  cv: "assets/CV_MinYang_academic.pdf",

  // Optional highlighted line at the top, e.g. "I am on the 2026–2027 academic job market."
  announcement: "",

  //links: [
    // Shown as icons/buttons under your name. Remove any you don't use.
  //  { label: "Google Scholar", url: "" }, // TODO: add URL
  //  { label: "SSRN", url: "" },
  //  { label: "LinkedIn", url: "" },
  //],

  bio: [
    // One string per paragraph.
    "I am a PhD candidate in Finance at the University of Zurich and the Swiss Finance Institute. My main advisor is Prof. Markus Leippold. Currently, I am a visiting PhD student at University of Southern California, Marshall School of Business, hosted by Prof. David Hirshleifer. My research focuses on information in financial markets, behavioral finance and entrepreneurial finance.",
  ],

  //interests: ["Behavioral Finance", "Empirical Asset Pricing", "Machine Learning in Finance"],

  // ---------------------------------------------------------------
  //  RESEARCH
  //  Fields per paper: title, coauthors, status, note, abstract,
  //                    links: { pdf, ssrn, slides, journal, ... any label }
  // ---------------------------------------------------------------
  jobMarketPaper: {
    title: "Timing and the Teller: How Markets Price News",
    coauthors: "",
    status: "",
    note: "UZH Brown Bag Seminar (2026), SFI Research Days(2026), SGF Conference (Poster, 2026)",
    abstract: "Investors react strongly to some news and barely to other news, even when the information are equally novel. Combining a simple Bayesian model of learning with Dow Jones Newswires data from 2000 to 2023, this paper studies how investors learn from a news story in context: what they have recently learned about the firm, and who is telling them. I focus on consecutive news, a story that shares the sign of the firm's most recent prior story. Controlling for informational content, consecutive stories move prices up to 9\% less than initial stories and this discount disappears within two weeks. News origin determines the reason behind it. Consecutive stories from journalists or third parties have weaker price reactions and less trading. When the gap between the two stories is only a few days, no post-news drift emerges, consistent with anticipation. When the gap is roughly a week, post-news momentum emerges, consistent with limited attention. Consecutive stories from the firm itself generate more trading with no price discount or drift, indicating disagreement. The discount appears mainly in good news sequences and much less in bad news sequences. Anticipation is more visible in firms with high institutional ownership while disagreement dominates in firms with low institutional ownership.",
    links: { pdf: "", ssrn: "" },
  },

  workingPapers: [
    {
      title: "Dilution vs. Risk Taking: Capital Gains Taxation and Entrepreneurship",
      coauthors: "Eduardo Azevedo, Florian Scheuer, and Kent Smetters",
      status: "Revise & Resubmit, Quarterly Journal of Economics",
      note: "",
      abstract: "Recent proposals to tax unrealized capital gains or wealth have sparked a debate over their impact on entrepreneurship. We show that, under accrual-based taxation, successful founders face greater dilution from advance tax payments, whereas the effect on unsuccessful founders hinges on the treatment of capital losses: With incomplete loss offsets, founders effectively overpay taxes, whereas full tax refunds would provide a form of insurance against downside risk. Using comprehensive new data on U.S. venture capital deals, we find that founder returns are substantially lower than previously estimated and extremely skewed, with 88% of founders receiving zero exit value while the top 1% account for 79% of total value. Moving from the current realization-based tax system to accrual-based taxation would reduce founder ownership at exit by 25% on average; with full refunds, it would also increase the share of founders receiving positive payoffs from 12% to 44%. Embedding these distributions in a dynamic career choice model, we find that founders with low risk aversion prefer realization-based taxation, while more risk-averse founders prefer accrual-based taxation under complete tax credits. By contrast, a wealth tax or incomplete loss offset provisions (such as loss carry-forward) would discourage entrepreneurship: They generate similar dilution but produce no risk-sharing benefits due to the absence of tax credits in down rounds.",
      links: { pdf: "", ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5780185" },
    },
    {
      title: "A Credibility Premium: How PhD CEOs Shape Disclosure, Market Reactions, and Risk Resolution",
      coauthors: "Markus Leippold and Qian Wang",
      status: "",
      note: "UZH Brown Bag Seminar (2025), SFI Research Days(2025), 5th Global PhD Student Colloquium (2025), CICF Conference (2026)",
      abstract: "We show that doctoral education carries a credibility premium in CEO communication. In our model, PhD training raises the personal cost of promotional language and false precision, yielding truthful but hedged disclosure. In 70,127 earnings calls (2007-2022), PhD CEOs speak less positively and more willing to acknowledge uncertainty. However, their calls earn higher abnormal returns and lower volatility. Analysts read their vagueness as epistemic humility rather than evasion: forecast dispersion rises while forecast errors fall. JD CEOs share the linguistic style but earn no premium, isolating scientific training as the source. The effects persist across CEO turnovers.",
      links: { pdf: "", ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5116709" },
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
  ],

  // ---------------------------------------------------------------
  //  OTHER SECTIONS
  // ---------------------------------------------------------------

  teaching: [
    {
      role: "Teaching Assistant",
      course: "Financial Engineering (Master level)",
      place: "University of Zurich",
      years: "2023 – Present",
    },
  ],


  // Optional: references / letter writers. Leave [] to hide the section.
  references: [
    { name: "Prof. Markus Leippold", place: "University of Zurich", email: "markus.leippold@df.uzh.ch" },
    { name: "Prof. Florian Scheuer", place: "University of Zurich", email: "florian.scheuer@uzh.ch" },
    { name: "Prof. Eduardo Azevedo", place: "University of Pennsylvania's Wharton School", email: "eazevedo@wharton.upenn.edu" },
  ],

  footer: "Last updated: November 2026",
};
