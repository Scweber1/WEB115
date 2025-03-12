  // JavaScript code for form validation

// Retrieve the input field element using JavaScript
var inputField = document.getElementById('inputField');

// Add an event listener to the form 
document.getElementById('myForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting if the input is invalid
  event.preventDefault(); 

  // Implement a function to validate the input value using a regex for alphanumeric input
  var inputValue = inputField.value;
  var regex = /^[a-zA-Z0-9]+$/; 

  // Check if the input value matches the pattern
  if (regex.test(inputValue)) {
    // Valid input: display confirmation and submit the form
    alert("Valid input! Form would be submitted.");
    // Since the server is not set up to process forms, simulate submission
  } else {
    // Invalid input: display an error message
    alert("Invalid input! Please enter only alphanumeric characters (letters and numbers).");
  }
});
