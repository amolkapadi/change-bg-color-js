document.addEventListener("DOMContentLoaded", function () {
    // Get the color picker element
    const colorPicker = document.getElementById("colorPicker");
  
    // Set the initial background color
    document.body.style.backgroundColor = colorPicker.value;
  
    // Add an event listener to the color picker
    colorPicker.addEventListener("input", function () {
      // Change the background color as the user selects a new color
      document.body.style.backgroundColor = colorPicker.value;
    });
  });
  