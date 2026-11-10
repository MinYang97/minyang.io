/* Renders content.js into the page. You normally don't need to edit this file. */
(function () {
  const S = window.SITE;
  if (!S) {
    document.body.insertAdjacentHTML("afterbegin",
      '<p style="background:#fee;padding:1em">content.js failed to load — probably a syntax error (missing comma or quote). Press F12 → Console to see the line.</p>');
    return;
  }
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // Text starting with TODO is shown as a highlighted placeholder
  const txt = (s) => /^\s*TODO/i.test(s || "")
    ? `<span class="todo">${esc(s)}</span>` : esc(s);
  const has = (s) => s && String(s).trim() !== "";
  const hide = (id) => { const el = $(id); if (el) el.hidden = true; };

  document.title = `${S.name} — ${S.title}`;
  $("nav-name").textContent = S.name;
  $("name").textContent = S.name;
  $("title").innerHTML = txt(S.title);
  $("affiliation").innerHTML = txt(S.affiliation);

  // Avatar
  if (has(S.photo)) {
    $("avatar").innerHTML = `<img src="${esc(S.photo)}" alt="${esc(S.name)}">`;
  } else {
    $("avatar").textContent = S.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2);
    $("avatar").classList.add("initials");
  }

  // Contact + links
  const parts = [];
  if (has(S.email)) parts.push(`<a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`);
  if (has(S.cv)) parts.push(`<a href="${esc(S.cv)}" target="_blank" rel="noopener">CV (PDF)</a>`);
  (S.links || []).filter((l) => has(l.url)).forEach((l) =>
    parts.push(`<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`));
  $("contact").innerHTML = parts.join('<span class="sep">·</span>');
  if (has(S.cv)) $("nav-cv").href = S.cv; else hide("nav-cv");

  if (has(S.announcement)) {
    $("announcement").innerHTML = txt(S.announcement);
    $("announcement").hidden = false;
  }

  $("bio").innerHTML = (S.bio || []).filter(has).map((p) => `<p>${txt(p)}</p>`).join("");
  if ((S.interests || []).length)
    $("interests").innerHTML = `<strong>Research interests:</strong> ${S.interests.map(esc).join(" · ")}`;

  // Papers
  const linkLabel = (k) => ({ pdf: "PDF", ssrn: "SSRN", slides: "Slides", journal: "Journal", doi: "DOI", arxiv: "arXiv" }[k] || k);
  let absId = 0;
  function paper(p) {
    const links = Object.entries(p.links || {}).filter(([, u]) => has(u))
      .map(([k, u]) => `<a class="btn" href="${esc(u)}" target="_blank" rel="noopener">${esc(linkLabel(k))}</a>`);
    let abs = "";
    if (has(p.abstract)) {
      const id = "abs" + absId++;
      links.unshift(`<button class="btn" aria-expanded="false" aria-controls="${id}">Abstract</button>`);
      abs = `<div class="abstract" id="${id}" hidden>${txt(p.abstract)}</div>`;
    }
    return `
      <div class="title">${txt(p.title)}</div>
      ${has(p.coauthors) ? `<div class="meta">with ${esc(p.coauthors)}</div>` : ""}
      ${has(p.status) ? `<div class="status">${txt(p.status)}</div>` : ""}
      ${has(p.note) ? `<div class="meta">${txt(p.note)}</div>` : ""}
      ${links.length ? `<div class="links">${links.join("")}</div>` : ""}
      ${abs}`;
  }
  function list(key, ol, h) {
    const items = S[key] || [];
    if (!items.length) { hide(ol); hide(h); return; }
    $(ol).innerHTML = items.map((p) => `<li>${paper(p)}</li>`).join("");
  }
  if (S.jobMarketPaper && has(S.jobMarketPaper.title)) {
    $("jmp").innerHTML = `<div class="jmp"><div class="tag">Job Market Paper</div>${paper(S.jobMarketPaper)}</div>`;
  }
  list("workingPapers", "workingPapers", "wp-h");
  list("publications", "publications", "pub-h");
  list("workInProgress", "workInProgress", "wip-h");

  document.addEventListener("click", (e) => {
    const b = e.target.closest("button[aria-controls]");
    if (!b) return;
    const box = $(b.getAttribute("aria-controls"));
    box.hidden = !box.hidden;
    b.setAttribute("aria-expanded", String(!box.hidden));
  });


  // Teaching
  const teach = S.teaching || [];
  if (teach.length) $("teachingList").innerHTML = teach.map((t) => `
    <li><div class="row"><span><strong>${esc(t.role)}</strong>, ${esc(t.course)}</span><span class="years">${esc(t.years)}</span></div>
    <div class="meta">${esc(t.place)}</div></li>`).join("");
  else hide("teaching");

  

  // References
  const refs = S.references || [];
  if (refs.length) {
    $("referencesList").innerHTML = refs.map((r) => `
      <li><strong>${esc(r.name)}</strong><br><span class="meta">${esc(r.place)}</span>
      ${has(r.email) ? `<br><a href="mailto:${esc(r.email)}">${esc(r.email)}</a>` : ""}</li>`).join("");
    $("references").hidden = false;
  }

  $("footer").innerHTML = `© ${new Date().getFullYear()} ${esc(S.name)}${has(S.footer) ? " · " + esc(S.footer) : ""}`;
})();
