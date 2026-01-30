/* =============================
   HEADER TEMPLATE
============================== */
const headerHTML = `
<header id="header" class="header d-flex align-items-center sticky-top">
  <div class="container-fluid position-relative d-flex align-items-center justify-content-between">

    <a href="index.html" class="logo d-flex align-items-center">
      <img src="assets/img/favicon-light.png" alt="Logo">
    </a>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="resume.html">Resume</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>

      <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

  </div>
</header>
`;

/* =============================
   INSERT HEADER
============================== */
const headerContainer = document.getElementById("header-placeholder");
if (headerContainer) {
  headerContainer.innerHTML = headerHTML;
}

/* =============================
   ACTIVE MENU HANDLER
============================== */
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("#navmenu a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
