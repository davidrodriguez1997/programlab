document.getElementById('tdee-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the user input values
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = parseFloat(document.getElementById('activity-level').value);

    // Check if any field is empty or invalid
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert('Please fill in all the fields with valid data.');
        return;
    }

    // Calculate the Basal Metabolic Rate (BMR)
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Harris-Benedict formula for men
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161; // Harris-Benedict formula for women
    }

    // Calculate TDEE
    const tdee = bmr * activityLevel;

    // Display the result
    document.getElementById('tdee-value').textContent = tdee.toFixed(2);
});

