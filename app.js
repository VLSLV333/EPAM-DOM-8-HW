const appRoot = document.getElementById('app-root');

/*
write your code here

list of all regions
externalService.getRegionsList();
list of all languages
externalService.getLanguagesList();
get countries list by language
externalService.getCountryListByLanguage()
get countries list by region
externalService.getCountryListByRegion()
*/

console.log(externalService.getRegionsList());
console.log(externalService.getLanguagesList());
console.log(externalService.getCountryListByLanguage('Arabic'));
console.log(externalService.getCountryListByRegion('Europe'));