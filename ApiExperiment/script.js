
var apiProvider = "openweathermap.org";
var city = "Dhaka,bd";

$.getJSON("http://api." + apiProvider +"/data/2.5/weather?q=" + city + "&units=imperial&APPID=f4cc075ea301646a421c78dc383a795a", 
function(data){
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var weather = data.weather[0].main;
    var temp = data.main.temp + "F";

    var lon = "Longitude: " + data.coord.lon;
    var lat = "Latitudde: " + data.coord.lat;

    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $(".temp").append(temp);

    $(".lon").append(lon);
    $(".lat").append(lat);
})