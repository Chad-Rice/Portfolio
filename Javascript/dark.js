function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Saves whatever mode has been selected to localStorage
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add("dark-mode");
    }
});