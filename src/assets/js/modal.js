const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');
const btnPrice = document.querySelectorAll('.btn--price')

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        });

        modal.classList.add('show');
        body.classList.add('no-scroll');
        
        setTimeout(function() {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 1);

    });
});

function defaultCheckbox(modal) {

        const chacked = document.querySelectorAll("input:checked");
        const button = modal.querySelector('.btn--price');
        const buttonDisabled = modal.querySelector(".btn--disabled");

        Array.from(chacked).forEach((item) => {
           
            item.checked = false;
        })

        button.classList.remove('active');
        buttonDisabled.classList.add('active');

}

modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');
        const inputs = currentModal.querySelectorAll('input');

        if (inputs.length) {
            defaultCheckbox(currentModal);
        }

        closeModal(currentModal);
    });
});

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;

        closeModal(currentModal);
    });
});

function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.modal__content');
    
    modalContent.removeAttribute('style');

    setTimeout(() => {
        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 200);
    
}

btnPrice.forEach(item => {
    item.addEventListener('click', event => {

        const currentBtn = event.currentTarget;
        const modal = currentBtn.closest('.modal');

        defaultCheckbox(modal);
        
    })
})