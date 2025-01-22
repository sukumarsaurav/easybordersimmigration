document.addEventListener("DOMContentLoaded", () => {
    // Load header, footer, and other sections
    const sectionsToLoad = ["header", "footer", "english-test-preparation"];
    sectionsToLoad.forEach((section) => {
        fetch(`sections/${section}.html`)
            .then((response) => response.text())
            .then((data) => {
                document.getElementById(`${section}-placeholder`).innerHTML = data;
                if (section === "header") {
                    setupSidebar();
                }
            })
            .catch((error) => console.error(`Error loading ${section}:`, error))
    })
  
    // Load hero section
    fetch("sections/hero.html")
      .then((response) => response.text())
      .then((data) => {
        const main = document.querySelector("main")
        main.insertAdjacentHTML("afterbegin", data)
        setupCarousel()
      })
      .catch((error) => console.error("Error loading hero:", error))
  })
  
  function setupSidebar() {
    const sidebarToggle = document.querySelector(".sidebar-toggle")
    const sidebar = document.querySelector(".sidebar")
  
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active")
    })
  
    // Close sidebar when clicking outside
    document.addEventListener("click", (event) => {
      if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        sidebar.classList.remove("active")
      }
    })
  }
  
  function setupCarousel() {
    const slides = document.querySelectorAll(".hero-slide")
    let currentSlide = 0
    let intervalId
  
    function showSlide(index) {
      slides[currentSlide].classList.remove("active")
      slides[index].classList.add("active")
      currentSlide = index
    }
  
    function nextSlide() {
      const nextIndex = (currentSlide + 1) % slides.length
      showSlide(nextIndex)
    }
  
    function startCarousel() {
      setInterval(nextSlide, 5000) // Change slide every 5 seconds
    }
  
 
    // Start the carousel
    startCarousel()
  }
  
   