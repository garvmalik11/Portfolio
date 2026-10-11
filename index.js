document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const button = this.querySelector('button');
    const originalText = button.textContent;

    button.textContent = 'Message Sent';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 1500);
  });
}

