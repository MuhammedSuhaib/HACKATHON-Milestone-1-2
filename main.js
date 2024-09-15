function toggleDarkMode() {
    document.body.classList.toggle("dark");
    var button = document.querySelector("button");
    ;
    if (button) {
        button.textContent = document.body.classList.contains("dark")
            ? "Light Mode"
            : "Dark Mode";
    }
}
