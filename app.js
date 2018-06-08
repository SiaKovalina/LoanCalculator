//Listen for submit 
document.getElementById('loan-form').addEventListener('submit', function(e) {
    //Hide results
    document.getElementById('results').style.display = 'none';

    if (amount.value && interest.value && years.value) {
    document.getElementById('loader').style.display = 'block';

    setTimeout(calculateResults, 2000);
    } else {
        showError('Please, enter your numbers');
    }

    e.preventDefault();
});

function calculateResults() {

    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //Compute the monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principle * x * calculatedInterest) / (x - 1);
    
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);
        document.getElementById('loader').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    } else {
        showError('Please, check your numbers');
    }
   
}

function showError(error) {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}