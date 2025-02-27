document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let usuario = document.getElementById("usuario").value;
        let password = document.getElementById("password").value;

        // Validación simple (usuario: admin, contraseña: 1234)
        if (usuario === "admin" && password === "1234") {
            localStorage.setItem("auth", "true"); // Guarda la autenticación
            window.location.href = "dashboard.html"; // Redirige a la página privada
        } else {
            document.getElementById("error-login").style.display = "block";
        }
    });
});

function logout() {
    localStorage.removeItem("auth");
    window.location.href = "index.html";
}