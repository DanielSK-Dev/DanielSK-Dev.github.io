
(function(){
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if(stored){ root.setAttribute("data-theme", stored); }

  const themeBtn = document.getElementById("themeToggle");
  if(themeBtn){
    themeBtn.addEventListener("click", () => {
      const cur = root.getAttribute("data-theme") || "dark";
      const next = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      themeBtn.setAttribute("aria-label", next === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  const mobileBtn = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if(mobileBtn && mobileMenu){
    mobileBtn.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      mobileBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Highlight active nav link automatically
  const here = location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll('a[data-nav]').forEach(a => {
    const href = a.getAttribute("href");
    if(!href) return;
    // resolve to pathname-like (works for relative links)
    const u = new URL(href, location.href);
    let p = u.pathname.replace(/\/index\.html$/, "/");
    if(p === here){
      a.setAttribute("aria-current","page");
    }
  });

  // Copy-to-clipboard helper
  document.querySelectorAll("[data-copy]").forEach(el => {
    el.addEventListener("click", async () => {
      const val = el.getAttribute("data-copy");
      try{
        await navigator.clipboard.writeText(val);
        const old = el.textContent;
        el.textContent = "Copied!";
        setTimeout(()=> el.textContent = old, 900);
      }catch(e){
        // fallback
        window.prompt("Copy:", val);
      }
    });
  });
})();

