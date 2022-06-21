// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const SPORT_FK = ['Baseball', 'Football', 'Basketball', 'Hockey', 'Nascar', 'Pokemon', 'UFC', 'Soccer',];
const MANUFACTURER_FK = ['Bowman', 'Topps', 'Topps Chrome', 'Panini', 'Upper Deck', 'Stadium Club'];
const pPROPS = ['id', 'sportid', 'year', 'manufacturerid', 'mainset', 'subset', 'playername', 'cardno', 'parallel', 'rookie', 'auto', 'serialnumber', 'memorabilia', 'photourl'];
var checkCounter = 0;

function CurrentPrevious(idxCurr, idxPrev) {
    this.isFirst = true;
    this.idxCurr = idxCurr || null;
    this.idxPrev = idxPrev || null;
}

CurrentPrevious.selectedState = new CurrentPrevious();
/*
Current.prototype.getIdx = function(){
    $('pTable tr').on('click', function () {
        return $('#pTable tr')
    });
}
*/
/*function Products(max, propCount) {
    this.max = max;
    this.propCount = propCount;
}*/

function Product(id, sportid, year, manufacturerid, mainset, subset, playername, cardno, parallel, rookie, auto, serialnumber, memorabilia, photourl) {
    this.id = id || 0;
    this.sportid = sportid || '0';
    this.manufacturerid = manufacturerid || '0';
    this.mainset = mainset || '0';
    this.subset = subset || '0';
    this.playername = playername || '0';
    this.cardno = cardno || '0';
    this.parallel = parallel || '0';
    this.rookie = rookie || '0';
    this.auto = auto || '0';
    this.serialnumber = serialnumber || '0';
    this.memorabilia = memorabilia || '0';
}
var prodArr = [];
rows = [];
//cells = [];
ebayRows = [];


$(document).ready(function () {
    $('#pAPIHeader').hide();
    $('#pTable').hide();
    $('#pEbayTable').hide();
    $('#playerSelect').hide();
});

function doProducts() {
    $('#pTable').toggle();
    var tbl = $('#pTable');
    $.get('https://localhost:7074/api/Products/AllProducts', function (data) {
        var counter = 0;
        for (var p in data) {

            var idAttr = `row${counter}`;
            counter += 1;
            var currentRow = data[p];
            let sportName = SPORT_FK[currentRow.sport_fk - 1];
            let manufacturerName = MANUFACTURER_FK[currentRow.manufacturer_fk - 1];
            tbl.append(`<tr id = ${idAttr}>
                            <td>${currentRow.id}</td>
                            <td>${sportName}</td>
                            <td>${currentRow.year}</td>
                            <td>${manufacturerName}</td>
                            <td>${currentRow.mainSet}</td>
                            <td>${currentRow.subSet}</td>
                            <td>${currentRow.playerName}</td>
                            <td>${currentRow.cardNo}</td>
                            <td>${currentRow.parallel}</td>
                            <td>${currentRow.rookie}</td>
                            <td>${currentRow.auto}</td>
                            <td>${currentRow.serialNumbered}</td>
                            <td>${currentRow.memorabilia}</td>
                        </tr>`);
            rows.push(data[p]);
        }
        selectSingle();
    });
}



function selectSingle() {
    var o = $('#pTable tr');
    o.each(function () {
        $(this).on('click', function () {
            var idx = $(this).index();
            if (CurrentPrevious.selectedState.isFirst) {
                CurrentPrevious.selectedState.idxCurr = idx;
                $(this).addClass('selected');
                //console.log('first option');
                CurrentPrevious.selectedState.isFirst = false;
                doCurrentProduct();
            } else {
                CurrentPrevious.selectedState.idxPrev = CurrentPrevious.selectedState.idxCurr;
                CurrentPrevious.selectedState.idxCurr = idx;
                $('#pTable tr').eq(CurrentPrevious.selectedState.idxPrev).removeClass('selected');
                $(this).addClass('selected');
                //$('.selected').css('backgroundColor', 'yellow');
                doCurrentProduct();                
            }
        })
    })    
}

function doCurrentProduct() {
    var counter = 0;
    Product.current = new Product(0, 'Baseball', '2022', 'Topps', 'N', 'N', 'first last', '1', 'N', 'N', 'N', 'N', 'N', 'N' )
    var selectedProductValues = $('.selected td');
    selectedProductValues.each(function () {
        //console.log($(this).text());
        Product.current[[pPROPS[counter]]] = $(this).text();
        prodArr.push($(this).text())
        counter += 1;
    });
    let obj = Product.current;
    for (var prop in obj) {
        console.log(`prop: ${prop}\t value: ${obj[prop]}\n`)
    }
    //console.log(`${}`)
}





















//AJAX Call to Server-Side LINQ Query which grabs every item in the database and returns unique PlayerNames, 
//meaning user can search against 'playerName' for Ebay API
/*function searchPlayerEbay() {
    $('#pAPIHeader').toggle();
    $('#pEbayTable').toggle();
    $('#playerSelect').toggle();
    $.get('https://localhost:7074/api/Products/GetUniquePlayers', function (data) {
        //Messed Around and made a script that fills Input for a Ebay Search with API... look at LINQ in Controller, makes it so you're not returning the whole product table
        let productArray = data;
        let playerSelectElement = document.getElementById("playerSelect");
        productArray.forEach(function (value) {
            playerSelectElement.appendChild(new Option(value.playerName, value.id));
        });
    })/*
    /*$.getJSON('https://api.countdownapi.com/request?api_key=08B67DBF8DDB4DC3BD5C49CD31370A58&type=search&ebay_domain=ebay.com&search_term=Tanner+Houck&customer_location=us&listing_type=buy_it_now&sold_items=true&num=10&authenticity_verified=false&output=json&page=1', function (data) {
    console.log(data);
    drawEbayTable(data.search_results);
})
};
*/
function drawEbayTable(ebayArray) {
// get the reference for the table
// creates a <table> element
var tbl = document.getElementById('pEbayTable');
while (tbl.rows.length > 1) {  // clear, but don't delete the header
    tbl.deleteRow(1);
}

// creating rows
for (var r = 0; r < ebayArray.length; r++) {
    var row = document.createElement("tr");

    var cell0 = document.createElement("td");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    cell0.appendChild(document.createTextNode(ebayArray[r].title));
    row.appendChild(cell0);
    cell1.appendChild(document.createTextNode(ebayArray[r].price.raw));
    row.appendChild(cell1);
    cell2.appendChild(document.createTextNode(ebayArray[r].condition));
    row.appendChild(cell2);
    cell3.appendChild(document.createTextNode(ebayArray[r].link));
    row.appendChild(cell3);
    cell4.appendChild(document.createTextNode(ebayArray[r].ended.date.raw));
    row.appendChild(cell4);

    tbl.appendChild(row); // add the row to the end of the table body
}
}