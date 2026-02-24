const meowSound = new Audio("meow.mp3");

function convertTemperature() {

    meowSound.play();



    let celsius = document.getElementById("celsius").value;
    let fahrenheit = document.getElementById("fahrenheit").value;
    let kelvin = document.getElementById("kelvin").value;


    if (celsius !== "") {
        celsius = parseFloat(celsius);
        document.getElementById("fahrenheit").value = ((celsius * 9/5) + 32).toFixed(2);
        document.getElementById("kelvin").value = (celsius + 273.15).toFixed(2);
    }

    else if (fahrenheit !== "") {
        fahrenheit = parseFloat(fahrenheit);

        let c = (fahrenheit - 32) * 5/9;
        document.getElementById("celsius").value = c.toFixed(2);
        document.getElementById("kelvin").value = (c + 273.15).toFixed(2);

    }

    else if (kelvin !== "") {
        kelvin = parseFloat(kelvin);

        let c = kelvin - 273.15;
        document.getElementById("celsius").value = c.toFixed(2);
        document.getElementById("fahrenheit").value = ((c * 9/5) + 32).toFixed(2);
    }

    else {
        alert("Please enter a value in one field.");
    }
}




