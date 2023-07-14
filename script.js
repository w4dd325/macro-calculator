function addNumbers(event) {
	event.preventDefault(); // Prevent form submission from reloading the page

    const age = parseInt(document.getElementById("age").value);
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const gender = document.getElementById("gender").value;
    const dietType = document.getElementById("dietType").value;

    let element = document.getElementById("result");
    let bmr;
    let prot, fat, carb;

    element.innerHTML = ""; // Clear the content of the element

    //let bmr = age + height + weight;
    if (gender === 'female') {
        bmr = Math.floor(655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
    } else if (gender === 'male') {
        bmr = Math.floor(66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age));
    }
    
    if (dietType === 'highcarb') {
        prot = Math.floor((bmr * 0.20) / 4);
        fat = Math.floor((bmr * 0.10) / 9);
        carb = Math.floor((bmr * 0.70) / 4);
    }else if (dietType === 'balanced') {
        prot = Math.floor((bmr * 0.25) / 4);
        fat = Math.floor((bmr * 0.25) / 9);
        carb = Math.floor((bmr * 0.50) / 4);
    }else if (dietType === 'highfat') {
        prot = Math.floor((bmr * 0.23) / 4);
        fat = Math.floor((bmr * 0.70) / 9);
        carb = Math.floor((bmr * 0.07) / 4);
    }

    //-------------------------------------------------------------------------------------------------

	element.innerHTML += "Your BMR is: " + bmr;
    element.innerHTML += "<br />";
    element.innerHTML += "<br />";
	element.innerHTML += "Protein:\t" + prot + "g";
    element.innerHTML += "<br />";
    element.innerHTML += "Fats:\t" + fat + "g";
    element.innerHTML += "<br />";
    element.innerHTML += "Carbs:\t" + carb + "g";
    element.innerHTML += "<br />";
}
