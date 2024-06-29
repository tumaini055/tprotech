const form = document.getElementById('boost-form');
const responseDiv = document.getElementById('response');
const totalAmountDiv = document.getElementById('total-amount');

form.addEventListener('input', () => {
    const quantity = document.getElementById('quantity').value;
    const rate = 6000; // 6000 Tsh per 1000 followers
    const totalAmount = (quantity / 1000) * rate;
    totalAmountDiv.innerHTML = `Total Amount: ${totalAmount} Tsh`;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const accountId = document.getElementById('account-id').value;
    const paymentDetails = document.getElementById('payment-details').value;
    const quantity = document.getElementById('quantity').value;
    const socialMedia = document.getElementById('social-media').value;
    const totalAmount = (quantity / 1000) * 6000; // 6000 Tsh per 1000 followers

    // TO DO: Send a request to your server to process the payment and boost the followers
    // For now, just display a success message
    responseDiv.innerHTML = `Thank you for submitting your request! We will boost your ${socialMedia} followers to ${quantity} soon. Total amount to be paid: ${totalAmount} Tsh.     Pay Through 0626889598 and  click confirm after payment`;
});