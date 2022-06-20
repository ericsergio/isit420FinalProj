// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function Products(max, propCount) {
    this.max = max;
    this.propCount = propCount;
}

function Product(id, sportid, year, manufacturerid, mainset, subset, playername, cardno, parallel, rookie, auto, serialnumber, memorabilia, photourl) {
    this.id = id;
    this.sportid = sportid;
    this.manufacturerid = manufacturerid;
    this.mainset = mainset;
    this.subset = subset;
    this.playername = playername;
    this.cardno = cardno;
    this.parallel = parallel;
    this.rookie = rookie;
    this.auto = auto;
    this.serialnumber = serialnumber;
    this.memorabilia = memorabilia;
}
rows = [];
cells = [];

function pArr() {
    for (var p in this) {
        console.log(this[p])
    }
}

$(document).ready(function () {
    var tbl = $('#pTable');
    var ebayTbl = $('#pEbayTable');
    $.get('https://localhost:7074/api/Products/AllProducts', function (data) {
        var counter = 0;
        for (var p in data) {
            var idAttr = `row${counter}`
            counter += 1;
            var currentRow = data[p];

            tbl.append(`<tr id = ${idAttr}> 
                            <td>${currentRow.id}</td>
                            <td>${currentRow.sport_fk}</td>
                            <td>${currentRow.year}</td>
                            <td>${currentRow.manufacturer_fk}</td>
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

            //for (var i = 0; i < productLength; i++) {
            //    console.log(currentRow[[Product[i]]])               
            //}
            rows.push(data[p]);
        }

    })

    $.get('https://localhost:7074/api/Products/GetUniquePlayers', function (data) {
        //Messed Around and made a script that fills Input for a Ebay Search with API... look at LINQ in Controller, makes it so you're not returning the whole product table
        let productArray = data;
        console.log(productArray);
        let playerSelectElement = document.getElementById("playerSelect");
        productArray.forEach(function (value) {
            playerSelectElement.appendChild(new Option(value.playerName, value.id));
        });
    })



    $.getJSON('https://api.countdownapi.com/request?api_key=08B67DBF8DDB4DC3BD5C49CD31370A58&type=search&ebay_domain=ebay.com&search_term=Tanner+Houck&customer_location=us&listing_type=buy_it_now&sold_items=false&num=10&authenticity_verified=true&output=json&page=1', function (data) {


        console.log(data)

        var counter = 0;
        for (var p in data) {
            var idAttr = `row${counter}`
            counter += 1;
            var currentRow = data[p];

            console.log(currentRow)

            ebayTbl.append(`<tr id = ${idAttr}> 
                            <td>${currentRow.title}</td>
                            <td>${currentRow.price}</td>
                            <td>${currentRow.condition}</td>
                            <td>${currentRow.hotness}</td>
                        </tr>`);

            //for (var i = 0; i < productLength; i++) {
            //    console.log(currentRow[[Product[i]]])               
            //}
            rows.push(data[p]);
        }
    })




});

function addRow() {
    var lastRow = rows.length;
    var current = rows[lastRow];
    for (var p in current) {
        console.log(current[p]);
    }
}
