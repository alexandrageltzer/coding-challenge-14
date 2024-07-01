import { calculateInterest } from './modules/interestRate.js';
import { calculateLoanPayment } from './modules/loanPayment.js';
import { calculateInvestmentReturn } from './modules/investmentReturn.js';

window.calculateInterestRate = function() {
    const principal = parseFloat(document.getElementById('principal1').value);
    const rate = parseFloat(document.getElementById('rate1').value);
    const time = parseFloat(document.getElementById('time1').value);
    const interest = calculateInterest(principal, rate, time);
    document.getElementById('interestResult').textContent = `Interest: ${interest}`;
}

window.calculateLoanPayment = function() {
    const principal = parseFloat(document.getElementById('principal2').value);
    const rate = parseFloat(document.getElementById('rate2').value);
    const n = parseFloat(document.getElementById('n').value);
    const payment = calculateLoanPayment(principal, rate, n);
    document.getElementById('loanPaymentResult').textContent = `Monthly Payment: ${payment}`;
}

window.calculateInvestmentReturn = function() {
    const principal = parseFloat(document.getElementById('principal3').value);
    const rate = parseFloat(document.getElementById('rate3').value);
    const n = parseFloat(document.getElementById('n2').value);
    const t = parseFloat(document.getElementById('t').value);
    const futureValue = calculateInvestmentReturn(principal, rate, n, t);
    document.getElementById('investmentReturnResult').textContent = `Future Value: ${futureValue}`;
}

