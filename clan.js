/* Yebotnya clan script */
var clan = ["2109", "DianaMyr2001", "Tenzue",
"juisy", "yebotnyar1", "PikabuWarrior", "Wheetlan",
"Thanksdude", "EdwardSurovij", "GodSavePutin", "Croaton",
"vitjuxa", "Grifon903", "truffleston", "Arkenion",
"mdankas", "Hijacker47", "Piterskuy", "biggy",
"rastaplayer", "SeregaNeo", "maks1699", "Fion",
"marelobs", "nayafko", "KoT1210", "derakl",
"CrazyMip", "gross143", "McSandi", "Clercqer",
"Hronus", "Halstead", "Orodrett", "Ragotak",
"Sokrushitel", "Qreemer", "BUXOI", "iamtom47",
"Nasri", "biggy", "indostyle", "stvoloch",
"RADE", "havyfall", "blindcobra", "KostWeed",
"indostyle", "Denzel1507", "Padawan"]; // и т.д.

if(location.href.indexOf("pikabu.ru") > -1 && window.disallowYebotnya === undefined){
	for(var i = 0, l = clan.length; i < l; i++)
		$('a:contains("' + clan[i] + '")').siblings('.com_up').each(function(){this.click();})
}
