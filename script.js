let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    const carouselContent = document.querySelector('.carousel-content');
    const newTransformValue = -index * 100;
    carouselContent.style.transform = `translateX(${newTransformValue}%)`;
}

function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}

function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.next').addEventListener('click', nextItem);
    document.querySelector('.prev').addEventListener('click', prevItem);
    showItem(currentIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    function stickNavbar() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    window.onscroll = function() {
        stickNavbar();
    };
});
