const shareBtn = document.querySelector(".share-btn");
const shareBox = document.querySelector(".share");
const bottom = document.querySelector(".bottom");


shareBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    shareBtn.classList.toggle("active");
    shareBox.classList.toggle("active");
    bottom.classList.toggle("active");

});


document.addEventListener("click", (e) => {

    if (
        !shareBox.contains(e.target) &&
        !shareBtn.contains(e.target)
    ) {

        closeShare();

    }

});

shareBox.addEventListener("click", (e) => {

    e.stopPropagation();

});


document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeShare();

    }

});


function closeShare() {

    shareBtn.classList.remove("active");
    shareBox.classList.remove("active");
    bottom.classList.remove("active");

}
