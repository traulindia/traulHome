document.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("interestCount") ? parseInt(localStorage.getItem("interestCount")) : 0;

    const button = document.getElementById("interest-btn");
    const countDisplay = document.getElementById("interest-count");

    // Set initial count display
    countDisplay.textContent = count;

    button.addEventListener("click", () => {
        count++;
        countDisplay.textContent = count;
        localStorage.setItem("interestCount", count);
    });
});
