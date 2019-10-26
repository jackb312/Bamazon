DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50),
department_name VARCHAR(30),
price DECIMAL(10,2),
stock_quantity INTEGER(10),
PRIMARY KEY (item_id)
);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (134987, "Petzl Volta 9.0mm Climbing Rope ", "Climbing Rope", 199.99, 19);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (765234, "Black Diamond Carabiners ", "Climbing Hardware", 69.99, 134);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (901293, "Petzl GriGri ", "Climbing Hardware", 99.99, 26);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (987654, "La Sportiva Mythos 42.5 ", "Climbing Shoes", 129.99, 14);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (283746, "Black Diamond Quickdraws 6-pack ", "Climbing hardware", 89.99, 99);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (739857, "Grivel Ice Axe ", "Mountaineering Hardware", 149.99, 7);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (019283, "Black Diamond Cams ", "Climbing Hardware", 399.99, 5);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (564738, "Petzl Adjama Harness ", "Climbing Accessories", 99.99, 8);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (473829, "Grivel Helmet ", "Climbing Accessories", 59.99, 47);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (098765, "Climbing Chalk ", "Climbing Accessories", 19.99, 198);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (000123, "Climbing Jacket ", "Climbing Clothing", 59.99, 101);