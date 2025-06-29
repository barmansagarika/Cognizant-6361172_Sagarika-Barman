-- ------------------------------------------
-- DATABASE SETUP
-- ------------------------------------------

-- Drop existing tables if they exist (clean setup)
DROP TABLE IF EXISTS OrderDetails;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Customers;

-- Create Tables
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Region VARCHAR(50)
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Insert Sample Data
INSERT INTO Customers (CustomerID, Name, Region) VALUES
(1, 'Alice', 'North'),
(2, 'Bob', 'South'),
(3, 'Charlie', 'East'),
(4, 'David', 'West');

INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Tablet', 'Electronics', 600.00),
(4, 'Headphones', 'Accessories', 150.00);

INSERT INTO Orders (OrderID, CustomerID, OrderDate) VALUES
(1, 1, '2023-01-15'),
(2, 2, '2023-02-20'),
(3, 3, '2023-03-25'),
(4, 4, '2023-04-30');

INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quantity) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 1),
(4, 4, 4, 3);

-- ------------------------------------------
-- EXERCISE 1: NON-CLUSTERED INDEX
-- ------------------------------------------

-- Step 1: Query before index
SELECT * FROM Products WHERE ProductName = 'Laptop';

-- Step 2: Create Non-Clustered Index
CREATE NONCLUSTERED INDEX IX_Products_ProductName
ON Products(ProductName);

-- Step 3: Query after index
SELECT * FROM Products WHERE ProductName = 'Laptop';

-- ------------------------------------------
-- EXERCISE 2: CLUSTERED INDEX
-- ------------------------------------------

-- Step 1: Query before index
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';

-- Step 2: Create Clustered Index

-- Drop existing PK constraint (assumes it's clustered)
ALTER TABLE Orders DROP CONSTRAINT PK__Orders;

-- Recreate Primary Key as NONCLUSTERED
ALTER TABLE Orders
ADD CONSTRAINT PK_Orders PRIMARY KEY NONCLUSTERED (OrderID);

-- Now create CLUSTERED INDEX on OrderDate
CREATE CLUSTERED INDEX IX_Orders_OrderDate
ON Orders(OrderDate);

-- Step 3: Query after index
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';

-- ------------------------------------------
-- EXERCISE 3: COMPOSITE INDEX
-- ------------------------------------------

-- Step 1: Query before index
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';

-- Step 2: Create Composite Index
CREATE NONCLUSTERED INDEX IX_Orders_CustomerID_OrderDate
ON Orders(CustomerID, OrderDate);

-- Step 3: Query after index
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';
