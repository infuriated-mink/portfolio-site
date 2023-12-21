// Home Page
document.addEventListener("DOMContentLoaded", function() {
  // Replace these values with your desired roles
  const roles = ["Software Developer", "Web Developer", "Accountant", "Cybersecurity Technician", "Data Analyst"];

  // Get the elements by their IDs
  const nameElement = document.getElementById("name");
  const roleElement = document.getElementById("role");

  // Set an initial role
  let currentRoleIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  function updateRoleText() {
      const currentRole = roles[currentRoleIndex];
      const textToShow = isDeleting ? currentRole.substring(0, currentCharIndex - 1) : currentRole.substring(0, currentCharIndex + 1);
      const cursor = isDeleting ? "" : "|"; 
      roleElement.textContent = textToShow + cursor;

      if (!isDeleting && currentCharIndex === currentRole.length) {
          // Start deleting after a pause
          isDeleting = true;
          setTimeout(updateRoleText, 1000);
      } else if (isDeleting && currentCharIndex === 0) {
          // Move to the next role after deleting
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          setTimeout(updateRoleText, 500);
      } else {
          // Continue typing or deleting
          isDeleting ? currentCharIndex-- : currentCharIndex++;
          setTimeout(updateRoleText, isDeleting ? 50 : 150);
      }
  }

  // Initial call to start the typing effect
  updateRoleText();
});


// About
document.addEventListener('DOMContentLoaded', function () {
  var contactButton = document.getElementById("contactMeButton");
  var contactForm = document.getElementById("contactMeForm");

  contactButton.addEventListener("click", function () {
      // Hide the contact button
      contactButton.style.display = "none";
      // Display the contact form
      contactForm.style.display = "block";
  });
});

// Portfolio Sectione
document.addEventListener('DOMContentLoaded', function () {
  $('#carousel1').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '60px',
    centerClass: 'center-slide'
});
});

document.addEventListener('DOMContentLoaded', function () {
  $('#carousel2').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '60px',
    centerClass: 'center-slide'
});
});

document.addEventListener('DOMContentLoaded', function () {
  $('#carousel3').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '60px',
    centerClass: 'center-slide'
});
}); 

document.addEventListener('DOMContentLoaded', function () {
  $('#carousel4').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '60px',
    centerClass: 'center-slide'
});
});
// Book Me
function openCalendly() {
  Calendly.initPopupWidget({ url: 'https://calendly.com/vanessa-rice/book-a-meeting' });
  return false;
} 

