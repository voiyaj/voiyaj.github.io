document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 600) { // Only on small screens
        const headings = document.querySelectorAll('.links-column h3');
        headings.forEach(heading => {
            heading.addEventListener('click', () => {
                const ul = heading.nextElementSibling;
                ul.classList.toggle('active');
            });
        });
    }
});