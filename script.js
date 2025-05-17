const form = document.querySelector('form');

// Get values after submitting
form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop default form action

    const height = parseInt(document.querySelector('#height').value); // convert input to integer
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    // Validate height
    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please give a valid height";
    }
    // Validate weight
    else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please give a valid weight";
    }
    // Calculate BMI
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
    }
});
