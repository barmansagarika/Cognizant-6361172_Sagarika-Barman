//Submitted by: Superset ID:6361172
//Lab 5: Retrieving Data from the Database

using Microsoft.EntityFrameworkCore;
using RetailStore.Data;
using System;
using System.Threading.Tasks;

var context = new AppDbContext();

Console.WriteLine("--All Products:--");
var products = await context.Products.ToListAsync();
foreach (var p in products)
    Console.WriteLine($"{p.Name} - ₹{p.Price:F2}");

Console.WriteLine();

var product = await context.Products.FindAsync(2);
Console.WriteLine($"-> Found by ID 2: {product?.Name}");

Console.WriteLine();

var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
Console.WriteLine($"Expensive Product: {expensive?.Name} - ₹{expensive?.Price:F2}");

Console.WriteLine();

Console.WriteLine("Submitted by: Superset ID:6361172");