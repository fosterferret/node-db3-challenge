# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT ProductName, CategoryName
FROM Products AS p
JOIN Categories AS c ON p.CategoryID = c.CategoryID;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
select o.orderid as Id, s.shippername as Shipper
from orders as o
join shippers as s
on o.shipperid = s.shipperid
where o.orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName,Quantity
FROM OrderDetails AS od
JOIN Products AS P ON od.ProductID = p.ProductID
WHERE OrderID = 10251
ORDER BY ProductName;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT OrderID, CustomerName AS Customer, LastName AS [Employee's Last Name]
FROM Orders AS o
JOIN Customers AS c on o.CustomerID = c.CustomerID
JOIN Employees AS e on o.EmployeeID = e.EmployeeID;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT CategoryName
, COUNT(ProductName) AS Count
FROM Products AS p
JOIN Categories AS c ON p.CategoryID = c.CategoryID
GROUP BY CategoryName;


### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
SELECT o.OrderID
, COUNT(ProductID) AS ItemCount
FROM Orders AS o
JOIN OrderDetails as od ON o.OrderID = od.OrderID
GROUP BY o.OrderID;