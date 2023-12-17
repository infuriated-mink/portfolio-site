// Home Page
document.addEventListener("DOMContentLoaded", function() {
    // Replace these values with your desired roles
    const roles = ["Software Developer","Web Developer", "Accountant", "Cybersecurity Enthusiast"];

    // Get the elements by their IDs
    const nameElement = document.getElementById("name");
    const roleElement = document.getElementById("role");

    // Set an initial role
    let currentRoleIndex = 0;
    roleElement.textContent = roles[currentRoleIndex];


    setInterval(function() {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        roleElement.textContent = roles[currentRoleIndex];
    }, 2000); 
});

// Nav Bar
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
  
        // Remove the 'nav-active' class from all navigation links
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.remove('nav-active');
        });
  
        // Add the 'nav-active' class to the clicked navigation link
        this.classList.add('nav-active');
      });
    });
  
    // Highlight the current section in the navigation bar on scroll
    document.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY;
  
      // Remove the 'nav-active' class from all navigation links
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('nav-active');
      });
  
      // Add the 'nav-active' class to the appropriate navigation link based on the scroll position
      document.querySelectorAll('section').forEach(section => {
        var sectionTop = section.offsetTop - 130; // Adjust for the fixed header height
        var sectionBottom = sectionTop + section.offsetHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          document.querySelector('nav a[href="#' + section.id + '"]').classList.add('nav-active');
        }
      });
    });
  
    // Highlight the current section on page load
    document.addEventListener('DOMContentLoaded', highlightCurrentSection);
  });
  
  function highlightCurrentSection() {
    var scrollPosition = window.scrollY;
  
    // Add the 'nav-active' class to the appropriate navigation link based on the scroll position
    document.querySelectorAll('section').forEach(section => {
      var sectionTop = section.offsetTop - 130; // Adjust for the fixed header height
      var sectionBottom = sectionTop + section.offsetHeight;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        document.querySelector('nav a[href="#' + section.id + '"]').classList.add('nav-active');
      }
    });
  }
  

  // Education Page
  document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const popup = circle.parentElement.querySelector('.popup');

        circle.addEventListener('click', function () {
            // Toggle the display of the popup
            popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
        });

        circle.addEventListener('mouseover', function () {
            // Show the popup when hovering over the circle
            popup.style.display = 'block';
        });

        circle.addEventListener('mouseout', function () {
            // Hide the popup when not hovering over the circle
            popup.style.display = 'none';
        });
    });
});
