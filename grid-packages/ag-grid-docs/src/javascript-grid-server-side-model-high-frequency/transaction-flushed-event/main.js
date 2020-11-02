var columnDefs = [
  { field: 'product' },
  { field: 'value' }
];

var gridOptions = {
  defaultColDef: {
    width: 250,
    resizable: true
  },
  onAsyncTransactionsFlushed: function(e) {
    var summary = {};
    e.results.forEach(function(result) {
      var status = result.status;
      if (summary[status]==null) {
        summary[status] = 0;
      }
      summary[status]++;
    });
    console.log('onAsyncTransactionsFlushed: ' + JSON.stringify(summary));
  },
  getRowNodeId: function(data) {return data.product; },
  rowSelection: 'multiple',
  serverSideStoreType: 'inMemory',
  columnDefs: columnDefs,
  // use the enterprise row model
  rowModelType: 'serverSide',
  animateRows: true,
  asyncTransactionWaitMillis: 4000
};

var products = ['Palm Oil','Rubber','Wool','Amber','Copper'];

var newProductSequence = 0;

var all_products = ['Palm Oil','Rubber','Wool','Amber','Copper','Lead','Zinc','Tin','Aluminium',
  'Aluminium Alloy','Nickel','Cobalt','Molybdenum','Recycled Steel','Corn','Oats','Rough Rice',
  'Soybeans','Rapeseed','Soybean Meal','Soybean Oil','Wheat','Milk','Coca','Coffee C',
  'Cotton No.2','Sugar No.11','Sugar No.14'];

var allServerSideData = [];
products.forEach( function(product, index) {
  allServerSideData.push({
    product: product,
    value: Math.floor(Math.random()*10000)
  })
});

function onBtAdd() {
  var newProductName = all_products[Math.floor(all_products.length*Math.random())];
  var newItem = {
    product: newProductName + ' ' + newProductSequence++,
    value: Math.floor(Math.random()*10000)
  };
  allServerSideData.push(newItem)
  var tx = {
    add: [newItem]
  };
  gridOptions.api.applyServerSideTransactionAsync(tx);
}

function onBtFlush() {
  gridOptions.api.flushServerSideAsyncTransactions();
}

var valueCounter = 0;
function getNextValue() {
  valueCounter++;
  return (Math.floor((valueCounter*987654321)/7)) % 10000;
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
  var gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

  var dataSource = {
    getRows: function(params) {
      var rowData = allServerSideData.slice();
      setTimeout(function() {
        params.success({rowData: rowData});
      }, 200);
    }
  };

  gridOptions.api.setServerSideDatasource(dataSource);
});