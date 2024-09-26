function switchByid(id) {
    document.getElementById('donate-part').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function btnColorswitchByid(id){
    document.getElementById('b-donate').classList.remove('bg-gren');
    document.getElementById('b-history').classList.remove('bg-gren');
    document.getElementById(id).classList.add('bg-gren');
}

function getInputValue(id){
    const amount = document.getElementById(id).value;
    if(isNaN(amount)){
        return amount;
    }
    const amountNumber = parseFloat(amount);
    return amountNumber ;
}

function innerTextValue(id){
    const currentinner = document.getElementById(id).innerText;
    const currentinnerNumber = parseFloat(currentinner);
    return currentinnerNumber ;
}

