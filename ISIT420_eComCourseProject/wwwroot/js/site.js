// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//importPackages(Packages.org.apache.pig.scripting.js)

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
//ebayRows = [];


$(document).ready(function () {
    $('#pAPIHeader').hide();
    $('#pTable').hide();
    $('#pEbayTable').hide();
    $('#playerSelect').hide();
    $('#yearSelect').hide();
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
    Product.current = new Product(0, 'Baseball', '2022', 'Topps', 'N', 'N', 'first last', '1', 'N', 'N', 'N', 'N', 'N', 'N')
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

function searchPlayerEbay() {
    $('#pAPIHeader').toggle();
    $('#pEbayTable').toggle();
    $('#playerSelect').toggle();
    $('#yearSelect').toggle();

    $.get('https://localhost:7074/api/Products/GetUniquePlayers', function (data) {
        //Messed Around and made a script that fills Input for a Ebay Search with API... look at LINQ in Controller, makes it so you're not returning the whole product table
        let productArray = data;
        let playerSelectElement = document.getElementById("playerSelect");
        productArray.forEach(function (value) {
            playerSelectElement.appendChild(new Option(value.playerName, value.id));
        });
        $.get('https://localhost:7074/api/Products/GetUniqueYear', function (data) {
            //Messed Around and made a script that fills Input for a Ebay Search with API... look at LINQ in Controller, makes it so you're not returning the whole product table
            let productArray = data;
            let playerSelectElement = document.getElementById("yearSelect");
            productArray.forEach(function (value) {
                playerSelectElement.appendChild(new Option(value.year, value.id));
            });
        })
    })
    //$.getJSON('https://api.countdownapi.com/request?api_key=EE06CF41FE414D19B1F035E0EBDF6A94&type=search&ebay_domain=ebay.com&search_term=Topps+baseball&listing_type=buy_it_now&completed_items=true&sold_items=true', function (data) {
    //console.log(data);
    //drawEbayTable(data.search_results);
    //})
};


function GetTotalSalesForEachManufacturer() {
    //$('#playerSelect').toggle();

    $.get('https://localhost:7074/api/Products/GetTotalSalesForEachManufacturer/', function (data) {
        drawManufacturerPriceTable(data);
    });

}

function sumOfCardsSoldByMintedYear() {
    //$('#playerSelect').toggle();
    var select = document.getElementById('yearSelect');
    var value = select.options[select.selectedIndex].text

    $.get('https://localhost:7074/api/Products/GetSumOfCardsSoldByYear/' + value + '/', function (data) {
        $("#pYearUl").append('<li>' + formatter.format(data) + '</li>');

    });


}

function avgPlayerPrice() {
    //$('#playerSelect').toggle();
    var select = document.getElementById('playerSelect');
    var value = select.options[select.selectedIndex].text

    $.get('https://localhost:7074/api/Products/GetYearsAverageCardSalePrice' + '/' + value, function (data) {
        console.log(data.value)
        $("#pPlayerUl").append('<li>' + formatter.format(data) + '</li>');

    });


}

function drawManufacturerPriceTable(dataArray) {
    // get the reference for the table
    // creates a <table> element
    var tbl = document.getElementById('pManfacturerTable');
    while (tbl.rows.length > 1) {  // clear, but don't delete the header
        tbl.deleteRow(1);
    }

    


    for (var r = 0; r < dataArray.length; r++) {

        var cell0 = document.createElement("td");
        var cell1 = document.createElement("td");
        var currentRow = dataArray[r].manufacturer;
        let manufacturerName = MANUFACTURER_FK[currentRow - 1];

        // creating rows

        var row = document.createElement("tr");

        /*switch (dataArray[r].manufacturer) {

            case 1:
                dataArray[r].manufacturer == "Bowman"
            case 2:
                dataArray[r].manufacturer == "Panini"
            case 3:
                dataArray[r].manufacturer == "Stadium Club"
            case 4:
                dataArray[r].manufacturer == "Tops"
            default:
        }*/
        console.log(manufacturerName);
        cell0.appendChild(document.createTextNode(manufacturerName));
        row.appendChild(cell0);
        cell1.appendChild(document.createTextNode(formatter.format(dataArray[r].sum)));
        row.appendChild(cell1);


        tbl.appendChild(row); // add the row to the end of the table body


    }
}

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});