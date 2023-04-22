let dislplay = document.getElementById('result');

let buttons = Array.from(document.getElementsByClassName('btn'));
console.log(buttons);

buttons.map( button => {
button.addEventListener('click', (e) => {
    console.log('clicked');
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);

    switch(e.target.innerText) {
        case 'C':
                dislplay.innerText = ' ';
                break;
        case '←':
            if(dislplay.innerText) {
                dislplay.innerText = dislplay.innerText.slice(0, -1);
            }
                break;
        case '=':
            try {
                dislplay.innerText = eval(dislplay.innerText);   
            }
            catch {
                dislplay.innerText = 'Error!'
            }
            break;        
        default: 
                dislplay.innerText += e.target.innerText;
        }
    })
});