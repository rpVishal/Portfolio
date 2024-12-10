/* menu icon navbar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};


/*      scroll sections active link  */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



/*      sticky navbar   */

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
});
        };
    });
let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY>100);

/* remove menu icon navbar when click navbar link(scroll)*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/* dark light mode */
let darkModeIcon = document.querySelector('#darkmode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/* scroll reveal */
ScrollReveal({ 
   // reset: true, 
    distance: '80px', 
    duration: 2000, 
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

//emil js script
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(this);

    // Send email using EmailJS
    emailjs.send("service_ID", "Template_ID", {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        mobileNumber: formData.get('mobileNumber'),
        subject: formData.get('subject'),
        message: formData.get('message')
    }).then(function(response) {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send message. Please try again.');
        console.error('Error:', error);
    });
});

