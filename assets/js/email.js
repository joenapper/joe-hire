// Modal
const toggleModal = () => {
  document.querySelector('.modal')
    .classList.toggle('modal-hidden');
};

document.querySelector('#show-modal')
  .addEventListener('click', toggleModal);

document.querySelector('#contact-form')
    .addEventListener('submit', (event) => {
        // event.preventDefault(); 
        toggleModal();
    });

document.querySelector('.modal-close i')
  .addEventListener('click', toggleModal);



// Sends Form
function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.project.value
    })
    .then(
        function(response) {
            console.log('success', response);
        },
        function(error) {
            console.log('failed', error);
        }
    );
    return false;
};
