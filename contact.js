emailjs.init('o5qN_kXfzTxl5aEaz');

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    emailjs.send('service_gvq0qkk', 'template_u3ppfqb', {
        subject: this.subject.value,
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    }).then(() => {
        alert('Email sent!');
    }, (error) => {
        alert('Failed to send email:', error);
    });
});