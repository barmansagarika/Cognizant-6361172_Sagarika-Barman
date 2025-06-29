-- Drop existing table 
DROP TABLE IF EXISTS Products;

-- Create table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);

-- sample data
INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Apple MacBook Pro 14"', 'Electronics', 1500.00),
(2, 'Dell XPS 13', 'Electronics', 1500.00),
(3, 'Samsung Galaxy S22', 'Electronics', 800.00),
(4, 'OnePlus 11R', 'Electronics', 750.00),
(5, 'Apple iPad Air', 'Electronics', 750.00),
(6, 'Nike Air Max 270', 'Apparel', 120.00),
(7, 'Adidas Ultraboost 22', 'Apparel', 100.00),
(8, 'Puma RS-X3', 'Apparel', 100.00),
(9, 'The North Face Apex Jacket', 'Apparel', 180.00),
(10, 'H&M Cotton T-Shirt', 'Apparel', 80.00),
(11, 'Philips HL7707 Mixer Grinder', 'Home Appliances', 200.00),
(12, 'Prestige IRIS Blender', 'Home Appliances', 180.00),
(13, 'Bajaj Pop-Up Toaster', 'Home Appliances', 180.00),
(14, 'LG NeoChef Microwave Oven', 'Home Appliances', 250.00),
(15, 'Samsung Convection Oven', 'Home Appliances', 250.00);
