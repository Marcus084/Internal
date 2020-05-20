const menuIcon = document.querySelector(".menu");
let menuOpen = false;
menuIcon.addEventListener("click" , () => {
  if (!menuOpen) {
    menuIcon.classlist.add("open");
    menuOpen = true;
  } else {
    menuIcon.classlist.remove("open");
    menuOpen = false;
  }
});
