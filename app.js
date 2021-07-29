var apiKey= '1435a4f580e21cf81bf4fff60cecafd0'
var city;
// copied from docs may need to edit will commit out till then
var queryUrl ='"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;'

fetch(queryURL)