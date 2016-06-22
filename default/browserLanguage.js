console.log(navigator);
var language;
if (navigator.appName == 'Netscape'){
	language = navigator.language;
}else{
	language = navigator.browserLanguage;
}
console.log(language);