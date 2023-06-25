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

// Get the current day
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var today = new Date();
      var currentDay = days[today.getDay()];

      // Display an alert with the current day
      alert('Today is ' + currentDay);

// Get all the dropdown toggle elements
var dropdownToggle = document.getElementsByClassName("dropdown-toggle");

// Loop through the toggle elements and attach click event listeners
for (var i = 0; i < dropdownToggle.length; i++) {
  dropdownToggle[i].addEventListener("click", function() {
    // Toggle the "active" class on the parent element (dropdown container)
    this.parentElement.classList.toggle("active");
  });
}

