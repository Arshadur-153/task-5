

document.getElementById('b-donate').addEventListener('click', function () {
    switchByid('donate-part');
    btnColorswitchByid('b-donate');
})

document.getElementById('b-history').addEventListener('click', function () {
    switchByid('history');
    btnColorswitchByid('b-history');
})

document.getElementById('b-blog').addEventListener('click', function () {
    window.location.href = './blog.html';
})


document.getElementById('donate-Noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    const donation = getInputValue('first-input');
    if (isNaN(donation)) {
        alert('Faild to Donate please enter correct amount');
        return;
    }
    const currentDonation = innerTextValue('money-n');
    const currentBalance = innerTextValue('currnet-coin');

    if (donation > currentBalance) {
        alert('You do not have enough coin to Donate');
        return;
    }

    if (donation < 0) {
        alert('Faild to Donate please enter correct amount');
        return;
    }

    const newbalance = currentBalance - donation;
    const newdonation = currentDonation + donation;

    document.getElementById('money-n').innerText = newdonation;

    document.getElementById('currnet-coin').innerText = newbalance;

    my_modal_11.showModal();
    const date = new Date().toString();

    const div = document.createElement('div');
    div.classList.add('border', 'rounded', 'mb-2');
    div.innerHTML = `
    <h4 class="text-xl font-bold my-2 ml-10">${donation} Taka is Donated for Flood at Noakhali, Bangladesh </h4>
    <p class="text-lg font-bold my-2 ml-10">${date}</p>

    `
    document.getElementById('history-container').appendChild(div);
})



document.getElementById('donate-Feni').addEventListener('click', function (event) {
    event.preventDefault();
    const donation = getInputValue('second-input');
    if (isNaN(donation)) {
        alert('Faild to Donate please enter correct amount');
        return;
    }
    const currentDonation = innerTextValue('money-f');
    const currentBalance = innerTextValue('currnet-coin');



    if (donation > currentBalance) {
        alert('You do not have enough coin to Donate');
        return;
    }

    if (donation < 0) {
        alert('Faild to Donate please enter correct amount');
        return;
    }

    const newbalance = currentBalance - donation;
    const newdonation = currentDonation + donation;

    document.getElementById('money-f').innerText = newdonation;

    document.getElementById('currnet-coin').innerText = newbalance;

    my_modal_12.showModal();
    const date = new Date().toString();

    const div = document.createElement('div');
    div.classList.add('border', 'rounded', 'mb-2');
    div.innerHTML = `
    <h4 class="text-xl font-bold my-2 ml-10">${donation} Taka is Donated for Flood Relief in Feni,Bangladesh </h4>
    <p class="text-lg font-bold my-2 ml-10">${date}</p>

    `
    document.getElementById('history-container').appendChild(div);
})




document.getElementById('donate-Quota').addEventListener('click', function (event) {
    event.preventDefault();
    const donation = getInputValue('third-input');
    if (isNaN(donation)) {
        alert('Faild to Donate please enter correct amount');
        return;
    }
    const currentDonation = innerTextValue('money-q');
    const currentBalance = innerTextValue('currnet-coin');

    if (donation > currentBalance) {
        alert('You do not have enough coin to Donate');
        return;
    }

    if (donation < 0) {
        alert('Faild to Donate please enter correct amount');
        return;
    }


    const newbalance = currentBalance - donation;
    const newdonation = currentDonation + donation;

    document.getElementById('money-q').innerText = newdonation;

    document.getElementById('currnet-coin').innerText = newbalance;

    my_modal_13.showModal();

    const date = new Date().toString();

    const div = document.createElement('div');
    div.classList.add('border', 'rounded', 'mb-2');
    div.innerHTML = `
    <h4 class="text-xl font-bold my-2 ml-10">${donation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h4>
    <p class="text-lg font-bold my-2 ml-10">${date}</p>
    `
    document.getElementById('history-container').appendChild(div);
})