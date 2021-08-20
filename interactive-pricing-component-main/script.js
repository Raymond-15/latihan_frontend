var slider = document.getElementById("range");
var output = document.getElementsByClassName("price-permonth")[0];
var output1 = document.getElementsByClassName("price-permonth")[1];
var pages = document.getElementsByClassName("pages-permonth")[0];
var checkbox = document.getElementsByClassName("toggle")[0];
var year = document.getElementsByClassName("month")[0];
pages.innerHTML = slider.value * 1.25 + " K";
output.innerHTML = "$" + slider.value + ".00";
output1.innerHTML = "$" + slider.value + ".00";
var discount = 0;
var rango = 16;

slider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) " + (slider.value / 36) * 100 + "%, hsl(224, 65%, 95%) " + (slider.value / 36) * 100 + "%)";

checkbox.addEventListener("change", function () {
  if (this.checked) {
    discount = 1;
    year.innerHTML = " /year";
    output.innerHTML = "$ " + (slider.value * 12 - slider.value * 12 * 0.25).toFixed(2);
    output1.innerHTML = "$ " + (slider.value * 12 - slider.value * 12 * 0.25).toFixed(2);
  } else {
    year.innerHTML = "  /month";
    discount = 0;
    output.innerHTML = "$ " + ((slider.value / 36) * 36).toFixed(2);
    output1.innerHTML = "$ " + ((slider.value / 36) * 36).toFixed(2);
  }
});

slider.oninput = function () {
  if (discount == 1) {
    output.innerHTML = "$ " + (this.value * 12 - this.value * 12 * 0.25).toFixed(2);
    rango = output.innerHTML;
    output1.innerHTML = "$ " + (this.value * 12 - this.value * 12 * 0.25).toFixed(2);
    rango = output1.innerHTML;
  } else {
    output.innerHTML = "$ " + ((this.value / 36) * 36).toFixed(2);
    rango = output.innerHTML;
    output1.innerHTML = "$ " + ((this.value / 36) * 36).toFixed(2);
    rango = output1.innerHTML;
  }
  if (slider.value <= 8) {
    pages.innerHTML = parseInt(slider.value * 1.25) + " K";
  } else if (slider.value <= 12) {
    pages.innerHTML = parseInt(slider.value * 4.2) + " K";
  } else if (slider.value <= 16) {
    pages.innerHTML = parseInt(slider.value * 6.25) + " K";
  } else if (slider.value <= 24) {
    pages.innerHTML = parseInt(slider.value * 20.87) + " K";
  } else if (slider.value <= 36) {
    pages.innerHTML = parseInt(slider.value * 27.8) + " K";
  }
  slider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) " + (slider.value / 36) * 100 + "%, hsl(224, 65%, 95%) " + (slider.value / 36) * 100 + "%)";
};
