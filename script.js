 const themeToggle = document.getElementById('themeToggle');
    const toggleCircle = document.getElementById('toggleCircle');
    const toggleIcon = document.getElementById('toggleIcon');
    
    let isDarkMode = true; 

    themeToggle.addEventListener('click', function() {
      if (isDarkMode) {
      // Switch to light mode (sun icon)
      toggleCircle.style.transform = 'translateX(20px)';
      toggleCircle.style.backgroundColor = '#ffffff'; 
      toggleIcon.className = 'fas fa-sun text-xs text-yellow-500';
      themeToggle.style.backgroundColor = '#e5e7eb'; 
      isDarkMode = false;
      } else {
      // Switch to dark mode (moon icon)
      toggleCircle.style.transform = 'translateX(0px)';
      toggleCircle.style.backgroundColor = '#1e293b'; 
      toggleIcon.className = 'fas fa-moon text-xs text-blue-900';
      themeToggle.style.backgroundColor = '#4B5563'; 
      isDarkMode = true;
      }
    });
      
