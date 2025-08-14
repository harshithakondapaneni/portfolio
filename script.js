// script.js
document.addEventListener('DOMContentLoaded', function() {
  console.log("Portfolio website loaded");
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('status').textContent = "Message sent successfully!";
    });
  }
});
