let eles = document.querySelectorAll(".question-container");
eles.forEach((ele)=>{
    ele.addEventListener("click", show);
});

function show () {
    this.lastElementChild.classList.toggle("show");
    if (this.lastElementChild.classList.contains("show")) {
        this.firstElementChild.lastElementChild.setAttribute("src","./assets/images/icon-minus.svg");
    } else {
        this.firstElementChild.lastElementChild.setAttribute("src","./assets/images/icon-plus.svg");
    }
}
