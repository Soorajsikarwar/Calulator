document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.innerText === 'C') {
                display.value = '';
            } else if (button.innerText === 'del') {
                display.value = display.value.slice(0, -1);
            } else if (button.innerText === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                display.value += button.innerText;
            }
        });
    });
});
