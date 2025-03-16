document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        e.preventDefault(); myprotfolio/script.js
        alert('Please fill out all fields.');
    } else {
        
        alert('Thank you for your message!');
    }
});


const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.backgroundColor = '#6EC1E4';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.color = 'white';
scrollToTopButton.style.fontSize = '20px';
scrollToTopButton.style.display = 'none';
scrollToTopButton.style.cursor = 'pointer';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
