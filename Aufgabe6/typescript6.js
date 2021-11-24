window.addEventListener("load", function () {
    var africa = "Africa";
    var southamerica = "South America";
    var europe = "Europe";
    var northamerica = "North America";
    var asia = "Asia";
    var australia = "Australia";
    var africa_2008 = 1280;
    var southamerica_2008 = 1132.6;
    var europe_2008 = 4956.7;
    var northamerica_2008 = 6600.4;
    var asia_2008 = 12954.7;
    var australia_2008 = 1993;
    var africa_2018 = 1235.5;
    var southamerica_2018 = 1261.5;
    var europe_2018 = 4209.3;
    var northamerica_2018 = 6035.6;
    var asia_2018 = 16274.1;
    var australia_2018 = 2100.5;
    /* Welt Gesamt Rechnung */
    var welt18 = africa_2018 + southamerica_2018 + europe_2018 + northamerica_2018 + asia_2018 + australia_2018;
    /* Afrika Rechnung */
    var afzuwelt = africa_2018 / welt18 * 100;
    var afzuaf = (africa_2018 / africa_2008 - 1) * 100;
    var afzuafco = africa_2018 - africa_2008;
    /* Süd Amerika Rechnung */
    var sazuwelt = southamerica_2018 / welt18 * 100;
    var sazusa = (southamerica_2018 / southamerica_2008 - 1) * 100;
    var sazusaco = southamerica_2018 - southamerica_2008;
    /* Europa Rechnung */
    var euzuwelt = europe_2018 / welt18 * 100;
    var euzueu = (europe_2018 / europe_2008 - 1) * 100;
    var euzueuco = europe_2018 - europe_2008;
    /* Nord Amerika Rechnung */
    var nazuwelt = northamerica_2018 / welt18 * 100;
    var nazuna = (northamerica_2018 / northamerica_2008 - 1) * 100;
    var nazunaco = northamerica_2018 - northamerica_2008;
    /* Asien Rechnung */
    var aszuwelt = asia_2018 / welt18 * 100;
    var aszuas = (asia_2018 / asia_2008 - 1) * 100;
    var aszuasco = asia_2018 - asia_2008;
    /* Australien Rechnung */
    var auszuwelt = australia_2018 / welt18 * 100;
    var auszuaus = (australia_2018 / australia_2008 - 1) * 100;
    var auszuausco = australia_2018 - australia_2008;
    /* DOM-Manipulation*/
    document.querySelector(".africa").addEventListener("click", function () { lander(africa, africa_2018, afzuwelt, afzuaf, afzuafco); });
    document.querySelector(".southamerica").addEventListener("click", function () { lander(southamerica, southamerica_2018, sazuwelt, sazusa, sazusaco); });
    document.querySelector(".europe").addEventListener("click", function () { lander(europe, europe_2018, euzuwelt, euzueu, euzueuco); });
    document.querySelector(".northamerica").addEventListener("click", function () { lander(northamerica, northamerica_2018, nazuwelt, nazuna, nazunaco); });
    document.querySelector(".asia").addEventListener("click", function () { lander(asia, asia_2018, aszuwelt, aszuas, aszuasco); });
    document.querySelector(".australia").addEventListener("click", function () { lander(australia, australia_2018, auszuwelt, auszuaus, auszuausco); });
    /* Funktion Länder */
    function lander(land, land18, landzuwelt, landzuland, landzulandco) {
        document.querySelector(".emission").innerHTML = land18.toFixed(2);
        document.querySelector(".relative").innerHTML = landzuwelt.toFixed(2) + "%";
        document.querySelector(".growth").innerHTML = landzuland.toFixed(2) + "%";
        document.querySelector(".growthrate").innerHTML = landzulandco.toFixed(2);
        document.querySelector("#titleRegion").innerHTML = land;
        document.querySelector("#subtitleRegion").innerHTML = land;
    }
    /*
    var Grafik:HTMLElement = document.querySelector(".chart")
    Grafik.style.height = landzuwelt + "px";
    */
});
//# sourceMappingURL=typescript6.js.map