// Your JavaScript code goes here
function submitForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Perform form submission logic here (can be sent to a server, stored in a database, etc.)
    console.log('Form submitted:');
    console.log('Full Name: ' + fullName);
    console.log('Email: ' + email);
    console.log('Message: ' + message);

    // You can redirect to another page or display a success message here

    // For demonstration purposes, let's show an alert for successful submission
    alert('Form submitted successfully!');
}
