document.addEventListener("DOMContentLoaded", () => {
  const servicesHTML = `
  <section id="services" class="services section">

    <div class="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>What I can help you with</p>
    </div>

    <div class="container">
      <div class="row gy-4">
        ${renderServices()}
      </div>
    </div>

  </section>
  `;

  const container = document.getElementById("services-container");
  if (container) {
    container.innerHTML = servicesHTML;
  }
});

/* ================= DATA ================= */

function renderServices() {
  const services = [
    {
      icon: "bi-phone",
      title: "iOS App Development",
      description: "End-to-end iOS app development covering planning, UI implementation, feature development, and App Store submission using Swift, SwiftUI, and UIKit, following Apple Human Interface Guidelines.",
    //   link: "service-details.html"
    },
    {
      icon: "bi-browser-safari",
      title: "Website Development",
      description: "Building and maintaining responsive websites using WordPress or custom HTML, CSS, and JavaScript, focusing on usability, performance, and clean, maintainable front-end structure.",
    //   link: "service-details.html"
    },
    {
      icon: "bi-bug",
      title: "Quality Assurance Process",
      description: "Providing end-to-end QA services including test planning, functional, integration, regression, and usability testing, defect tracking, and collaboration within Agile/Scrum teams to ensure stable and reliable software releases.",
    //   link: "service-details.html"
    },
    {
      icon: "bi-cash-stack",
      title: "Business Planning Consultation",
      description: "Helping clients validate business ideas by analyzing required capital, time-to-profit, operational flow, cash flow structure, and appropriate banking products to support day-to-day business activities.",
    //   link: "service-details.html"
    },
    {
      icon: "bi-graph-up",
      title: "Data-Driven Analysis",
      description: "Supporting business in making informed decisions through financial and operational data analysis, including cost projections, cash flow analysis, business forecasting, and performance evaluation for sustainable and realistic growth.",
    //   link: "service-details.html"
    },
    {
      icon: "bi-chat-dots",
      title: "Mentoring & Teaching",
      description: "Help individuals and teams grow through practical mentoring and structured teaching grounded in real-world experience. My approach focuses on building strong fundamentals, sharpening problem-solving skills, and developing the right mindset to navigate complex technical and product challenges.",
    //   link: "service-details.html"
    }    
  ];

  return services.map((service, index) => `
    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
      <div class="service-item position-relative">

        <div class="icon">
          <i class="bi ${service.icon}"></i>
        </div>

        <h3>${service.title}</h3>
        <p>${service.description}</p>

      </div>
    </div>
  `).join("");
}