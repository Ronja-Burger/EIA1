/* Absatz Variablen */
var absatz0 = " Die Welt Produziert ";
var absatz1 = " Die Emission von ";
var absatz2 = "Relativ zur Gesamtemission der Welt verursacht ";
var absatz3 = "Für ";
var absatz4 = "2018 im Vergleich zu 2008 sind das ";
/* Anhang Variablen */
var anhang1a = " ist: ";
var anhang1b = "kg CO².";
var anhang2a = " damit ";
var anhang2b = "%.";
var anhang3a = " hat sich 2018 im Vergleich zu 2008 die Emission um ";
var anhang3b = "% verändert.";
/* Länder Text Variablen */
var continent1 = "africa";
var continent2 = "southamerica";
var continent3 = "europe";
var continent4 = "northamerica";
var continent5 = "asia";
var continent6 = "australia";
/* ------------------(Numbers Deklaration)------------------ */
var continent1_2008 = 1280;
var continent2_2008 = 1132.6;
var continent3_2008 = 4956.7;
var continent4_2008 = 6600.4;
var continent5_2008 = 12954.7;
var continent6_2008 = 1993;
var continent1_2018 = 1235.5;
var continent2_2018 = 1261.5;
var continent3_2018 = 4209.3;
var continent4_2018 = 6035.6;
var continent5_2018 = 16274.1;
var continent6_2018 = 2100.5;
/* Welt Gesamt Rechnung */
var welt18 = continent1_2018 + continent2_2018 + continent3_2018 + continent4_2018 + continent5_2018 + continent6_2018;
/* Afrika Rechnung */
var afzuwelt = continent1_2018 / welt18 * 100;
var afzuaf = (continent1_2018 / continent1_2008 - 1) * 100;
var afzuafco = continent1_2018 - continent1_2008;
/* Süd Amerika Rechnung */
var sazuwelt = continent2_2018 / welt18 * 100;
var sazusa = (continent2_2018 / continent2_2008 - 1) * 100;
var sazusaco = continent2_2018 - continent2_2008;
/* Europa Rechnung */
var euzuwelt = continent3_2018 / welt18 * 100;
var euzueu = (continent3_2018 / continent3_2008 - 1) * 100;
var euzueuco = continent3_2018 - continent3_2008;
/* Nord Amerika Rechnung */
var nazuwelt = continent4_2018 / welt18 * 100;
var nazuna = (continent4_2018 / continent4_2008 - 1) * 100;
var nazunaco = continent4_2018 - continent4_2008;
/* Asien Rechnung */
var aszuwelt = continent5_2018 / welt18 * 100;
var aszuas = (continent5_2018 / continent5_2008 - 1) * 100;
var aszuasco = continent5_2018 - continent5_2008;
/* Australien Rechnung */
var auszuwelt = continent6_2018 / welt18 * 100;
var auszuaus = (continent6_2018 / continent6_2008 - 1) * 100;
var auszuausco = continent6_2018 - continent6_2008;
/* ------------------(Consol Equation)------------------ */
/* Consolenoutput */
console.log(absatz0 + welt18.toFixed(0) + anhang1b);
/* Afrika Out */
console.log(absatz1 + continent1 + anhang1a + continent1_2018.toFixed(2) + anhang1b, '\n', absatz2 + continent1 + anhang2a + afzuwelt.toFixed(2) + anhang2b, '\n', absatz3 + continent1 + anhang3a + afzuaf.toFixed(2) + anhang3b, '\n', absatz4 + afzuafco.toFixed(2) + anhang1b);
/* Süd Amerika Out */
console.log(absatz1 + continent2 + anhang1a + continent2_2018.toFixed(2) + anhang1b, '\n', absatz2 + continent2 + anhang2a + sazuwelt.toFixed(2) + anhang2b, '\n', absatz3 + continent2 + anhang3a + sazusa.toFixed(2) + anhang3b, '\n', absatz4 + sazusaco.toFixed(2) + anhang1b);
/* Europa Out */
console.log(absatz1 + continent3 + anhang1a + continent3_2018.toFixed(2) + anhang1b, '\n', absatz2 + continent3 + anhang2a + euzuwelt.toFixed(2) + anhang2b, '\n', absatz3 + continent3 + anhang3a + euzueu.toFixed(2) + anhang3b, '\n', absatz4 + euzueuco.toFixed(2) + anhang1b);
/* Nord Amerika Out */
console.log(absatz1 + continent4 + anhang1a + continent4_2008.toFixed(2) + anhang1b, '\n', absatz2 + continent4 + anhang2a + nazuwelt.toFixed(2) + anhang2b, '\n', absatz3 + continent4 + anhang3a + nazuna.toFixed(2) + anhang3b, '\n', absatz4 + nazunaco.toFixed(2) + anhang1b);
/* Asien Out */
console.log(absatz1 + continent5 + anhang1a + continent5_2018.toFixed(2) + anhang1b, '\n', absatz2 + continent5 + anhang2a + aszuwelt.toFixed(2) + anhang2b, '\n', absatz3 + continent5 + anhang3a + aszuas.toFixed(2) + anhang3b, '\n', absatz4 + aszuasco.toFixed(2) + anhang1b);
/* Australien Out */
console.log(absatz1 + continent6 + anhang1a + continent6_2018.toFixed(2) + anhang1b, '\n', absatz2 + continent6 + anhang2a + auszuwelt.toFixed(2) + anhang2b, '\n', absatz3 + continent6 + anhang3a + auszuaus.toFixed(2) + anhang3b, '\n', absatz4 + auszuausco.toFixed(2) + anhang1b);
/* DOM-Manipulation */
/* Europa */
function functioneu() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("h2").innerHTML = "4209.3";
}
document.querySelector(".europa").addEventListener('click', functioneu);
/* Nordamerika */
function functionna() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("h2").innerHTML = "6035.6";
}
document.querySelector(".northamerica").addEventListener('click', functionna);
/* Südamerika */
function functionsa() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("h2").innerHTML = "1261.5";
}
document.querySelector(".southamerica").addEventListener('click', functionsa);
/* Afrika */
function functionaf() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("h2").innerHTML = "1235.5";
}
document.querySelector(".africa").addEventListener('click', functionaf);
/* Asien */
function functionas() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("h2").innerHTML = "16 274.1";
}
document.querySelector(".asia").addEventListener('click', functionas);
/* Australien */
function functionaus() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("h2").innerHTML = "2100.5";
}
document.querySelector(".australia").addEventListener('click', functionaus);
//# sourceMappingURL=typescript6.js.map