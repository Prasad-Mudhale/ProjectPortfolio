// Slider functionality
function createSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].style.transform = 'translateX(-100%)';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.transform = 'translateX(0)';
    }, 3000);
}

createSlider('presentation-slider');
createSlider('events-slider');
createSlider('industrial-slider');

// Chart.js for graphs
const ctx = document.getElementById('performanceChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Efficiency', 'Speed', 'Reliability'],
        datasets: [{
            label: 'Performance Metrics',
            data: [95, 90, 98],
            backgroundColor: ['#0066CC', '#FF6600', '#808080']
        }]
    }
});

// Smooth scroll and animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

function slideLeft(num) {
    document.getElementById("slider" + num).scrollBy({
        left: -320,
        behavior: "smooth"
    });
}

function slideRight(num) {
    document.getElementById("slider" + num).scrollBy({
        left: 320,
        behavior: "smooth"
    });
}
function changeSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const images = slider.querySelectorAll("img");

    let currentIndex = Number(slider.getAttribute("data-index"));
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    slider.setAttribute("data-index", currentIndex);
    images.forEach((img, i) => {
        img.style.display = i === currentIndex ? "block" : "none";
    });
}
