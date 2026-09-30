function showMessage() {
    const name = prompt("What is your name?");

    if (name) {
        alert("Hi " + name + "! Thanks for visiting Sandesh Kafle's website 😊");
    } else {
        alert("Thanks for visiting Sandesh Kafle's website 😊");
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("theme-toggle");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️ Light Mode";
    } else {
        button.textContent = "🌙 Dark Mode";
    }
}

document.getElementById("contact-form").addEventListener("submit", function(event) {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        event.preventDefault();
        alert("Please fill in all the fields.");
        return;
    }

});