document.addEventListener("DOMContentLoaded", function() {
    alert("Selamat datang di Portofolio Saya!");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dikirim ke server
    
    document.getElementById("response-message").textContent = "Terima kasih! Pesan Anda telah dikirim.";
    document.getElementById("response-message").style.color = "green";

    // Reset form setelah submit
    this.reset();
});
