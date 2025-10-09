document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll('.nav-tabs .tab');
  const underline = document.querySelector('.nav-tabs .tab-underline');

  function setUnderline(el) {
    tabs.forEach(tab => {
      tab.classList.remove('active');
      tab.style.color = "#71717a"; // zinc-500
    });
    el.classList.add('active');
    el.style.color = "#fff"; // white for active
    underline.style.left = el.offsetLeft + "px";
    underline.style.width = el.offsetWidth + "px";
  }

  // On first load, set underline under the active tab
  setUnderline(document.querySelector('.nav-tabs .tab.active'));

  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      setUnderline(tab);
    });
  });
});