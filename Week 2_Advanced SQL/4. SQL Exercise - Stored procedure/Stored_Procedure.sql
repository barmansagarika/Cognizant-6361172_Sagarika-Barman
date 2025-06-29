-- ================================================
-- EXERCISE 1: CREATE STORED PROCEDURE - sp_InsertEmployee
-- ================================================
IF OBJECT_ID('sp_InsertEmployee', 'P') IS NOT NULL DROP PROCEDURE sp_InsertEmployee;
GO

CREATE PROCEDURE sp_InsertEmployee
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @DepartmentID INT,
    @Salary DECIMAL(10,2),
    @JoinDate DATE
AS
BEGIN
    INSERT INTO Employees (FirstName, LastName, DepartmentID, Salary, JoinDate)
    VALUES (@FirstName, @LastName, @DepartmentID, @Salary, @JoinDate);
END;
GO

-- ? EXECUTE: Insert new employee using stored procedure
EXEC sp_InsertEmployee 'Alice', 'Brown', 1, 5200.00, '2022-08-01';
SELECT * FROM Employees;



-- ================================================
-- EXERCISE 4: CREATE STORED PROCEDURE - sp_GetEmployeesByDepartment
-- ================================================
IF OBJECT_ID('sp_GetEmployeesByDepartment', 'P') IS NOT NULL DROP PROCEDURE sp_GetEmployeesByDepartment;
GO

CREATE PROCEDURE sp_GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT EmployeeID, FirstName, LastName, Salary, JoinDate
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO

-- Get employees in department 2 (Finance)
EXEC sp_GetEmployeesByDepartment @DepartmentID = 2;


-- ================================================
-- EXERCISE 5: CREATE STORED PROCEDURE - sp_GetEmployeeCountByDepartment
-- ================================================
IF OBJECT_ID('sp_GetEmployeeCountByDepartment', 'P') IS NOT NULL DROP PROCEDURE sp_GetEmployeeCountByDepartment;
GO

CREATE PROCEDURE sp_GetEmployeeCountByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO

--  Get count of employees in department 3 (IT)
EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 3;
