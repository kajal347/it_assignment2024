document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
  
    const message = document.createElement('p');
    message.textContent = "Your Message has been sent to us, We will get to you soon 😊";
    message.style.display = 'none';
    message.style.color = '#2e7d32';
    message.style.fontWeight = 'bold';
    message.style.textAlign = 'center';
    message.style.marginTop = '20px';
    message.style.transition = 'opacity 0.5s ease';
    form.after(message); 
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
      const email = form.querySelector('input[placeholder="Your Email"]').value.trim();
      const messageText = form.querySelector('textarea[placeholder="Your Message"]').value.trim();
      const number = form.querySelector('input[placeholder="Your Number"]').value.trim();
  
      if (!name || !email || !messageText || !number) {
        alert("Please fill in all fields before submitting.");
        return;
      }
  

      message.style.opacity = '0';
      message.style.display = 'block';
  
      setTimeout(() => {
        message.style.opacity = '1';
      }, 100);
  
 
      form.reset();
  
  
      setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
          message.style.display = 'none';
        }, 500);
      }, 5000);
    });
  });