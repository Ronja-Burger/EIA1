window.addEventListener("load", function(){

var africa : string = "Africa";
var southamerica : string = "South America";
var europe : string = "Europe";
var northamerica : string = "North America";
var asia : string = "Asia";
var australia : string = "Australia";

var africa_2008 : number = 1280;
var southamerica_2008 : number = 1132.6;
var europe_2008 : number = 4956.7;
var northamerica_2008 : number = 6600.4;
var asia_2008 : number = 12954.7;
var australia_2008 : number = 1993;

var africa_2018 : number = 1235.5;
var southamerica_2018 : number = 1261.5;
var europe_2018 : number = 4209.3;
var northamerica_2018 : number = 6035.6;
var asia_2018 : number = 16274.1;
var australia_2018 : number = 2100.5;


/* Welt Gesamt Rechnung */

var welt18 : number = africa_2018+southamerica_2018+europe_2018+northamerica_2018+asia_2018+australia_2018;


/* Afrika Rechnung */

var afzuwelt : number = africa_2018/welt18*100;
var afzuaf : number = (africa_2018/africa_2008-1)*100;
var afzuafco: number = africa_2018-africa_2008;

/* Süd Amerika Rechnung */

var sazuwelt : number = southamerica_2018/welt18*100;
var sazusa : number = (southamerica_2018/southamerica_2008-1)*100;
var sazusaco: number = southamerica_2018-southamerica_2008;

/* Europa Rechnung */

var euzuwelt : number = europe_2018/welt18*100;
var euzueu : number = (europe_2018/europe_2008-1)*100;
var euzueuco: number = europe_2018-europe_2008;

/* Nord Amerika Rechnung */

var nazuwelt : number = northamerica_2018/welt18*100;
var nazuna : number = (northamerica_2018/northamerica_2008-1)*100;
var nazunaco: number = northamerica_2018-northamerica_2008;

/* Asien Rechnung */

var aszuwelt : number = asia_2018/welt18*100;
var aszuas : number = (asia_2018/asia_2008-1)*100;
var aszuasco: number = asia_2018-asia_2008;

/* Australien Rechnung */

var auszuwelt : number = australia_2018/welt18*100;
var auszuaus : number = (australia_2018/australia_2008-1)*100;
var auszuausco: number = australia_2018-australia_2008;


/* DOM-Manipulation*/

document.querySelector(".africa").addEventListener("click", function () {lander(africa, africa_2018, afzuwelt, afzuaf, afzuafco);});
document.querySelector(".southamerica").addEventListener("click", function () {lander(southamerica, southamerica_2018, sazuwelt, sazusa, sazusaco);});
document.querySelector(".europe").addEventListener("click", function () {lander(europe, europe_2018, euzuwelt, euzueu, euzueuco);});
document.querySelector(".northamerica").addEventListener("click", function () {lander(northamerica, northamerica_2018, nazuwelt, nazuna, nazunaco);});
document.querySelector(".asia").addEventListener("click", function () {lander(asia, asia_2018, aszuwelt, aszuas, aszuasco);});
document.querySelector(".australia").addEventListener("click", function () {lander(australia, australia_2018, auszuwelt, auszuaus, auszuausco);});

/* Funktion Länder */

function lander(land, land18, landzuwelt, landzuland, landzulandco) {
document.querySelector(".emission").innerHTML = land18.toFixed(2);
document.querySelector(".relative").innerHTML = landzuwelt.toFixed(2) + "%";
document.querySelector(".growth").innerHTML = landzuland.toFixed(2) + "%";
document.querySelector(".growthrate").innerHTML = landzulandco.toFixed(2);
document.querySelector("#titleRegion").innerHTML = land;
document.querySelector("#subtitleRegion").innerHTML = land;
}
});