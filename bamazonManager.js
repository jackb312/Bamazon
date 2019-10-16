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
function displayInventory(){
    var query = "Select * FROM products"
    connection.query(query, function(err, res){
        if(err) throw err;
        var displayTable = new Table({
            head: ["Item ID", "Product name", "Category", "Price", "Quantity"],
            colWidths: [10, 35, 25, 10, 10]
        });
        for(var i = 0; i < res.length; i++){
            displayTable.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
        }
        console.log(displayTable.toString());
        inquirerUpdate();
    });
};
function inquirerUpdate(){
    inquirer.prompt([{
        name: "action",
        type: "list",
        message: "Manage Inventory Options",
        choices: ["Restock Inventory", "Add New Item", "Delete Existing Item"]
    }]).then(function(answers){
        switch(answers.action){
            case "Restock Inventory": restockInquiry();
            break;
            case "Add New Item": addItemRequest();
            break;
            case "Delete Existing Item": deleteExistingItemRequest();
            break;
        }
    });
};
function restockInquiry(){
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Item number of restock item?",
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "Quantity of item?",
            filter: Number
        },
        ]).then(function(answers){
            var restockQuantity = answers.Quantity;
            var restockID = answers.ID;
            restockInventory(restockQuantity, restockID);
        });
};
function restockInventory(restockQuantity, restockID){
    connection.query("Select * FROM products WHERE item_id = " + restockID, function(err, res){
        if(err){console.log(err)};
        connection.query("UPDATE products SET stock_quantity = " + res[0].stock_quantity + restockQuantity + "WHERE item_id = " + restockID);
        displayInventory();
    });
};
function addItemRequest(){
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "ID Number of New Item?"
        },
        {
            name: "Name",
            type: "input",
            message: "Name of New Item?"
        },
        {
            name: "Category",
            type: "input",
            message: "What is New Item Category?"
        },
        {
            name: "Price",
            type: "input",
            message: "Price of New Item?"
        },
        {
            name: "Quantity",
            type: "input",
            message: "Quantity of new Item?"
        },
    ]).then(function(answers){
        var id = answers.Id;
		var name = answers.Name;
		var category = answers.Category;
		var price = answers.Price;
		var quantity = answers.Quantity;
		createNewItem(id,name,category,price,quantity); 
    });
};
function createNewItem(id, name, category, price, quantity){
    connection.query('INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES("' + id + '","' + name + '","' + category + '",' + price + ',' + quantity +  ')');
    displayInventory();
};
function deleteExistingItemRequest(){
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Item Number To Remove?"
        }
    ]).then(function(answers){
        var id = answers.ID;
        removeItem();
        function removeItem(){
            var id = answers.id
            connection.query("DELETE FROM products WHERE item_id = " + id);
            displayInventory();
        };
    });
};

displayInventory();