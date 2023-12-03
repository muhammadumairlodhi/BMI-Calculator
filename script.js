function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightFeet = parseFloat(document.getElementById('heightFeet').value);
    const heightInches = parseFloat(document.getElementById('heightInches').value);
    const heightInCm = feetAndInchesToCm(heightFeet, heightInches);
    const bmi = weight / ((heightInCm / 100) * (heightInCm / 100));

    if (isNaN(bmi)) {
        document.getElementById('result').innerHTML = 'Please enter valid weight and height.';
    } else {
        const bmiCategory = getBMICategory(bmi);
        document.getElementById('result').innerHTML = `Your BMI: ${bmi.toFixed(2)} - ${bmiCategory}`;
    }
}

function feetAndInchesToCm(feet, inches) {
    const feetToCm = feet * 30.48;
    const inchesToCm = inches * 2.54;
    return feetToCm + inchesToCm;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}