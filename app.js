//Listen for submit 
document.querySelector('#loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
    const $amount = document.querySelector('#amout');
    const $interest = document.querySelector('#interest');
    const $years = document.querySelector('#years');
    const $monthlyPayment = document.querySelector('#monthly-payment');

    e.preventDefault();
}