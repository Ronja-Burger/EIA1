var continent1 : string = "africa";
var continent2 : string = "southamerica";
var continent3 : string = "europe";
var continent4 : string = "northamerica";
var continent5 : string = "asia";
var continent6 : string = "australia";

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

var totalcontinent_2018 : number = Math.round (continent1_2018 + continent2_2018 + continent3_2018 + continent4_2018 + continent5_2018 + continent6_2018)

var totalcontinentafrica : number = Math.round ((continent1_2018 *100 / continent1_2018) *100) /100
var totalcontinentsouthamerica : number = Math.round ((continent2_2018 *100 / continent2_2018) *100) /100
var totalcontinenteurope : number = Math.round ((continent3_2018 *100 / continent3_2018) *100) /100
var totalcontinentnorthamerica : number = Math.round ((continent4_2018 *100 / continent4_2018) *100) /100
var totalcontinentasia : number = Math.round ((continent5_2018 *100 / continent5_2018) *100) /100
var totalcontinentaustralia : number = Math.round ((continent6_2018 *100 / continent6_2018) *100) /100

console.log('africa'); console.log('africa' + continent1_2018);