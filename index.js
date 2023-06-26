// Add this JavaScript code to prevent reload on scroll in Safari
(function() {
  var isScrolling;
  var scrollPosition = window.pageYOffset;

  // Listen for the scroll event
  window.addEventListener('scroll', function() {
    // Clear the timeout if it has already been set
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {
      // Add the overscroll-behavior property back after scrolling ends
      document.body.style.overscrollBehavior = 'auto';

      // Store the new scroll position
      scrollPosition = window.pageYOffset;
    }, 100);

    // Disable the overscroll-behavior property when scrolling starts
    document.body.style.overscrollBehavior = 'none';

    // Check if scrolling back to the top and restore overscroll-behavior property
    if (window.pageYOffset === 0 && scrollPosition !== 0) {
      document.body.style.overscrollBehavior = 'auto';
    }
  }, false);
})();

// Activate dropdown menu on "Watch Video" button click
document.addEventListener("DOMContentLoaded", function() {
  // Get all the "Watch Video" buttons
  var buttons = document.querySelectorAll(".dropdown-toggle");

  // Loop through the buttons and attach click event listeners
  buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      // Prevent the default behavior of the button
      event.preventDefault();

      // Find the closest parent element with class "dropdown" to activate the dropdown menu
      var dropdown = this.parentNode.querySelector(".dropdown-content");
      dropdown.classList.toggle("show");

      // Center the dropdown horizontally within the day div
      centerDropdown(dropdown);
    });
  });

  // Center the dropdown on page load (if open)
  var openDropdowns = document.querySelectorAll(".dropdown-content.show");
  openDropdowns.forEach(function(dropdown) {
    centerDropdown(dropdown);
  });
});

// Function to center the dropdown horizontally within the day div
function centerDropdown(dropdown) {
  var dayDiv = dropdown.closest(".day");
  var dayDivWidth = dayDiv.offsetWidth;
  var dropdownWidth = dropdown.offsetWidth;
  var dropdownLeft = (dayDivWidth - dropdownWidth) / 2;

  dropdown.style.left = dropdownLeft + "px";
}

