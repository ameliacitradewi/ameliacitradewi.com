document.addEventListener("DOMContentLoaded", () => {
    const testimonialsHTML = `
  <section id="testimonials" class="testimonials section">

    <div class="container section-title" data-aos="fade-up">
      <h2>Testimonials</h2>
      <p>What people say about working with me</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="swiper init-swiper">

        <script type="application/json" class="swiper-config">
          {
            "loop": true,
            "speed": 600,
            "autoplay": { "delay": 5000 },
            "slidesPerView": "auto",
            "pagination": {
              "el": ".swiper-pagination",
              "type": "bullets",
              "clickable": true
            }
          }
        </script>

        <div class="swiper-wrapper">
          ${renderTestimonials()}
        </div>

        <div class="swiper-pagination"></div>
      </div>
    </div>

  </section>
  `;

    const container = document.getElementById("testimonials-container");
    if (container) {
        container.innerHTML = testimonialsHTML;
    }
});

/* ================= DATA ================= */

function renderTestimonials() {
    const testimonials = [
        {
            name: "Benny Fathur",
            img: "assets/img/testimonials/testimonials-1.jpg",
            text: "It has always been a pleasure working with her. She combines strong technical expertise with clear reasoning, empathetic leadership, and a proactive mindset that consistently drives projects forward and inspires those around her."
        },
        {
            name: "S. Pardano",
            img: "assets/img/testimonials/testimonials-2.jpg",
            text: "Working with her has been a fantastic experience. She’s a highly competent leader who delivers fast, high-quality work and writes clean, efficient code that makes collaboration effortless."
        },
    ];

    return testimonials.map(t => `
    <div class="swiper-slide">
      <div class="testimonial-item">
        <img src="${t.img}" class="testimonial-img" alt="${t.name}">
        <h3>${t.name}</h3>

        <div class="stars">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>

        <p>
          <i class="bi bi-quote quote-icon-left"></i>
          <span>${t.text}</span>
          <i class="bi bi-quote quote-icon-right"></i>
        </p>
      </div>
    </div>
  `).join("");
}
