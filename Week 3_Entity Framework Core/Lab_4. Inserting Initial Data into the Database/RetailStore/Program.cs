//Submitted by: Superset ID:6361172
//Lab 4: Inserting Initial Data into the Database

using Microsoft.EntityFrameworkCore;
using RetailStore.Data;
using RetailStore.Models;

var context = new AppDbContext();

await context.Products.ExecuteDeleteAsync();
await context.Categories.ExecuteDeleteAsync();


var electronics = new Category { Name = "Electronics" };
var groceries = new Category { Name = "Groceries" };

await context.Categories.AddRangeAsync(electronics, groceries);

var product1 = new Product { Name = "Laptop", Price = 75000, Category = electronics };
var product2 = new Product { Name = "Rice Bag", Price = 1200, Category = groceries };
var product3 = new Product { Name = "Smartphone", Price = 25000, Category = electronics };
var product4 = new Product { Name = "Headphones", Price = 3000, Category = electronics };
var product5 = new Product { Name = "Smartwatch", Price = 5000, Category = electronics };
var product6 = new Product { Name = "Wheat Flour", Price = 800, Category = groceries };
var product7 = new Product { Name = "Cooking Oil", Price = 1500, Category = groceries };
var product8 = new Product { Name = "Sugar Pack", Price = 950, Category = groceries };
await context.Products.AddRangeAsync(product1, product2, product3, product4, product5, product6, product7, product8);
await context.SaveChangesAsync();

Console.WriteLine("Initial Data inserted successfully.");
Console.WriteLine();

Console.WriteLine("Submitted by: Superset ID:6361172");