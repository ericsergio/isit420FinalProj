﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function() {
    $('.headerClass').css('color', 'red');
    console.log("one two three");
});


$(document).ready(function () {
    $.getJSON('/api/Products').done(function () {
        let productArray = data;
        console.log("ten eleven twelve");
        doTable(productArray);
    })
});

/*function getProductTbl() {
    $.get('http://localhost:62489/api/Products', function (data) {
        console.log(data);
    })
};*/




/*
$(document).ready(function () {
    // Send an AJAX request
    $.getJSON('api/Orders')
        .done(function (data) {
            // On success, 'data' contains a list of products.
            let orderArray = data;
            drawTable(orderArray);
        });

    $.getJSON('api/SelectGets/GetSales')
        .done(function (data) {
            // On success, 'data' contains a list of salespeople.
            let SalesPersonArray = data;
            let salesPersonSelect = document.getElementById("salesPersonSelect");
            SalesPersonArray.forEach(function (value) {
                salesPersonSelect.appendChild(new Option((value.firstName + " " + value.lastName), value.salesPersonId));
            });

        });

    $.getJSON('api/SelectGets/GetStores')
        .done(function (data) {
            // On success, 'data' contains a list of salespeople.
            let StoreArray = data;
            let storeSelect = document.getElementById("storeSelect");
            StoreArray.forEach(function (value) {
                storeSelect.appendChild(new Option(value.city, value.storeId));
            });
            StoreArray.forEach(function (value) {
                storePerformanceSelect.appendChild(new Option(value.city, value.storeId));
            });
        });

    $.getJSON('api/SelectGets/GetCds')
        .done(function (data) {
            // On success, 'data' contains a list of salespeople.
            let cdArray = data;
            let cdSelect = document.getElementById("cdSelect");
            cdArray.forEach(function (value) {
                cdSelect.appendChild(new Option(value.cdname, value.cdId));
            });

        });
});
function formatItem(item) {
    return item.counted; // + '   ' + item.subject + '   ' + item.details
}
*/
function doTable(productArray) {
    // get the reference for the table
    // creates a <table> element
    var tbl = document.getElementById('productsTbl');
    //var tbl = $('#productTbl');
    //console.log(`${tbl} |||| inside doTable Function`);
    // clear, but don't delete the header
    while (tbl.rows.length > 1) {
        tbl.deleteRow(1);
        // creating rows
        for (var r = 0; r < productArray.length; r++) {
            var row = document.createElement("tr");

            var cell0 = document.createElement("td");
            var cell1 = document.createElement("td");
            var cell2 = document.createElement("td");
            var cell3 = document.createElement("td");
            var cell4 = document.createElement("td");
            var cell5 = document.createElement("td");
            var cell6 = document.createElement("td");
            var cell7 = document.createElement("td");
            var cell8 = document.createElement("td");
            var cell9 = document.createElement("td");
            var cell10 = document.createElement("td");
            var cell11 = document.createElement("td");
            var cell12 = document.createElement("td");
            //var cell13 = document.createElement("td");
            //var cell14 = document.createElement("td");
            //var cell15 = document.createElement("td");


            cell0.appendChild(document.createTextNode(productArray[r].Id));
            row.appendChild(cell0);
            cell1.appendChild(document.createTextNode(productArray[r].Sport_fk));
            row.appendChild(cell1);
            cell2.appendChild(document.createTextNode(productArray[r].Year));
            row.appendChild(cell2);
            cell3.appendChild(document.createTextNode(productArray[r].Manufacturer_fk));
            row.appendChild(cell3);
            cell4.appendChild(document.createTextNode(productArray[r].MainSet));
            row.appendChild(cell4);
            cell5.appendChild(document.createTextNode(productArray[r].SubSet));
            row.appendChild(cell5);
            cell6.appendChild(document.createTextNode(productArray[r].PlayerName));
            row.appendChild(cell6);
            cell7.appendChild(document.createTextNode(productArray[r].CardNo));
            row.appendChild(cell7);
            cell8.appendChild(document.createTextNode(productArray[r].Parallel));
            row.appendChild(cell8);
            cell9.appendChild(document.createTextNode(productArray[r].Rookie));
            row.appendChild(cell9);
            cell10.appendChild(document.createTextNode(productArray[r].Auto));
            row.appendChild(cell10);
            cell11.appendChild(document.createTextNode(productArray[r].SerialNumbered));
            row.appendChild(cell11);
            cell12.appendChild(document.createTextNode(productArray[r].Memorabilia));
            row.appendChild(cell12);
            /*cell13.appendChild(document.createTextNode(productArray[r].PhotoURL));
            row.appendChild(cell13);
            cell14.appendChild(document.createTextNode(productArray[r].Pricing_fk));
            row.appendChild(cell14);
            cell15.appendChild(document.createTextNode(productArray[r].ListedProduct_fk));
            row.appendChild(cell15);*/

            tbl.appendChild(row); // add the row to the end of the table body
        }
    }
}
/*
function drawPerformanceTable(performanceArray) {
    // get the reference for the table
    // creates a <table> element
    var tbl = document.getElementById('performanceTable');
    while (tbl.rows.length > 1) {  // clear, but don't delete the header
        tbl.deleteRow(1);
    }

    // creating rows
    for (var r = 0; r < performanceArray.length; r++) {
        var row = document.createElement("tr");

        var cell0 = document.createElement("td");
        var cell1 = document.createElement("td");

        cell0.appendChild(document.createTextNode(performanceArray[r].store));
        row.appendChild(cell0);
        cell1.appendChild(document.createTextNode(performanceArray[r].sum));
        row.appendChild(cell1);

        tbl.appendChild(row); // add the row to the end of the table body
    }

}

function drawCdTable(cdArray) {
    // get the reference for the table
    // creates a <table> element
    var tbl = document.getElementById('cdTable');
    while (tbl.rows.length > 1) {  // clear, but don't delete the header
        tbl.deleteRow(1);
    }

    // creating rows
    for (var r = 0; r < cdArray.length; r++) {
        var row = document.createElement("tr");

        var cell0 = document.createElement("td");
        var cell1 = document.createElement("td");

        cell0.appendChild(document.createTextNode(cdArray[r].storeId));
        row.appendChild(cell0);
        cell1.appendChild(document.createTextNode(cdArray[r].cdSum));
        row.appendChild(cell1);

        tbl.appendChild(row); // add the row to the end of the table body
    }

}




function addOrder() {

    let selectSalesPerson = document.getElementById('salesPersonSelect');
    let salesPersonValue = selectSalesPerson.options[selectSalesPerson.selectedIndex].value;

    let selectCd = document.getElementById('cdSelect');
    let cdValue = selectCd.options[selectCd.selectedIndex].value;

    let selectStore = document.getElementById('storeSelect');
    let storeValue = selectStore.options[selectStore.selectedIndex].value;

    let pricePaid = document.getElementById('howmany').value

    let newOrder = new Order();
    newOrder.SalesPersonId = salesPersonValue;
    newOrder.CdId = cdValue;
    newOrder.StoreId = storeValue;
    newOrder.PricePaid = pricePaid;

    $.ajax({
        url: "api/Orders",
        type: "POST",
        data: JSON.stringify(newOrder),
        contentType: "application/json; charset=utf-8",

        success: function (result) {
            alert(result + " was added");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function findStorePerformance() {

    let selectPerformanceStore = document.getElementById('storePerformanceSelect');
    let storePerformanceValue = selectPerformanceStore.options[selectPerformanceStore.selectedIndex].value;

    $.getJSON('api/Orders' + '/' + storePerformanceValue)
        .done(function (data) {
            let performanceArray = data;
            drawPerformanceTable(performanceArray);
            $('#description').append(data);
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#description').text('Error: ' + err);
        });

}

function findCdPerformance() {
    $.getJSON('api/Orders' + '/CdCountByStore')
        .done(function (data) {
            let cdArray = data;
            console.log(data);
            drawCdTable(cdArray);
            //$('#description').append(data);
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#description').text('Error: ' + err);
        });

}

let Order = function (pOrdersId, pStoreId, pSalesPersonId, pCdId, pPricePaid, pDate) {
    this.OrdersId = pOrdersId;
    this.StoreId = pStoreId;
    this.SalesPersonId = parseInt(pSalesPersonId);
    this.CdId = pCdId;
    this.PricePaid = pPricePaid;
    this.Date = pDate;
}
*/






/*
_______________________________________________________________________________________________________________
function Orientation(id) {
     this.id = id;
    
};

 Orientation.ScreenOrientation = new Orientation(getOrientation());

 function getOrientation() {
  var o = screen.orientation.type;
   var orien = o.replace('-primary', '');
   if (orien === 'portrait') {
       return 0;
      
  } else {
       return 1;
      
  }
  
//window.onload = getOrientation();

 $(window).on("orientationchange load", function (event) {
      //$('.col-sm-12').html('<h2>Contact</h2>');
   var names = ['portrait', 'landscape'];
      //Orientation.prototype.newOrientation = new Orientation(getOrientation());
   Orientation.ScreenOrientation = new Orientation(getOrientation());
     $("#orientation").text(`${names[Orientation.ScreenOrientation.id]} mode | Width:
    ${document.body.clientWidth} px | Height: ${document.body.clientHeight} px`);
});*/