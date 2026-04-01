document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const project = portfolioData.find(item => item.id === id);
  if (!project) return;

  // Determine cover image (prefer explicit coverImage; fallback to first image)
  const coverImage =
    project.coverImage ||
    (project.images && project.images.length ? project.images[0] : "");

  // Title
  document.getElementById("portfolio-title").textContent = project.title;
  document.getElementById("portfolio-description").textContent = project.description;

  const urlDisplay =
    project.url && project.url !== "-"
      ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.url}</a>`
      : project.url || "—";

  // Info
  document.getElementById("portfolio-info").innerHTML = `
    <li><strong>Category</strong>: ${project.category}</li>
    <li><strong>Client</strong>: ${project.client}</li>
    <li><strong>Date</strong>: ${project.date}</li>
    <li><strong>URL</strong>: ${urlDisplay}</li>
  `;

  // Images stacked vertically (no slider)
  const imagesContainer = document.getElementById("portfolio-images");
  // Render gallery images without duplicating the cover.
  const galleryImages = Array.isArray(project.images) ? [...project.images] : [];
  if (coverImage) {
    const idx = galleryImages.indexOf(coverImage);
    if (idx !== -1) galleryImages.splice(idx, 1); // remove only first match
  }

  galleryImages.forEach(img => {
    imagesContainer.innerHTML += `
      <div class="portfolio-image mb-3">
        <img src="${img}" alt="${project.title}" class="img-fluid w-100">
      </div>
    `;
  });
});
