// Spoiler Tag
document.querySelectorAll('.spoiler').forEach(element => {
    element.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});

// Tippy.js
if (typeof tippy === "function") {
    document.querySelectorAll(".tip").forEach(element => {
        tippy(element, {
            content: element.dataset.tip,
            arrow: false
        });
    });
}