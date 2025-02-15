document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
      console.log("Form submitted!");

      // Simulate form submission
      setTimeout(function () {
        const toast = document.getElementById("toast");
        toast.classList.add("show");
        console.log("Toast should be visible now!");

        // Hide the toast after 3 seconds
        setTimeout(function () {
          toast.classList.remove("show");
        }, 3000);
      }, 500);
    });
});
