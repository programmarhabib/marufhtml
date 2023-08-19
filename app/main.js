/// naveber menu active color
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});
//  close btn
document.getElementById("closeButton").addEventListener("click", function () {
  document.querySelector("input").value = "";
});
