const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');

showButton.addEventListener('click', () => {
    favDialog.showModal();
});

selectEl.addEventListener('change', (e) => {
    confirmBtn.value = selectEl.value;
});

favDialog.addEventListener('close', (e) => {
    outputBox.value = favDialog.returnValue === 'default' ? "No return value." : `ReturnValue: ${favDialog.returnValue}.`;
});

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    favDialog.close(selectEl.value);
});


function rulesDialog() {

    

}