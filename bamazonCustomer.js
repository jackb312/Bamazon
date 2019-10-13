var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"Jdb12345!",
	database:"bamazon"
});
connection.connect(function(err){
	if(err)throw err;
	console.log("connected as id" + connection.threadId);
});
var displayProducts = function(){
	var query = "Select * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		var displayTable = new Table ({
			head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
			colWidths: [10,35,25,10,10]
		});
		for(var i = 0; i < res.length; i++){
			displayTable.push(
				[res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
		console.log(displayTable.toString());
		purchasePrompt();
	});
}
function purchasePrompt(){
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Please enter the item id you would like to purchase.",
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "Quantity you wish to purchase?",
            filter: Number
        },
    ]).then(function(answers){
        var quantityDesired = answers.Quantity;
        var IDdesired = answers.ID;
        purchaseOrder(IDdesired, quantityDesired);
    });
};
function purchaseOrder(IDdesired, quantityDesired){
    connection.query("Select * FROM products WHERE item_id = " + IDdesired, function(err, res){
        if(err){console.log(err)};
        if(quantityDesired <= res[0].stock_quantity){
            var totalCost = res[0].price * quantityDesired;
            console.log("You're item is in stock!");
            console.log("Your total cost for " + quantityDesired + " " + res[0].product_name + "is " + totalCost);
            var updatedStockQuantity = res[0].stock_quantity - quantityDesired;
            var query = "UPDATE products SET ? WHERE ?";
            connection.query(query, [{
                stock_quantity: updatedStockQuantity
            },{
                item_id: IDdesired
            }]);
            console.log("Your purchase is complete, thank you for shopping with us!")
            displayProducts();
        }else{
            console.log("Insufficient Quantity, we do not have enough " + res[0].product_name + "to complete your order.");
            displayProducts();
        };
    });
};
displayProducts();