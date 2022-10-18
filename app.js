const appRoot = document.getElementById('app-root');

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

appRoot.append(h1Header, form);

const radios = document.querySelectorAll('input')

for (const radio of radios) {
  radio.onclick = (e) => {
    radio.onclick.checked = true;
    if(document.getElementById('region1').checked === true){
        appRoot.append(pText)
        let tableVlad = document.getElementById('tableMy');
        if (tableVlad){
            tableVlad.remove()
        }
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
        let tableVlad = document.getElementById('tableMy');
        if (tableVlad){
            tableVlad.remove()
        }
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

document.getElementById('select').addEventListener('change', function () {

if (pText){
    pText.remove()
}

if (appRoot.childNodes.length == 2){

    let tableData;
    if (document.getElementById('region1').checked === true){
        tableData = externalService.getCountryListByRegion(this.value);
    } else if (document.getElementById('region2').checked === true){
        tableData = externalService.getCountryListByLanguage(this.value);
    }

let tableMy = document.createElement('table')
tableMy.setAttribute('id', 'tableMy')

let staticHeading = document.createElement('thead')
staticHeading.setAttribute('id', 'head')

let headgingRow = document.createElement('tr')

let nameColumn = document.createElement('th')
let textInsideTH1 = document.createElement('span')
textInsideTH1.innerText = 'Country name '
textInsideTH1.setAttribute('id', 'name')
textInsideTH1.setAttribute('class', `table-column`)
let i1 = document.createElement('i');
i1.setAttribute('class', 'caret')

textInsideTH1.append(i1)

nameColumn.append(textInsideTH1)

let quantityColumn = document.createElement('th')
let textInsideTH2 = document.createElement('span')
textInsideTH2.innerText = 'Capital '
textInsideTH2.setAttribute('id', 'quantity')
textInsideTH2.setAttribute('class', `table-column`)
let i2 = document.createElement('i');

textInsideTH2.append(i2)

quantityColumn.append(textInsideTH2)

let priceColumn = document.createElement('th')
let textInsideTH3 = document.createElement('span')
textInsideTH3.innerText = 'World region '
textInsideTH3.setAttribute('id', 'price')
textInsideTH3.setAttribute('class', `table-column`)
let i3 = document.createElement('i');

textInsideTH3.append(i3)

priceColumn.append(textInsideTH3)

let expiryColumn = document.createElement('th')
let textInsideTH4 = document.createElement('span')
textInsideTH4.innerText = 'Languages '
textInsideTH4.setAttribute('id', 'expiry')
textInsideTH4.setAttribute('class', `table-column`)
let i4 = document.createElement('i');

textInsideTH4.append(i4)

expiryColumn.append(textInsideTH4)

let AreaColumn = document.createElement('th')
let textInsideTH5 = document.createElement('span')
textInsideTH5.innerText = 'Area '
textInsideTH5.setAttribute('id', 'area')
textInsideTH5.setAttribute('class', `table-column`)
let i5 = document.createElement('i');
i5.setAttribute('class', 'caret')

textInsideTH5.append(i5)

AreaColumn.append(textInsideTH5)

let Flag = document.createElement('th')
let textInsideTH6 = document.createElement('span')
textInsideTH6.innerText = 'Flag '
textInsideTH6.setAttribute('id', 'flag')
textInsideTH6.setAttribute('class', `table-column`)
let i6 = document.createElement('i');

textInsideTH6.append(i6)

Flag.append(textInsideTH6)

headgingRow.append(nameColumn, quantityColumn, priceColumn, expiryColumn, AreaColumn, Flag)
staticHeading.append(headgingRow)

let tableBody = document.createElement('tbody')
tableBody.setAttribute('id', 'mytable')

tableMy.append(staticHeading, tableBody)

appRoot.append(tableMy);

let table = document.getElementById('mytable');

    let tableColumns = document.getElementsByClassName(`table-column`);
    let caretUpClassName = 'headerSortUp';
    let caretDownClassName = 'headerSortDown';

    const sort_by = (field, reverse) => {
    
        const key = 
        function(x) {
            return x[field];
        };

        reverse = !reverse ? 1 : -1;
        
        return function(a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        };
    };

    function clearArrow() {
        let carets = document.getElementsByClassName('caret');
        for (let caret of carets) {
            caret.className = `caret`;
        }
    }
    function toggleArrow(event) {

        let element = event.target;
        let caret, field, reverse;

        if (element.tagName === 'SPAN') {
            caret = element.getElementsByClassName(`caret`)[0];
            field = element.id
        }
        else {
            caret = element;
            field = element.parentElement.id
        }
        let iconClassName = caret.className;
        clearArrow();
        if (iconClassName.includes(caretUpClassName)) {
            caret.className = `caret ${caretDownClassName}`;
            reverse = false;
        } else {
            reverse = true;
            caret.className = `caret ${caretUpClassName}`;
        }
        tableData.sort(sort_by(field, reverse));
        populateTable();
    }
    
    function populateTable() {

        table.innerHTML = '';

        for (let data of tableData) {
            let row = table.insertRow(-1);
            row.setAttribute('class', 'grey')
            let name = row.insertCell(0);
            name.innerHTML = data.name;
    
            let quantity = row.insertCell(1);
            quantity.innerHTML = data.capital;
    
            let price = row.insertCell(2);
            price.innerHTML = data.region;
    
            let expiry = row.insertCell(3);
            let expiryArray = []
            for (key in data.languages){
                expiryArray.push(data.languages[key]);
            }
            expiry.innerHTML = expiryArray.join(', ')
    
            let area = row.insertCell(4);
            area.innerHTML = data.area;
    
            let flag = row.insertCell(5);
            flag.innerHTML = 'Flag here';
        }
        let tableRows = document.getElementsByClassName(`grey`)

    for (let row of tableRows) {
        row.addEventListener('mouseover', () =>{
            row.setAttribute('style', 'background-color: rgb(100, 100, 100)')
        });
    }

    for (let row of tableRows) {
         row.addEventListener('mouseout', () =>{
            row.setAttribute('style', '')
        });
    }
}
    populateTable();
    
    function v (event){
        toggleArrow(event);
    }

    for (let column of tableColumns) {
    column.addEventListener('click', v);
    }

} else {

if (pText){
    pText.remove()
}
    
let tableVlad = document.getElementById('tableMy');
tableVlad.remove()

let tableData;
if (document.getElementById('region1').checked === true){
    tableData = externalService.getCountryListByRegion(this.value);
} else if (document.getElementById('region2').checked === true){
    tableData = externalService.getCountryListByLanguage(this.value);
}

let tableMy = document.createElement('table')
tableMy.setAttribute('id', 'tableMy')

let staticHeading = document.createElement('thead')
staticHeading.setAttribute('id', 'head')

let headgingRow = document.createElement('tr')

let nameColumn = document.createElement('th')
let textInsideTH1 = document.createElement('span')
textInsideTH1.innerText = 'Country name '
textInsideTH1.setAttribute('id', 'name')
textInsideTH1.setAttribute('class', `table-column`)
let i1 = document.createElement('i');
i1.setAttribute('class', 'caret')

textInsideTH1.append(i1)

nameColumn.append(textInsideTH1)

let quantityColumn = document.createElement('th')
let textInsideTH2 = document.createElement('span')
textInsideTH2.innerText = 'Capital '
textInsideTH2.setAttribute('id', 'quantity')
textInsideTH2.setAttribute('class', `table-column`)
let i2 = document.createElement('i');

textInsideTH2.append(i2)

quantityColumn.append(textInsideTH2)

let priceColumn = document.createElement('th')
let textInsideTH3 = document.createElement('span')
textInsideTH3.innerText = 'World region '
textInsideTH3.setAttribute('id', 'price')
textInsideTH3.setAttribute('class', `table-column`)
let i3 = document.createElement('i');

textInsideTH3.append(i3)

priceColumn.append(textInsideTH3)

let expiryColumn = document.createElement('th')
let textInsideTH4 = document.createElement('span')
textInsideTH4.innerText = 'Languages '
textInsideTH4.setAttribute('id', 'expiry')
textInsideTH4.setAttribute('class', `table-column`)
let i4 = document.createElement('i');

textInsideTH4.append(i4)

expiryColumn.append(textInsideTH4)

let AreaColumn = document.createElement('th')
let textInsideTH5 = document.createElement('span')
textInsideTH5.innerText = 'Area '
textInsideTH5.setAttribute('id', 'area')
textInsideTH5.setAttribute('class', `table-column`)
let i5 = document.createElement('i');
i5.setAttribute('class', 'caret')

textInsideTH5.append(i5)

AreaColumn.append(textInsideTH5)

let Flag = document.createElement('th')
let textInsideTH6 = document.createElement('span')
textInsideTH6.innerText = 'Flag '
textInsideTH6.setAttribute('id', 'flag')
textInsideTH6.setAttribute('class', `table-column`)
let i6 = document.createElement('i');

textInsideTH6.append(i6)

Flag.append(textInsideTH6)

headgingRow.append(nameColumn, quantityColumn, priceColumn, expiryColumn, AreaColumn, Flag)

staticHeading.append(headgingRow)

let tableBody = document.createElement('tbody')
tableBody.setAttribute('id', 'mytable')

tableMy.append(staticHeading, tableBody)

appRoot.append(tableMy);

let table = document.getElementById('mytable');


    let tableColumns = document.getElementsByClassName(`table-column`);
    let caretUpClassName = 'headerSortUp';
    let caretDownClassName = 'headerSortDown';

    const sort_by = (field, reverse) => {
    
        const key = 
        function(x) {
            return x[field];
        };
        
        reverse = !reverse ? 1 : -1;
        
        return function(a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        };
    };

    function clearArrow() {
        let carets = document.getElementsByClassName('caret');
        for (let caret of carets) {
            caret.className = `caret`;
        }
    }

    function toggleArrow(event) {
        let element = event.target;
        let caret, field, reverse;
        if (element.tagName === 'SPAN') {
            caret = element.getElementsByClassName(`caret`)[0];
            field = element.id
        }
        else {
            caret = element;
            field = element.parentElement.id
        }
        let iconClassName = caret.className;
        clearArrow();
        if (iconClassName.includes(caretUpClassName)) {
            caret.className = `caret ${caretDownClassName}`;
            reverse = false;
        } else {
            reverse = true;
            caret.className = `caret ${caretUpClassName}`;
        }
        tableData.sort(sort_by(field, reverse));

        populateTable();
    }
    

    function populateTable() {

        table.innerHTML = '';

        for (let data of tableData) {
            let row = table.insertRow(-1);
            row.setAttribute('class', 'grey')
            let name = row.insertCell(0);
            name.innerHTML = data.name;
    
            let quantity = row.insertCell(1);
            quantity.innerHTML = data.capital;
    
            let price = row.insertCell(2);
            price.innerHTML = data.region;
    
            let expiry = row.insertCell(3);
            let expiryArray = []
            for (key in data.languages){
                expiryArray.push(data.languages[key]);
            }
            expiry.innerHTML = expiryArray.join(', ')
    
            let area = row.insertCell(4);
            area.innerHTML = data.area;
    
            let flag = row.insertCell(5);
            flag.innerHTML = 'Flag here';
        }

        let tableRows = document.getElementsByClassName(`grey`)

        for (let row of tableRows) {
            row.addEventListener('mouseover', () =>{
                row.setAttribute('style', 'background-color: rgb(100, 100, 100)')
            });
        }
    
        for (let row of tableRows) {
             row.addEventListener('mouseout', () =>{
                row.setAttribute('style', '')
            });
        }
    }

    populateTable();
    
    function v (event){
        toggleArrow(event);
    }

    for (let column of tableColumns) {
    column.addEventListener('click', v);
    }
}
});
