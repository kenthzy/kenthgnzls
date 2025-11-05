// TAB UNDERLINE ANIMATION LOGIC
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll('.nav-tabs .tab');
  const underline = document.querySelector('.nav-tabs .tab-underline');

  function setUnderline(el) {
    tabs.forEach(tab => {
      tab.classList.remove('active');
      tab.style.color = "#71717a";
    });
    el.classList.add('active');
    el.style.color = "#fff";
    underline.style.left = el.offsetLeft + "px";
    underline.style.width = el.offsetWidth + "px";
  }


  setUnderline(document.querySelector('.nav-tabs .tab.active'));

  tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      setUnderline(tab);
    });
  });
});


// TOGGLE TECH STACK LOGIC
document.getElementById('toggle-stack').addEventListener('click', function () {
  var moreStack = document.getElementById('more-tech-stack');
  var btn = this;
  if (moreStack.classList.contains('hidden')) {
    moreStack.classList.remove('hidden');
    btn.textContent = 'View Less';
  } else {
    moreStack.classList.add('hidden');
    btn.textContent = 'View More';
  }
});


// TAB SWITCHING LOGIC
document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".nav-tabs .tab");
  const sections = {
    about: document.getElementById("about-section"),
    projects: document.getElementById("projects-section"),
    experience: document.getElementById("experience-section"),
    certificates: document.getElementById("certificates-section"),
    blogs: document.getElementById("blogs-section"),
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", function(e) {
      e.preventDefault();

      // Switch active tab styling
      tabs.forEach(t => t.classList.remove("active", "text-white"));
      tabs.forEach(t => t.classList.add("text-zinc-500"));
      tab.classList.add("active", "text-white");
      tab.classList.remove("text-zinc-500");

      // Show selected section, hide others
      Object.values(sections).forEach(section => section.style.display = "none");
      const selected = tab.getAttribute("data-tab");
      if (sections[selected]) sections[selected].style.display = "block";
    });
  });
});

// TROPHY BUTTON POPUP LOGIC
const btn = document.getElementById('trophyBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

btn.addEventListener('click', () => {
  popup.style.display = 'block';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});
