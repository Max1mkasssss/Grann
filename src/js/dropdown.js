function toggleDropdown(element) {
    var content = element.nextElementSibling;
    var arrow = element.querySelector('.arrow');
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        arrow.classList.add('open');
    } else {
        content.style.display = "none";
        arrow.classList.remove('open');
    }
}