document.addEventListener("DOMContentLoaded", function () {
    const colorPicker = document.getElementById("colorPicker");
    document.body.style.backgroundColor = colorPicker.value;
    colorPicker.addEventListener("input", function () {
    document.body.style.backgroundColor = colorPicker.value;
    });
  });
  
