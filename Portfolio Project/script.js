document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init();

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });
    if (localStorage.getItem('darkMode') === 'true') {
      body.classList.add('dark-mode');
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      // Add your form submission logic here
      alert('Message sent! (This is a demo)');
      this.reset();
    });
  });
 
  // CV download
  document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('a[href="Adarsh CV.pdf"]');
    
    if (downloadButton) {
      downloadButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const cvUrl = 'Adarsh CV.pdf';
        const fileName = 'Adarsh_CV.pdf';
  
        fetch(cvUrl)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(error => console.error('Error downloading CV:', error));
      });
    }
  });