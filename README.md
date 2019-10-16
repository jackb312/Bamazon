# Bamazon - Node.js, MySQL, javascript
## Overview
This is an Amazon-like storefront using Node.js and MySQL. The app will take in orders from customers and deplete stock from the store's inventory. This application has a customer and manager interface. However, the manager interface is incomplete and has bugs that prevent it from operating completely. For the purpuse of the assignment, only the customer interface will be used.

## Installation: 
This app requires the MySQL database created for the assignment. MySQL needs to be installed on the machine that runs the application. Also, this application needs to be cloned to the computer. This can be done by navigating to https://github.com/jackb312/Bamazon and clicking the "clone or download" button. Copy the link and "git clone" into your terminal. Once the repository is cloned to the machine, enter "npm install" and this will install all the necessary node modules to operate the app. 

## Operation: 
Initial customer view of items for sale, and a prompt to enter the item ID of the item the customer would like to purchase:
![alt text](https://github.com/jackb312/Bamazon/blob/master/images/Screenshot%20(27).png)<br>

Once the item ID is entered, the next prompt is to input the quantity the customer wishes to purchase:
![alt text](https://github.com/jackb312/Bamazon/blob/master/images/Screenshot%20(28).png)<br>

If there is enough stock of the item, the transaction is displayed with the total amount due:
![alt text](https://github.com/jackb312/Bamazon/blob/master/images/Screenshot%20(29).png)<br>

Once the transaction is completed, the inventory on the table is updated to reflect what was just purchased:
![alt text](https://github.com/jackb312/Bamazon/blob/master/images/Screenshot%20(30).png)<br>

If there is not enough quantity of the item to fulfill the order, a prompt is displayed to the customer:
![alt text](https://github.com/jackb312/Bamazon/blob/master/images/Screenshot%20(31).png)

