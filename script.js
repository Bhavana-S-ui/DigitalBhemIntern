document.getElementById("convertBtn").addEventListener("click", function () {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.querySelector('input[name="unit"]:checked').value;
    let result = '';

    if (isNaN(temperature)) {
        result = "Please enter a valid number!";
        document.getElementById("result").style.color = 'red';
    } else {
        if (unit === 'celsius') {
            result += `${temperature}°C = ${(temperature * 9/5 + 32).toFixed(2)}°F`;
            result += ` | ${temperature}°C = ${(temperature + 273.15).toFixed(2)}K`;
        } else if (unit === 'fahrenheit') {
            result += `${temperature}°F = ${((temperature - 32) * 5/9).toFixed(2)}°C`;
            result += ` | ${temperature}°F = ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
        } else if (unit === 'kelvin') {
            result += `${temperature}K = ${(temperature - 273.15).toFixed(2)}°C`;
            result += ` | ${temperature}K = ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
        }
        document.getElementById("result").style.color = 'black';
    }
    
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.opacity = 1;
});

document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("temperature").value = '';
    document.getElementById("result").innerHTML = '';
    document.getElementById("result").style.opacity = 0;
});
