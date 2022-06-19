// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function Products(max, propCount) {
    this.max = max;
    this.propCount = propCount;
}

function Product(id, sportid, year, manufacturerid, mainset, subset, playername, cardno, parallel, rookie, auto, serialnumber, memorabilia, photourl ) {
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
    $.get('https://localhost:7074/api/Products', function (data) {
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
            var productLength = Product.length;
            for (var prop in Product) {
                
            }
            //for (var i = 0; i < productLength; i++) {
            //    console.log(currentRow[[Product[i]]])               
            //}
            rows.push(data[p]);
        }
    })
})

function addRow() {
    var lastRow = rows.length;
    var current = rows[lastRow];
    for (var p in current) {
        console.log(current[p]);
    }
}








/*
$(document).ready(function () {
    var tbl = $('#productsTbl');
    $.get('https://localhost:49747/api/Products', function (data) {
        var first = data[0];
        var cells = [];
        for (for i = 0; i < Product.length; i++) {
            cells.push(Product[i]);
        };
        var n = 0;
        for (var i = 0; i < data.length; i++) {
            tbl.append('<tr id = "current"></tr>')
            for (var n = 0; n < cells.length; n++) {
                var row = $('#current');
                current.append(`<td id = ${cells[n]}>test</td>`);
            }
            console.log(`First : ${first}`);
            console.log(first);
        }
    })
});
*/


/*
Products.ProductList = new Products(0, 0);

function initProducts(data) {
    data = $.get('https://localhost:49747/api/Products', function (data) {
        var first = data[0];
        Products[[ProductList]][[max]] = data.length;
        Products[[ProductList]][[propCount]] = first.length;
        console.log(`Products Max : ${Products.max} \n PropCount : ${Products.propCount}`);
    })
}
initProducts();

*/




/*
$(document).ready(function () {
    $.getJSON('https://localhost:49643/api/Products').done(function (data) {
        let productArray = data;
        return productArray
    })
});

function doTable(productArray) {
    console.log(productArray);
}*/


//function doTable(productArray) {
    //var tbl = document.getElementById('productsTbl');
        
 //   var tbl = $('#productsTbl')[0];
    //console.log(`${tbl} |||| inside doTable Function \n ${productArray.length}`);
    /* clear, but don't delete the header*/
 //   while (productArray.rows.length > 1) {
      //  tbl.deleteRow(1);
        // creating rows
   //     for (var r = 0; r < productArray.length; r++) {
     //       var row = document.createElement("tr");
/*
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
            cell13.appendChild(document.createTextNode(productArray[r].PhotoURL));
            row.appendChild(cell13);
            cell14.appendChild(document.createTextNode(productArray[r].Pricing_fk));
            row.appendChild(cell14);
            cell15.appendChild(document.createTextNode(productArray[r].ListedProduct_fk));
            row.appendChild(cell15);

            tbl.appendChild(row); // add the row to the end of the table body
        }
    }
}*/



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