'use strict';

{
    const createPar = () => {
        const parElem = document.createElement('p');
        parElem.className = 'textOutput';
        return parElem;
    }

    const createInput = () => {
        const inputElem = document.createElement('input');
        inputElem.type = 'text';
        inputElem.id = 'textInput';
        inputElem.className = 'textInput';
        
        return inputElem;
    }
    
    const inputWrite = (input, p) => {
        input.addEventListener('blur', () => {
            setTimeout( () => {
                p.textContent = input.value;
            }, 500);
        })
    }

    const init = () => {
        const input = createInput();
        const parElem = createPar();
        document.body.append(input, parElem);  
        
        inputWrite(input, parElem);
    }

    init();
}