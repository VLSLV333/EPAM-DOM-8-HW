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
// let table = document.createElement('table')

// let staticHeading = document.createElement('thead')

// let headgingRow = document.createElement('tr')

// let CountryNameColumn = document.createElement('th')
// let textInsideTH1 = document.createElement('span')
// textInsideTH1.innerText = 'Country Name '
// // textInsideTH1.setAttribute('id', 'country-name')
// textInsideTH1.setAttribute('id', 'name')
// textInsideTH1.setAttribute('class', 'column')
// let i1 = document.createElement('i');
// i1.setAttribute('class', 'toggle')

// textInsideTH1.append(i1)

// CountryNameColumn.append(textInsideTH1)

// let CapitalColumn = document.createElement('th')
// let textInsideTH2 = document.createElement('span')
// textInsideTH2.innerText = 'Capital '
// textInsideTH2.setAttribute('id', 'capital')
// textInsideTH2.setAttribute('class', 'column')
// let i2 = document.createElement('i');
// i2.setAttribute('class', 'toggle')

// textInsideTH2.append(i2)

// CapitalColumn.append(textInsideTH2)

// let WorldRegionColumn = document.createElement('th')
// let textInsideTH3 = document.createElement('span')
// textInsideTH3.innerText = 'World Region '
// textInsideTH3.setAttribute('id', 'world-region')
// textInsideTH3.setAttribute('class', 'column')
// let i3 = document.createElement('i');
// i3.setAttribute('class', 'toggle')

// textInsideTH3.append(i3)

// WorldRegionColumn.append(textInsideTH3)

// let LanguagesColumn = document.createElement('th')
// let textInsideTH4 = document.createElement('span')
// textInsideTH4.innerText = 'Languages '
// textInsideTH4.setAttribute('id', 'languages')
// textInsideTH4.setAttribute('class', 'column')
// let i4 = document.createElement('i');
// i4.setAttribute('class', 'toggle')

// textInsideTH4.append(i4)

// LanguagesColumn.append(textInsideTH4)

// let AreaColumn = document.createElement('th')
// let textInsideTH5 = document.createElement('span')
// textInsideTH5.innerText = 'Area '
// textInsideTH5.setAttribute('id', 'area')
// textInsideTH5.setAttribute('class', 'column')
// let i5 = document.createElement('i');
// i5.setAttribute('class', 'toggle')

// textInsideTH5.append(i5)

// AreaColumn.append(textInsideTH5)

// let Flag = document.createElement('th')
// let textInsideTH6 = document.createElement('span')
// textInsideTH6.innerText = 'Flag '
// textInsideTH6.setAttribute('id', 'flag')
// textInsideTH6.setAttribute('class', 'column')
// let i6 = document.createElement('i');
// i6.setAttribute('class', 'toggle')

// textInsideTH6.append(i6)

// Flag.append(textInsideTH6)

// headgingRow.append(CountryNameColumn, CapitalColumn, WorldRegionColumn, LanguagesColumn, AreaColumn, Flag)

// staticHeading.append(headgingRow)

// let tableBody = document.createElement('tbody')
// tableBody.setAttribute('id', 'mytable')

// table.append(staticHeading, tableBody)

// //   тестова частина, вставляю сьорч для таблиці
// let searchInput = document.createElement('input')
// searchInput.setAttribute('type','text')
// searchInput.setAttribute('id','myinput')
// searchInput.setAttribute('placeholder','Search...')
// searchInput.setAttribute('title','Type in something')


appRoot.append(h1Header, form);
// appRoot.append(h1Header, form, searchInput, table);
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

// let tableColumns = document.getElementsByClassName('column');
//     for (let column of tableColumns) {
//         // if (true){
//         //     console.log('1');
//         // }
//         column.addEventListener('click', function(event) {
//             console.log('2');
//             toggleArrow(event);
//         });
//     }

let table = document.createElement('table')

    let staticHeading = document.createElement('thead')
    staticHeading.setAttribute('id', 'head')

    let headgingRow = document.createElement('tr')

    let CountryNameColumn = document.createElement('th')
    let textInsideTH1 = document.createElement('span')
    textInsideTH1.innerText = 'Country Name '
    // textInsideTH1.setAttribute('id', 'country-name')
    textInsideTH1.setAttribute('id', 'name')
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

    let searchInput = document.createElement('input')
    searchInput.setAttribute('type','text')
    searchInput.setAttribute('id','myinput')
    searchInput.setAttribute('placeholder','Search...')
    searchInput.setAttribute('title','Type in something')

    appRoot.append(searchInput, table);

document.getElementById('select').addEventListener('change', function() {
    if(this.value === 'Select value'){
        appRoot.append(pText)
    }else {
        // appRoot.removeChild(pText)

    // if (appRoot.childNodes.length < 4){
    //     let table = document.createElement('table')

    // let staticHeading = document.createElement('thead')
    // staticHeading.setAttribute('id', 'head')

    // let headgingRow = document.createElement('tr')

    // let CountryNameColumn = document.createElement('th')
    // let textInsideTH1 = document.createElement('span')
    // textInsideTH1.innerText = 'Country Name '
    // // textInsideTH1.setAttribute('id', 'country-name')
    // textInsideTH1.setAttribute('id', 'name')
    // textInsideTH1.setAttribute('class', 'column')
    // let i1 = document.createElement('i');
    // i1.setAttribute('class', 'toggle')

    // textInsideTH1.append(i1)

    // CountryNameColumn.append(textInsideTH1)

    // let CapitalColumn = document.createElement('th')
    // let textInsideTH2 = document.createElement('span')
    // textInsideTH2.innerText = 'Capital '
    // textInsideTH2.setAttribute('id', 'capital')
    // textInsideTH2.setAttribute('class', 'column')
    // let i2 = document.createElement('i');
    // i2.setAttribute('class', 'toggle')

    // textInsideTH2.append(i2)

    // CapitalColumn.append(textInsideTH2)

    // let WorldRegionColumn = document.createElement('th')
    // let textInsideTH3 = document.createElement('span')
    // textInsideTH3.innerText = 'World Region '
    // textInsideTH3.setAttribute('id', 'world-region')
    // textInsideTH3.setAttribute('class', 'column')
    // let i3 = document.createElement('i');
    // i3.setAttribute('class', 'toggle')

    // textInsideTH3.append(i3)

    // WorldRegionColumn.append(textInsideTH3)

    // let LanguagesColumn = document.createElement('th')
    // let textInsideTH4 = document.createElement('span')
    // textInsideTH4.innerText = 'Languages '
    // textInsideTH4.setAttribute('id', 'languages')
    // textInsideTH4.setAttribute('class', 'column')
    // let i4 = document.createElement('i');
    // i4.setAttribute('class', 'toggle')

    // textInsideTH4.append(i4)

    // LanguagesColumn.append(textInsideTH4)

    // let AreaColumn = document.createElement('th')
    // let textInsideTH5 = document.createElement('span')
    // textInsideTH5.innerText = 'Area '
    // textInsideTH5.setAttribute('id', 'area')
    // textInsideTH5.setAttribute('class', 'column')
    // let i5 = document.createElement('i');
    // i5.setAttribute('class', 'toggle')

    // textInsideTH5.append(i5)

    // AreaColumn.append(textInsideTH5)

    // let Flag = document.createElement('th')
    // let textInsideTH6 = document.createElement('span')
    // textInsideTH6.innerText = 'Flag '
    // textInsideTH6.setAttribute('id', 'flag')
    // textInsideTH6.setAttribute('class', 'column')
    // let i6 = document.createElement('i');
    // i6.setAttribute('class', 'toggle')

    // textInsideTH6.append(i6)

    // Flag.append(textInsideTH6)

    // headgingRow.append(CountryNameColumn, CapitalColumn, WorldRegionColumn, LanguagesColumn, AreaColumn, Flag)

    // staticHeading.append(headgingRow)

    // let tableBody = document.createElement('tbody')
    // tableBody.setAttribute('id', 'mytable')

    // table.append(staticHeading, tableBody)

    // let searchInput = document.createElement('input')
    // searchInput.setAttribute('type','text')
    // searchInput.setAttribute('id','myinput')
    // searchInput.setAttribute('placeholder','Search...')
    // searchInput.setAttribute('title','Type in something')

    // appRoot.append(searchInput, table);

    // }
    

        let testInput = document.getElementById('myinput');
        let dynamicTable = document.getElementById('mytable')
        let dynamicHead = document.getElementById('head')
        let tableData = externalService.getCountryListByRegion(this.value);
        // tableData = 
        
        

        // console.log(tableData);
        // console.log(dynamicTable);
        // console.log(dynamicHead);

        let toggleUpClassName = 'toggle toggle-caret-up';
        let toggleDownClassName = 'toggle toggle-caret-down';

        const sort_by = (field, reverse, primer) => {
            // console.log(field);
            const key = primer ?
            function(x) {
                // console.log('vlad');
                // console.log(primer(x[field]));
                return primer(x[field]);
            } :
            function(x) {
                // console.log('julia');
                // console.log(x[field]);
                // console.log(x[field])
                return x[field];
            };
            
            

            reverse = !reverse ? 1 : -1;
            
            // console.log(reverse);

            // відремонтував сортування, змінивши айді колонки (кантрі нейм так, щоб воно повністю відповідало ключу з об*єкта)
            return function(a, b) {
                return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
            };
        };

        function clearArrow() {
            let toggles = document.getElementsByClassName('toggle');
            // console.log(toggles);
            for (let toggle of toggles) {
                toggle.className = "toggle";
            }
        }

        function toggleArrow(event) {
                let element = event.target;
                // console.log(element);
                let toggle, field, reverse;
                if (element.tagName === 'SPAN') {
                    toggle = element.getElementsByClassName('toggle')[0];
                    // console.log(toggle);
                    field = element.id
                }
                else {
                    toggle = element;
                    // console.log(toggle);
                    field = element.parentElement.id
                }
        
                let iconClassName = toggle.className;
                // console.log(iconClassName);
                clearArrow();
                if (iconClassName.includes(toggleUpClassName)) {
                    toggle.className = `caret ${toggleDownClassName}`;
                    reverse = false;
                } else {
                    reverse = true;
                    toggle.className = `caret ${toggleUpClassName}`;
                }
        
                tableData.sort(sort_by(field, reverse));
                populateTable();
        }
        
        

        // ця функція викликає 4 ряди в прикладі, мені потрібно її змінити, щоб вона викликала 6 моїх

        function populateTable() {
            
        
            // змінити цю частину, щоб заголовки теж стирались і заново писались? чи щось такого
        
            // потрібно якось звертатись до вже наявних заголовків

            dynamicTable.innerHTML = '';
            
            for (let data of tableData) {
                let row = dynamicTable.insertRow(0);

                let countryName = row.insertCell(0);
                countryName.innerHTML = data.name;
    
                let capital = row.insertCell(1);
                capital.innerHTML = data.capital;
    
                let worldRegion = row.insertCell(2);
                worldRegion.innerHTML = data.region;
    
                let languages = row.insertCell(3);
                languages.innerHTML = data.languages;

                let area = row.insertCell(4);
                area.innerHTML = data.area;

                let flag = row.insertCell(5);

                flag.innerText = 'Vlad';
            }
            filterTable();
        }

        function filterTable() {
            let filter = testInput.value.toUpperCase();
            // console.log(dynamicTable.getElementsByTagName("TR"));
            rows = dynamicTable.getElementsByTagName("tr");
            // console.log(rows);
            let flag = false;
    
            for (let row of rows) {
                // console.log(row);
                let cells = row.getElementsByTagName("TD");
                for (let cell of cells) {
                if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
                    flag = true;
                    break;
                }
                }
    

                //   причина по якій зникає тейбл хедінг
                if (flag) {
                row.style.display = "";
                } else {
                row.style.display = "none";
                }
    
                flag = false;
            }
        }

        populateTable();

        let tableColumns = document.getElementsByClassName('column');
    for (let column of tableColumns) {
        // if (true){
        //     console.log('1');
        // }
        column.addEventListener('click', function(event) {
            console.log(tableData);
        console.log(dynamicTable);
        console.log(dynamicHead);
            // console.log('2');
            toggleArrow(event);
        });
    }


        // tableColumns.onclick = function () { console.log ('hoh') }


        
        testInput.addEventListener('keyup', function(event) {
            // console.log('vlad');
            filterTable();
        });

}
    
    // console.log('You selected: ', this.value);
  });





// console.log(externalService.getRegionsList());
// console.log(externalService.getLanguagesList());
// console.log(externalService.getCountryListByLanguage('Europe'));
console.log(externalService.getCountryListByRegion('Europe'));

// {name: 'Ukraine', flagURL: 'https://www.countryflags.io/ua/flat/64.png', region: 'Europe', area: 603500, capital: 'Kyiv', …}

// {name: 'Hungary', flagURL: 'https://www.countryflags.io/hu/flat/64.png', region: 'Europe', area: 93028, capital: 'Budapest', …}

// {name: 'Switzerland', flagURL: 'https://www.countryflags.io/ch/flat/64.png', region: 'Europe', area: 41284, capital: 'Bern', …}

// {name: 'Belarus', flagURL: 'https://www.countryflags.io/by/flat/64.png', region: 'Europe', area: 207600, capital: 'Minsk', …}
 
// {name: 'France', flagURL: 'https://www.countryflags.io/fr/flat/64.png', region: 'Europe', area: 551695, capital: 'Paris', …}
 
// {name: 'United Kingdom', flagURL: 'https://www.countryflags.io/gb/flat/64.png', region: 'Europe', area: 242900, capital: 'London', …}
 
// {name: 'Croatia', flagURL: 'https://www.countryflags.io/hr/flat/64.png', region: 'Europe', area: 56594, capital: 'Zagreb', …}