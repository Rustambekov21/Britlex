let btn = document.querySelector(".menu-btn");
let list = document.querySelector(".header-list");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");

    if(btn.classList.contains("open")) {
        list.classList.add("show");
        list.style.overflow = "hidden"
    } else {
        list.classList.remove("show");
        list.style.overflow = "auto"
    }
})