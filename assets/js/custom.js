
// TABS JS

function makeTabActive() {

    var url = window.location.href;

    var indexof = url.indexOf("#");

    if (indexof > 0) {

        var activeTab = url.substring(indexof + 1);

        if (typeof activeTab != 'undefined' && activeTab != '' && activeTab != '#') {

            // to dispaly give tab content

            jQuery(".tab-pane").removeClass("active in show");

            jQuery("#" + activeTab).addClass("active in show")

            // to make active given tab

            jQuery(".nav-tabs li a").removeClass("active");

            jQuery(".nav-tabs li a[href='#" + activeTab + "']").addClass("active");
        }
    }
}

const element = document.querySelectorAll(".badge__char");
const step = 360/element.length;

element.forEach((elem, i) => {
  elem.style.setProperty('--char-rotate', (i * step) + 'deg');
})

const foo = (360 / 7);

for (i = 0; i <= 7; i++) {
  console.log((i * foo) + 'deg');
}
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapperr');
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(() => loader.remove(), 500); // Remove after fade out
  });

// === Animated Dropdown for Services ===
document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggle = document.querySelector('.animated-dropdown-toggle');
  var dropdownMenu = document.querySelector('.animated-dropdown-menu');
  var dropdownItems = document.querySelectorAll('.animated-dropdown-item');

  if (dropdownToggle && dropdownMenu && dropdownItems.length) {
    dropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      // Toggle dropdown
      dropdownMenu.classList.toggle('show');
      if (dropdownMenu.classList.contains('show')) {
        // Animate items one by one
        dropdownItems.forEach(function(item, idx) {
          item.classList.remove('show');
          setTimeout(function() {
            item.classList.add('show');
          }, idx * 120);
        });
      } else {
        dropdownItems.forEach(function(item) {
          item.classList.remove('show');
        });
      }
    });
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!dropdownMenu.contains(e.target) && !dropdownToggle.contains(e.target)) {
        dropdownMenu.classList.remove('show');
        dropdownItems.forEach(function(item) {
          item.classList.remove('show');
        });
      }
    });
  }
});