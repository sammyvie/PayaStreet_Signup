const form = document.getElementById('signupForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_tm1bfup', 'template_t0bp1hr', form) // ✅ Correct Template ID
    .then(() => {
      output.innerHTML = "<h3>✅ Your sign-up was submitted and emailed!</h3>";
      output.style.display = 'block';
      form.reset();
    })
    .catch((error) => {
      output.innerHTML = `<h3 style="color:red;">❌ Submission failed: ${error.text}</h3>`;
      output.style.display = 'block';
    });
});
