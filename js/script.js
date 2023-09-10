const navItems = document.getElementsByClassName("nav-item");

Object.values(navItems).forEach((e) => {
  e.addEventListener("click", () => {
    Object.values(navItems).forEach((e) => {
      e.classList.remove("active");
    });

    e.classList.add("active");
  });
});
