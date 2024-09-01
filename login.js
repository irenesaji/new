function validateLogin() {
    const defaultUsername = "employee";
    const defaultPassword = "123_";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === defaultUsername && password === defaultPassword) {
        window.location.href = "file:///C:/Users/Irene%20Saji/OneDrive/Documents/VS/project/interface.html";
        return false;
    } else {
        alert("USERNAME OR PASSWORD IS INVALID !");
        return false;
    }
}
