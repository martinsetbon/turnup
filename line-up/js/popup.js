document.addEventListener("DOMContentLoaded", function () {
  // Select the Drake list item and popup elements
  let drakeItem = document.getElementById("lineupdrake");
  let popup = document.getElementById("popup");
  let closeBtn = document.getElementById("croix");

  if (drakeItem && popup && closeBtn) {
      // Click event to show the popup
      drakeItem.addEventListener("click", function () {
          popup.style.display = "block";
      });

      // Click event to hide the popup
      closeBtn.addEventListener("click", function () {
          popup.style.display = "none";
      });

      // Optional: Hide popup when clicking outside of it
      popup.addEventListener("click", function (e) {
          if (e.target === popup) {
              popup.style.display = "none";
          }
      });
  }
});
