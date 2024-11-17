const formBlock = document.getElementById('formBlock');
const submitBtn = document.getElementById('formSubmitBtn');
const formElement = document.getElementById('formElement');
const formTitle = document.getElementById('formTitle');

function submitBtnListener() {
    submitBtn.addEventListener('click', () => {
        formBlock.classList.add('block__submitted');
        formElement.remove();
        formTitle.innerHTML = `<h1>Submission sucessful</h1>`;
    });
}

export { submitBtnListener };