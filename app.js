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

let h1Header = document.createElement('h1');
h1Header.setAttribute('id', 'h1')
h1Header.innerText = 'Countries Search'
appRoot.append(h1Header);

let form = document.createElement('form');
form.setAttribute('id', 'form')
form.setAttribute('name', 'form')

let divtypeOfSearch = document.createElement('div')
divtypeOfSearch.setAttribute('id', 'typeofsearchfield')

let firstFieldLabel = document.createElement('label');
firstFieldLabel.innerText = 'Please choose the type of search:'

let divRadios = document.createElement('div')

let firstRadiodInput1 = document.createElement('input');
firstRadiodInput1.setAttribute('type', 'radio')
firstRadiodInput1.setAttribute('id', 'region1')
firstRadiodInput1.setAttribute('name', 'type')
firstRadiodInput1.setAttribute('value', 'region')
let firstRadiodLabel1 = document.createElement('label');
firstRadiodLabel1.setAttribute('for', 'region1')
firstRadiodLabel1.innerText = 'By Region'

let lineBreak = document.createElement('br')

let firstRadiodInput2 = document.createElement('input');
firstRadiodInput2.setAttribute('type', 'radio')
firstRadiodInput2.setAttribute('id', 'region2')
firstRadiodInput2.setAttribute('name', 'type')
firstRadiodInput2.setAttribute('value', 'language')
let firstRadiodLabel2 = document.createElement('label');
firstRadiodLabel2.setAttribute('for', 'region2')
firstRadiodLabel2.innerText = 'By Language'

divRadios.append(firstRadiodInput1,firstRadiodLabel1, lineBreak, firstRadiodInput2, firstRadiodLabel2);
divtypeOfSearch.append(firstFieldLabel, divRadios)

let divSearchQuery = document.createElement('div')

let SearchQuerydLabel = document.createElement('label');
SearchQuerydLabel.innerText = 'Please choose search query:'

let selectSearchQuery = document.createElement('select')
selectSearchQuery.setAttribute('disabled', 'true')
selectSearchQuery.setAttribute('id', 'select')

let selectOption = document.createElement('option')
selectOption.innerText = 'Select value'
selectOption.setAttribute('selected', 'true')

selectSearchQuery.append(selectOption)

divSearchQuery.append(SearchQuerydLabel, selectSearchQuery)

form.append(divtypeOfSearch, divSearchQuery)

let pText = document.createElement('p')
pText.innerText = 'No items, please choose search query'

//   creating table to then move it to eventListener
let table = document.createElement('table')

let staticHeading = document.createElement('thead')

let headgingRow = document.createElement('tr')

let CountryNameColumn = document.createElement('th')
let textInsideTH1 = document.createElement('span')
textInsideTH1.innerText = 'Country Name '
textInsideTH1.setAttribute('id', 'country-name')
textInsideTH1.setAttribute('class', 'column')
let i1 = document.createElement('i');
i1.setAttribute('class', 'toggle')

textInsideTH1.append(i1)

CountryNameColumn.append(textInsideTH1)

let CapitalColumn = document.createElement('th')
let textInsideTH2 = document.createElement('span')
textInsideTH2.innerText = 'Capital '
textInsideTH2.setAttribute('id', 'capital')
textInsideTH2.setAttribute('class', 'column')
let i2 = document.createElement('i');
i2.setAttribute('class', 'toggle')

textInsideTH2.append(i2)

CapitalColumn.append(textInsideTH2)

let WorldRegionColumn = document.createElement('th')
let textInsideTH3 = document.createElement('span')
textInsideTH3.innerText = 'World Region '
textInsideTH3.setAttribute('id', 'world-region')
textInsideTH3.setAttribute('class', 'column')
let i3 = document.createElement('i');
i3.setAttribute('class', 'toggle')

textInsideTH3.append(i3)

WorldRegionColumn.append(textInsideTH3)

let LanguagesColumn = document.createElement('th')
let textInsideTH4 = document.createElement('span')
textInsideTH4.innerText = 'Languages '
textInsideTH4.setAttribute('id', 'languages')
textInsideTH4.setAttribute('class', 'column')
let i4 = document.createElement('i');
i4.setAttribute('class', 'toggle')

textInsideTH4.append(i4)

LanguagesColumn.append(textInsideTH4)

let AreaColumn = document.createElement('th')
let textInsideTH5 = document.createElement('span')
textInsideTH5.innerText = 'Area '
textInsideTH5.setAttribute('id', 'area')
textInsideTH5.setAttribute('class', 'column')
let i5 = document.createElement('i');
i5.setAttribute('class', 'toggle')

textInsideTH5.append(i5)

AreaColumn.append(textInsideTH5)

let Flag = document.createElement('th')
let textInsideTH6 = document.createElement('span')
textInsideTH6.innerText = 'Flag '
textInsideTH6.setAttribute('id', 'flag')
textInsideTH6.setAttribute('class', 'column')
let i6 = document.createElement('i');
i6.setAttribute('class', 'toggle')

textInsideTH6.append(i6)

Flag.append(textInsideTH6)

headgingRow.append(CountryNameColumn, CapitalColumn, WorldRegionColumn, LanguagesColumn, AreaColumn, Flag)

staticHeading.append(headgingRow)

let tableBody = document.createElement('tbody')
tableBody.setAttribute('id', 'mytable')

table.append(staticHeading, tableBody)


appRoot.append(h1Header, form, table);
// appRoot.append(h1Header, form);


const radios = document.querySelectorAll('input')
for (const radio of radios) {
  radio.onclick = (e) => {
    radio.onclick.checked = true;
    if(document.getElementById('region1').checked === true){
        appRoot.append(pText)
        selectSearchQuery.removeAttribute('disabled')
        if(selectSearchQuery.length > 0){
            selectSearchQuery.length = 1;
        }
        for (let i = 0; i < externalService.getRegionsList().length; i++){
            let selectOption = document.createElement('option')
            selectOption.setAttribute('value', `${externalService.getRegionsList()[i]}`)
            selectOption.innerText = externalService.getRegionsList()[i];
            selectSearchQuery.append(selectOption);
        }
    } else if (document.getElementById('region2').checked === true){
        appRoot.append(pText)
        selectSearchQuery.removeAttribute('disabled')
        if(selectSearchQuery.length > 0){
            selectSearchQuery.length = 1;
        }
        for (let i = 0; i < externalService.getLanguagesList().length; i++){
            let selectOption = document.createElement('option')
            selectOption.setAttribute('value', `${externalService.getLanguagesList()[i]}`)
            selectOption.innerText = externalService.getLanguagesList()[i];
            selectSearchQuery.append(selectOption);
        }
    }
  }
}
document.getElementById('select').addEventListener('change', function() {
    if(this.value === 'Select value'){
        appRoot.append(pText)
    }else {
        appRoot.removeChild(pText)

    }
    
    console.log('You selected: ', typeof this.value);
  });





console.log(externalService.getRegionsList());
console.log(externalService.getLanguagesList());
console.log(externalService.getCountryListByLanguage('Europe'));
console.log(externalService.getCountryListByRegion('Europe'));