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

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Activate dropdown menu on "Watch Video" button click
  var buttons = document.querySelectorAll(".dropdown-toggle");

  // Loop through the buttons and attach click event listeners
  buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      // Prevent the default behavior of the button
      event.preventDefault();

      // Find the closest parent element with class "dropdown" to activate the dropdown menu
      var dropdown = this.parentNode.querySelector(".dropdown-content");
      dropdown.classList.toggle("show");

      // Calculate the width of the day div
      var dayDiv = this.closest(".day");
      var dayWidth = dayDiv.offsetWidth;

      // Set the width of the dropdown menu to match the day div
      dropdown.style.width = dayWidth + "px";

      // Center the dropdown menu horizontally within the day div
      var dropdownWidth = dropdown.offsetWidth;
      var offset = (dayWidth - dropdownWidth) / 2;
      dropdown.style.left = "50%";
      dropdown.style.transform = 'translateX(-50%)';
      dropdown.style.marginLeft = "0";
    });
  });

  // Resize dropdown menu on window resize
  window.addEventListener("resize", function() {
    var dropdowns = document.querySelectorAll(".dropdown-content");

    // Loop through the dropdown menus and update their width
    dropdowns.forEach(function(dropdown) {
      var dayDiv = dropdown.closest(".day");
      var dayWidth = dayDiv.offsetWidth;
      dropdown.style.width = dayWidth + "px";

      // Center the dropdown menu horizontally within the day div
      var dropdownWidth = dropdown.offsetWidth;
      var offset = (dayWidth - dropdownWidth) / 2;
      dropdown.style.left = "50%";
      dropdown.style.transform = 'translateX(-50%)';
      dropdown.style.marginLeft = "0";
    });
  });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function(event) {
  // Get all the dropdown toggle elements
  var dropdownToggles = document.getElementsByClassName("dropdown-toggle");

  // Attach event listeners to each dropdown toggle
  for (var i = 0; i < dropdownToggles.length; i++) {
    dropdownToggles[i].addEventListener("click", function() {
      // Toggle the display of the next sibling (dropdown content)
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
      } else {
        dropdownContent.style.display = "none";
      }
    });
  }
});

// Get the current day
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var today = new Date();
      var currentDay = days[today.getDay()];

      // Display an alert with the current day
      alert('Today is ' + currentDay);
