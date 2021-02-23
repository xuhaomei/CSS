let updateButton = document.getElementById('updateDetails');
let favDialog = document.getElementById('favDialog');
let outputBox = document.querySelector('output');
let selectEl = document.querySelector('select');
let confirmBtn = document.getElementById('confirmBtn');

updateButton.addEventListener('click', function onOpen (e) {
    if (typeof favDialog.showModal === 'function') {
        favDialog.showModal();
    } else {
        alert('The <dialog> API is not support by this browser.');
    }
});

selectEl.addEventListener('change', function onChange (e) {
    confirmBtn.value = selectEl.value;
});

favDialog.addEventListener('close', function onClose (e) {
    outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
});