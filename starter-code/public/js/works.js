const $textSurferNode = document.querySelector('span');
const $inputNode = document.querySelector('input');
const $triggerNode = document.querySelector('button');

$triggerNode.addEventListener('click', event => {
    const inputValue = $inputNode.value;

    $textSurferNode.innerText += inputValue;
});