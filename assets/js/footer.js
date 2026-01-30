document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <footer id="footer" class="footer light-background">
      <div class="container">
        <div class="copyright text-center">
          <p><span>Copyright</span>
            <strong class="px-1 sitename">2026.</strong>
            <span>All Rights Reserved.</span>
          </p>
        </div>

        <div class="social-links d-flex justify-content-center">
          <a href="https://apps.apple.com/id/developer/amelia-citra-dewi/id1822966646">
            <i class="bi bi-apple"></i>
          </a>
          <a href="https://github.com/ameliacitradewi">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://instagram.com/amelia.citra">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://linkedin.com/in/ameliacitradewi">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  `;

  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
});
