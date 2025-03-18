document.addEventListener('DOMContentLoaded', () => {
    const mailIcon = document.querySelector('.mail-icon i');
    const mailMenu = document.getElementById('mailMenu');

    mailIcon.addEventListener('click', () => {
        mailMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!mailIcon.contains(e.target) && !mailMenu.contains(e.target)) {
            mailMenu.classList.remove('active');
        }
    });
});
