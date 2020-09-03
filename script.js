const inputValue = document.querySelector(".country-id");
const button=document.querySelector(".submit-btn");
const locate=document.querySelector(".location");
const country=document.querySelector(".country");
const temperature=document.querySelector(".temp");
const tempDesc=document.querySelector(".temp-desc");
const humidity=document.querySelector(".humidity-desc");
const humidityDesc=document.querySelector(".humidity-contri");
const pressure=document.querySelector(".pressure-desc");
const pressureDesc=document.querySelector(".pressure-contri");
const windSpeed=document.querySelector(".wind-desc");
const windSpeedDesc=document.querySelector(".wind-contri");
const latitude=document.querySelector(".lat");
const longitude=document.querySelector(".long");
const icon=document.querySelector(".sectC-temp");

button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=bde93a81cb4244cd36483e44115d96d9")
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        var locationValue=data["name"];
        var tempValue=data["main"]["temp"]
        var descValue=data["weather"][0]["description"]
        var countryValue=data["sys"]["country"]
        var humidityValue=data["main"]["humidity"]
        var pressureValue=data["main"]["pressure"]
        var windValue=data["wind"]["speed"]
        var latitudeValue=data["coord"]["lat"]
        var longitudeValue=data["coord"]["lon"]
        var iconValue=data["weather"][0]["icon"]



        locate.innerHTML=locationValue;
        temperature.innerHTML=tempValue;
        tempDesc.innerHTML=descValue;
        country.innerHTML=countryValue;
        humidity.innerHTML=humidityValue +" %";
        pressure.innerHTML=pressureValue + " psi";
        windSpeed.innerHTML=windValue +" km/h";
        latitude.innerHTML="Latitude: "+ latitudeValue;
        longitude.innerHTML="Longitude: "+ longitudeValue;
        icon.innerHTML="<img src=images/"+ iconValue +".png>";

    })

.catch(err => alert("wrong city"))

})

