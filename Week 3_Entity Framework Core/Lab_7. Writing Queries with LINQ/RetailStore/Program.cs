// Submitted by: Superset ID:6361172
// Lab 7: Writing Queries with LINQ

// The products listed and used for this lab
// Category: Electronics (Id = 1)
// - Laptop        | ₹75000.00
// - Smartphone    | ₹25000.00
// - Headphones    | ₹3000.00
// - Smartwatch    | ₹5000.00
//
// Category: Groceries (Id = 2)
// - Rice Bag      | ₹1200.00
// - Wheat Flour   | ₹800.00
// - Cooking Oil   | ₹1500.00
// - Sugar Pack    | ₹950.00


using Microsoft.EntityFrameworkCore;
using RetailStore.Data;
using System;
using System.Linq;
using System.Threading.Tasks;

var context = new AppDbContext();

// Step 1: Filter and Sort (Price > 1000, Descending)
var filtered = await context.Products
    .Where(p => p.Price > 1000)
    .OrderByDescending(p => p.Price)
    .ToListAsync();

Console.WriteLine("-- Filtered & Sorted Products (Price > ₹1000) --");
foreach (var p in filtered)
    Console.WriteLine($"{p.Name} - ₹{p.Price:F2}");

Console.WriteLine();

// Step 2: Project into DTO (Name & Price only)
var productDTOs = await context.Products
    .Select(p => new { p.Name, p.Price })
    .ToListAsync();

Console.WriteLine("-- Product DTOs --");
foreach (var dto in productDTOs)
    Console.WriteLine($"{dto.Name} - ₹{dto.Price:F2}");

Console.WriteLine();
Console.WriteLine("Submitted by: Superset ID:6361172");
