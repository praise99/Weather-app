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
        

       



        var converted=tempValue-273
        var tempValuesign=Number( converted.toPrecision(3))


        locate.innerHTML=locationValue;
        temperature.innerHTML=tempValuesign;
        tempDesc.innerHTML=descValue;
        country.innerHTML=countryValue;
        humidity.innerHTML=humidityValue +"%";
        pressure.innerHTML=pressureValue + "hPa";
        windSpeed.innerHTML=windValue +"m/s";
        latitude.innerHTML="Latitude: "+ latitudeValue +"°";
        longitude.innerHTML="Longitude: "+ longitudeValue + "°";
        icon.innerHTML="<img src=images/"+ iconValue +".png>";






       


         //creating weather data object
        var weatherUpdate={
            "location":locationValue,
            "temperature":tempValuesign,
            "tempDescription":descValue,
            "country":countryValue,
            "humidity":humidityValue,
            "pressure":pressureValue,
            "windSpeed":windValue,
            "latitude":latitudeValue +"°",
            "longitude":longitudeValue +"°",
            "icon":iconValue
        }
        //storing data in local storage
        var weatherSerialized=JSON.stringify(weatherUpdate);
        

        localStorage.setItem("weatherUpdate",weatherSerialized);
        

        






    })

.catch(err => alert("You Entered a Wrong City or Country. Check your spelling"))

})


//getting data from local storage
var weatherDeserialized=JSON.parse(localStorage.getItem("weatherUpdate"))

//displaying data offline
locate.innerHTML=weatherDeserialized.location;
temperature.innerHTML=weatherDeserialized.temperature;
tempDesc.innerHTML=weatherDeserialized.tempDescription;
country.innerHTML=weatherDeserialized.country;
humidity.innerHTML=weatherDeserialized.humidity +" %";
pressure.innerHTML=weatherDeserialized.pressure + " hPa";
windSpeed.innerHTML=weatherDeserialized.windSpeed +" m/s";
latitude.innerHTML="Latitude: "+ weatherDeserialized.latitude;
longitude.innerHTML="Longitude: "+ weatherDeserialized.longitude;
icon.innerHTML="<img src=images/"+ weatherDeserialized.icon +".png>";

