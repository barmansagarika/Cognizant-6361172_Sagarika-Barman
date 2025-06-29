-- View all products with rankings using all three functions
SELECT 
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum,
    RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum,
    DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
FROM Products
ORDER BY Category, Price DESC;

-- Top 3 products in each category using ROW_NUMBER()
WITH RankedProducts AS (
    SELECT *, ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
    FROM Products
)
SELECT *
FROM RankedProducts
WHERE RowNum <= 3;


-- Top 3 products in each category using RANK()
WITH RankedTies AS (
    SELECT *, RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum
    FROM Products
)
SELECT *
FROM RankedTies
WHERE RankNum <= 3;

-- Top 3 products in each category using DENSE_RANK()
WITH DenseRanked AS (
    SELECT *, DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
    FROM Products
)
SELECT *
FROM DenseRanked
WHERE DenseRankNum <= 3;

