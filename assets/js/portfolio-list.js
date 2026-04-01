// Script ini dieksekusi langsung saat file di-load (setelah HTML terbentuk),
// sehingga kartu portfolio sudah ada sebelum Isotope di-init oleh main.js.

// Pastikan data tersedia
if (typeof portfolioData !== "undefined") {
  // Cari semua container portfolio (di index & portfolio page)
  const containers = document.querySelectorAll(".isotope-container");

  containers.forEach(container => {
    // Bersihkan konten statis bawaan template
    container.innerHTML = "";

    portfolioData.forEach(item => {
      // Prefer explicit coverImage (if provided), fallback to first image.
      const coverImage =
        item.coverImage ||
        (item.images && item.images.length ? item.images[0] : "");
      // Full-size asset for lightbox when grid uses optimized card image.
      const coverLightbox = item.coverImageFull || coverImage;

      const cardHTML = `
        <div class="col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}">
          <div class="portfolio-content h-100">
            <img src="${coverImage}" class="img-fluid" alt="${item.title}" loading="lazy" decoding="async" width="720">
            <div class="portfolio-info">
              <h4>${item.title}</h4>
              <p>${item.shortDescription}</p>
              <div>
                <a href="${coverLightbox}"
                   title="${item.title}"
                   data-gallery="portfolio-gallery"
                   class="glightbox preview-link">
                  <i class="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html?id=${item.id}"
                   title="More Details"
                   class="details-link">
                  <i class="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;

      container.insertAdjacentHTML("beforeend", cardHTML);
    });
  });
}

