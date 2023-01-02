window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBodyFat);
};

function calculateBodyFat() {

    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let age = parseInt(document.querySelector("#age").value);

    let height = parseInt(document.querySelector("#height").value);

    /* Getting input from user into weight variable.
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document.querySelector("#weight").value);

    let neck = parseInt(document.querySelector("#neck").value);

    let waist = parseInt(document.querySelector("#waist").value);


    let result = document.querySelector("#result");

    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";

    // If both input is valid, calculate the bmi
    else {

        // Fixing upto 2 decimal places
        let bodyFat = Math.round((86.010*(Math.log(waist*1-neck*1)/Math.log(10))-70.041*(Math.log(height)/Math.log(10))+30.30*1)*100)/100;

        // Dividing as per the bmi conditions
        if (bodyFat < 2) result.innerHTML =
            `Heavy BodyFat required: <span>${bodyFat}</span>`;

        else if (bodyFat >= 2 && bodyFat < 5)
            result.innerHTML =
                `Essential BodyFat : <span>${bodyFat}</span>`;

        else if (bodyFat >= 5 && bodyFat < 13)
            result.innerHTML =
                `Athletes : <span>${bodyFat}</span>`;

        else if (bodyFat >= 13 && bodyFat < 17)
            result.innerHTML =
                `Fitness : <span>${bodyFat}</span>`;

        else if (bodyFat >= 17 && bodyFat < 25)
            result.innerHTML =
                `Average : <span>${bodyFat}</span>`;

        else result.innerHTML =
            `Obese : <span>${bodyFat}</span>`;
    }
}
