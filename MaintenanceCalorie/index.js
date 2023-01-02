window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateMaintananceCalorie);
};

function calculateMaintananceCalorie() {

    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);

    /* Getting input from user into weight variable.
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
    let age = parseInt(document.querySelector("#age").value);

    let pal = parseInt(document.querySelector("#pal").value);

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
        let MaintananceCalorie = ((10* weight)+(6.25*height)-(5*age)-161)*pal;

        // Dividing as per the bmi conditions
        result.innerHTML =`Total calorie requirement : <span>${MaintananceCalorie} kcal/day</span>`;


    }
}
