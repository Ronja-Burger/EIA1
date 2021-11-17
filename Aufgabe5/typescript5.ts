/* Absatz Variablen */

var absatz0 : string = " Die Welt Produziert ";
var absatz1 : string = " Die Emission von " ;
var absatz2 : string = "Relativ zur Gesamtemission der Welt verursacht " ;
var absatz3 : string = "Für " ;
var absatz4 : string = "2018 im Vergleich zu 2008 sind das " ;

/* Anhang Variablen */

var anhang1a : string = " ist: " ;
var anhang1b : string = "kg CO²." ;

var anhang2a : string = " damit " ;
var anhang2b : string = "%." ;

var anhang3a : string = " hat sich 2018 im Vergleich zu 2008 die Emission um " ;
var anhang3b : string = "% verändert." ;

/* Länder Text Variablen */

var continent1 : string = "africa";
var continent2 : string = "southamerica";
var continent3 : string = "europe";
var continent4 : string = "northamerica";
var continent5 : string = "asia";
var continent6 : string = "australia";


/* ------------------(Numbers Deklaration)------------------ */


var continent1_2008 : number = 1280;
var continent2_2008 : number = 1132.6;
var continent3_2008 : number = 4956.7;
var continent4_2008 : number = 6600.4;
var continent5_2008 : number = 12954.7;
var continent6_2008 : number = 1993;

var continent1_2018 : number = 1235.5;
var continent2_2018 : number = 1261.5;
var continent3_2018 : number = 4209.3;
var continent4_2018 : number = 6035.6;
var continent5_2018 : number = 16274.1;
var continent6_2018 : number = 2100.5;


/* Welt Gesamt Rechnung */

var welt18 : number = continent1_2018+continent2_2018+continent3_2018+continent4_2018+continent5_2018+continent6_2018;

/* Afrika Rechnung */

var afzuwelt : number = continent1_2018/welt18*100;
var afzuaf : number = (continent1_2018/continent1_2008-1)*100;
var afzuafco: number = continent1_2018-continent1_2008;

/* Süd Amerika Rechnung */

var sazuwelt : number = continent2_2018/welt18*100;
var sazusa : number = (continent2_2018/continent2_2008-1)*100;
var sazusaco: number = continent2_2018-continent2_2008;

/* Europa Rechnung */

var euzuwelt : number = continent3_2018/welt18*100;
var euzueu : number = (continent3_2018/continent3_2008-1)*100;
var euzueuco: number = continent3_2018-continent3_2008;

/* Nord Amerika Rechnung */

var nazuwelt : number = continent4_2018/welt18*100;
var nazuna : number = (continent4_2018/continent4_2008-1)*100;
var nazunaco: number = continent4_2018-continent4_2008;

/* Asien Rechnung */

var aszuwelt : number = continent5_2018/welt18*100;
var aszuas : number = (continent5_2018/continent5_2008-1)*100;
var aszuasco: number = continent5_2018-continent5_2008;

/* Australien Rechnung */

var auszuwelt : number = continent6_2018/welt18*100;
var auszuaus : number = (continent6_2018/continent6_2008-1)*100;
var auszuausco: number = continent6_2018-continent6_2008;


/* ------------------(Consol Equation)------------------ */


/* Consolenoutput */

console.log(
absatz0 + welt18.toFixed(0) + anhang1b
);

/* Afrika Out */

console.log(
    absatz1 + continent1 + anhang1a + continent1_2018.toFixed(2) + anhang1b ,'\n',
    absatz2 + continent1 + anhang2a + afzuwelt.toFixed(2) + anhang2b ,'\n',
    absatz3 + continent1 + anhang3a + afzuaf.toFixed(2) + anhang3b ,'\n',
    absatz4 + afzuafco.toFixed(2) + anhang1b
    );

/* Süd Amerika Out */

console.log(
    absatz1 + continent2 + anhang1a + continent2_2018.toFixed(2) + anhang1b ,'\n',
    absatz2 + continent2 + anhang2a + sazuwelt.toFixed(2) + anhang2b ,'\n',
    absatz3 + continent2 + anhang3a + sazusa.toFixed(2) + anhang3b ,'\n',
    absatz4 + sazusaco.toFixed(2) + anhang1b
    );
    
    
/* Europa Out */

console.log(
absatz1 + continent3 + anhang1a + continent3_2018.toFixed(2) + anhang1b ,'\n',
absatz2 + continent3 + anhang2a + euzuwelt.toFixed(2) + anhang2b ,'\n',
absatz3 + continent3 + anhang3a + euzueu.toFixed(2) + anhang3b ,'\n',
absatz4 + euzueuco.toFixed(2) + anhang1b
);

/* Nord Amerika Out */

console.log(
    absatz1 + continent4 + anhang1a + continent4_2008.toFixed(2) + anhang1b ,'\n',
    absatz2 + continent4 + anhang2a + nazuwelt.toFixed(2) + anhang2b ,'\n',
    absatz3 + continent4 + anhang3a + nazuna.toFixed(2) + anhang3b ,'\n',
    absatz4 + nazunaco.toFixed(2) + anhang1b
    );
    
/* Asien Out */

console.log(
absatz1 + continent5 + anhang1a + continent5_2018.toFixed(2) + anhang1b ,'\n',
absatz2 + continent5 + anhang2a + aszuwelt.toFixed(2) + anhang2b ,'\n',
absatz3 + continent5 + anhang3a + aszuas.toFixed(2) + anhang3b ,'\n',
absatz4 + aszuasco.toFixed(2) + anhang1b
);

/* Australien Out */

console.log(
absatz1 + continent6 + anhang1a + continent6_2018.toFixed(2) + anhang1b ,'\n',
absatz2 + continent6 + anhang2a + auszuwelt.toFixed(2) + anhang2b ,'\n',
absatz3 + continent6 + anhang3a + auszuaus.toFixed(2) + anhang3b ,'\n',
absatz4 + auszuausco.toFixed(2) + anhang1b
);