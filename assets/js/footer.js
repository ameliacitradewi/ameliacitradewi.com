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
          <a href="https://apps.apple.com/id/developer/amelia-citra-dewi/id1822966646"
             aria-label="Amelia Citra Dewi on Apple App Store">
            <i class="bi bi-apple" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/ameliacitradewi"
             aria-label="Amelia Citra Dewi on GitHub">
            <i class="bi bi-github" aria-hidden="true"></i>
          </a>
          <a href="https://instagram.com/amelia.citra"
             aria-label="Amelia Citra Dewi on Instagram">
            <i class="bi bi-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://linkedin.com/in/ameliacitradewi"
             aria-label="Amelia Citra Dewi on LinkedIn">
            <i class="bi bi-linkedin" aria-hidden="true"></i>
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
