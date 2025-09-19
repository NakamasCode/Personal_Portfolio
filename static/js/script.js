document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting JohnTimeless!');
    form.reset();
  });
});

const now = new Date();
document.getElementById("year").textContent = now.toDateString();
