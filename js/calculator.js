function clicked(btn){ 
    let displayValue = document.querySelector('#input-field').value;
    let putter = btn.getAttribute('data-value');
    document.querySelector('#input-field').value = document.querySelector('#input-field').value + putter; 
    console.log(putter);
    console.log(displayValue);
}

function deleteLast(){
    let displayValue = document.querySelector('#input-field').value;
    if(displayValue){
        document.querySelector('#input-field').value = displayValue.slice(0, -1);
    }
}

function getAns(){
    let finalAns = 0;
    try {
        finalAns = eval(document.querySelector('#input-field').value);
        if(finalAns == undefined){
            window.alert("Wrong Syntax, Please provide a valid input !")
            return;
        }

    } catch (error) {
        window.alert("Wrong Syntax, Please check your expression and try again ! \nError Details -> " + error);
        return;
    }
    document.querySelector('#input-field').value = finalAns;
}

function resetAll(){
    document.querySelector('#input-field').value = null;
}