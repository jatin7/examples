/*&
    {
        "id": "table_feature_dashboard",
        "title": "Table In Razorfow",
        "desc": "Some paragraph of text goes here."
    } 
*/
StandaloneDashboard(function (db) {
    db.setDashboardTitle('Table In Razorfow');
    
    var c1 = new TableComponent();
    c1.setDimensions(12, 6);
    c1.setCaption('List of items in stock');
    c1.addColumn('ProductID', 'Product ID');
    c1.addColumn('ProductName', 'Product Name');
    c1.addColumn('CategoryName', 'Category');
    c1.addColumn('UnitPrice', 'Price', {
        dataType: "number",
        numberPrefix: "$",
        numberForceDecimals: true,
        numberDecimalPoints: 2
    });
    c1.addColumn('UnitsInStock', 'Stock');
    c1.addColumn('Discontinued', 'Discontinued?');
    c1.lock();
    db.addComponent(c1);

    $.ajax({
        url: '/transfer/products.json',
        type: 'GET',
        success: function(products) {
            for(var i=-1; ++i<products.length;) {
                c1.addRow(products[i], {});
            }
            c1.unlock();
        }
    }); 
});