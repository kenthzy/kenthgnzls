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

// RECOMMENDATION ROTATION LOGIC
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      text: "Kenneth is fun to talk to and genuinely enjoys conversations around ideas and tech. He always matches technical depth with clear communication, and is simply good to work with in a team setting.",
      name: "Dean Posada",
      role: "Enterprise System Administrator",
    },
    {
      text: "Kenneth is one of the students who is genuinely passionate about building projects in the areas I teach. He shows strong drive and clear goals in coding, which consistently push his work beyond basic expectations.",
      name: "John Julius Baldia",
      role: "Manager for Operational Excellence, Bizbloqs",
    },
    {
      text: "Kenneth was easy to work with as an intern and always willing to help in development. He learns quickly, adapts to the pace of the project, asks thoughtful questions, and contributes effectively to the team.",
      name: "Jan Phillip Dacallos",
      role: "Development Team Lead, Codebility",
    },
    {
      text: "Kenneth is reliable and easy to work with, always willing to assist with IT and desktop support tasks. He picks up new systems quickly, adapts to different tools, and collaborates well with the team to get things done efficiently.",
      name: "Miguel Santos",
      role: "IT Desktop Engineer, Intouch CX",
    },
  ];

  const textEl = document.getElementById("recommendation-text");
  const nameEl = document.getElementById("recommendation-name");
  const roleEl = document.getElementById("recommendation-role");
  const dots = document.querySelectorAll(".recommendation-dot");

  if (!textEl || dots.length === 0) {
    return;
  }

  let currentIndex = 0;
  let intervalId;

  function render(index) {
    const active = testimonials[index % testimonials.length];
    textEl.textContent = `"${active.text}"`;
    nameEl.textContent = active.name;
    roleEl.textContent = active.role;
    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === index;
      dot.classList.toggle("text-amber-400", isActive);
      dot.classList.toggle("text-white", !isActive);
      dot.classList.toggle("opacity-60", !isActive);
    });
  }

  function startAutoRotate() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      render(currentIndex);
    }, 7000);
  }

  function jumpTo(index) {
    clearInterval(intervalId);
    currentIndex = index;
    render(currentIndex);
    startAutoRotate();
  }

  dots.forEach(dot => {
    const dotIndex = Number(dot.dataset.index);
    if (Number.isNaN(dotIndex)) {
      return;
    }
    dot.addEventListener("click", () => jumpTo(dotIndex));
  });

  render(currentIndex);
  startAutoRotate();
});
