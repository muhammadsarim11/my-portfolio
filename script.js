const tabs = document.querySelectorAll('[data-target]'),
tabscontent = document.querySelectorAll('[data-content]')


tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
const target = document.querySelector(tab.dataset.target)  

tabscontent.forEach(tc=>{
    tc.classList.remove("filters-active")

})

target.classList.add("filters-active")


tabs.forEach(t=>{
    t.classList.remove('filter-tab-active')
})
tab.classList.add('filter-tab-active')

    })
})

// const sr = ScrollReveal({
//     origin: 'top',
//     distance:'60px',
//     duration:500,
//     delay:400
// })

// sr.reveal(`.profile_border`)
// sr.reveal(`.profile-name`,{delay:500})
// sr.reveal(`.profile-profession`,{delay:600})
// sr.reveal(`.profile_social`,{delay:700})
// sr.reveal(`.profile-info-group`,{interval:100, delay:700})
// sr.reveal(`.profile-buttons`,{delay:800})
// sr.reveal(`.filters-content`,{delay:900})
// sr.reveal(`.filters`,{delay:1000})

// const loader = document.querySelector('.loader')






// ----------------------------------------------------------------


const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        alert('Message sent successfully!');
        contactForm.reset();
    })
    .catch((error) => {
        console.error(error);
        alert('Failed to send the message. Please try again later.');
    });
});
