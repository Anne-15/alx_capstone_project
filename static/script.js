function myFunction() {
    var x = document.getElementById("menu-display");
    if (x.className === "menu-display") {
      x.className += " responsive";
    } else {
      x.className = "menu-display";
    }
  }

function downloadResume(){
    var pdfDocument = 'ANNE WARIIYU NDUATI RESUME.pdf';
    var link = document.createElement('a')
    link.href = pdfDocument
    link.download = 'ANNE WARIIYU NDUATI RESUME.pdf';
    document.body.append(link)
    link.click();
    document.body.removeChild(link)
}

document.addEventListener('DOMContentLoaded', function () {
    function handleFormSubmit(event) {
        event.preventDefault();
        // getting the input values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const messages = document.getElementById('messages').value.trim();
        const message = document.getElementById('message');

        // Validate form fields
        if (name == '' || email == '' || subject == '' || messages == '') {
            // Display error message if any required field is empty
            message.textContent = 'Please fill in all required fields.';
            message.style.color = 'red';
        } else if (!isValidEmail(email)) {
            // Display error message if the email format is invalid
            message.textContent = 'Please enter a valid email address.';
            message.style.color = 'red';
        } else {
            // Clear any previous error messages
            message.textContent = '';

            // Display success message
            message.textContent = 'Form submitted successfully!';
            message.style.color = 'green';

            // Submit the form
            document.getElementById('submitForm').submit();
        }
    }

    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    // Attach the validateForm function to the form submission event
    document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);
});
