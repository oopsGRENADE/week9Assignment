document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let errors = document.querySelectorAll('.error');
        errors.forEach(error => error.textContent = '');

        let isValid = true;
        let firstErrorField = null; //Define a variable to store the first field with an error

        //USERNAME VALIDATION
        let username = document.getElementById('userName').value;
        if(!username){ //Makes sure the username field isnt empty
            document.getElementById('userNameERROR').textContent = 'Username is required.';
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = document.getElementById('userName'); //Set the first error field
            }
        }
        if (!/^[A-Za-z0-9]*$/.test(username)){ //checks to make sure the username only has letters and numbers
            document.getElementById('userNameERROR').textContent = 'Username must only contain letters and numbers.';
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = document.getElementById('userName'); //Set the first error field
            }
        }

        //PASSWORD VALIDATION
        let password = document.getElementById('password').value;
        if(!password){ //Makes sure the password field isnt empty
            document.getElementById('passwordERROR').textContent = 'Password is required.';
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = document.getElementById('password'); //Set the first error field
            }
        }
        if(password.length < 8){ //Makes sure the password is minimum 8 characters
            document.getElementById('passwordERROR').textContent = 'Password must be at least 8 characters long.';
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = document.getElementById('password'); //Set the first error field
            }
        }

        //PASSWORD VERIFICATION VALIDATION
        let passwordVerify = document.getElementById('passwordVerify').value;
        if(!passwordVerify){ //Makes sure the verification isnt empty
            document.getElementById('passwordVerifyERROR').textContent = 'Password verification is required.';
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = document.getElementById('passwordVerify'); //Set the first error field
            }
        }
        if(passwordVerify !== password){ //Makes sure password and verify are the same
            document.getElementById('passwordVerifyERROR').textContent = 'Passwords must match.';
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = document.getElementById('passwordVerify'); //Set the first error field
            }
        }

        //FIRST NAME VALIDATION
        let firstName = document.getElementById('firstName').value;
        if(!firstName.trim()){ //Makes sure first name is entered
            document.getElementById('firstNameERROR').textContent = 'First name is required';
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = document.getElementById('firstName'); //Set the first error field
            }
        }

        //LAST NAME VALIDATION
        let lastName = document.getElementById('lastName').value;
        if(!lastName.trim()){ //Makes sure last name is entered
            document.getElementById('lastNameERROR').textContent = 'Last name is required';
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = document.getElementById('lastName'); //Set the first error field
            }
        }

        //EMAIL VALIDATION
        let email = document.getElementById('email').value;
        if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ //Makes sure the email is formatted properly
            document.getElementById('emailERROR').textContent = 'Email format is incorrect (e.g., xxx@xxx.xxx).';
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = document.getElementById('email'); //Set the first error field
            }
        }

        //PHONENUMBER VALIDATION
        let phoneNumber = document.getElementById('phoneNumber').value;
        if(phoneNumber && !/^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber)){ //Makes sure the phonenumber is formatted properly
            document.getElementById('phoneNumberERROR').textContent = 'Phone number format is incorrect (e.g., (xxx) xxx-xxxx).';
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = document.getElementById('phoneNumber'); //Set the first error field
            }
        }

        //NEWSLETTER VALIDATION
        let newsLetterYes = document.querySelector('input[name="signUpNewsletter"][value="Yes"]').checked;
        let newsLetterNo = document.querySelector('input[name="signUpNewsletter"][value="No"]').checked;
        if(!newsLetterYes && !newsLetterNo){
            document.getElementById('newsLetterERROR').textContent = 'Please select an option.';
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = document.querySelector('input[name="signUpNewsletter"][value="Yes"]'); //Set the first error field
            }
        }

        if (!isValid) {
            if (firstErrorField) {
                firstErrorField.focus(); //Focuses on error
                firstErrorField.select(); //Selects the error
            }
        } else {
            //Submit the form
            document.querySelector('form#registrationForm').submit();
        }

    });//end of event listener 
});//end of DOM