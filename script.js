const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

document.querySelector(".yes-btn").addEventListener("click", () => {
    alert("Yay! HEHEHEHEHEHEHE😊");
});

function toggleSidebar() {
    let sidebar = document.querySelector(".sidebar");
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let sidebar = document.querySelector(".sidebar");

    sidebar.addEventListener("mouseenter", function() {
        sidebar.style.width = "200px"; // Expand width when hovered
        sidebar.style.transition = "width 0.3s ease-in-out";
    });

    sidebar.addEventListener("mouseleave", function() {
        sidebar.style.width = "50px"; // Collapse width when mouse leaves
    });
});
