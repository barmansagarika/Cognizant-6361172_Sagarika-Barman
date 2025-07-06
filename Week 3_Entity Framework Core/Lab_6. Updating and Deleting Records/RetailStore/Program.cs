// Submitted by: Superset ID:6361172
// Lab 6: Updating and Deleting Records

using Microsoft.EntityFrameworkCore;
using RetailStore.Data;
using System;
using System.Threading.Tasks;

var context = new AppDbContext();

//Step1: Update Product
var product = await context.Products.FirstOrDefaultAsync(p => p.Name == "Laptop");
if (product != null)
{
    product.Price = 70000;
    await context.SaveChangesAsync();
    Console.WriteLine($"Updated: {product.Name} now costs ₹{product.Price}");
}
Console.WriteLine();

//Step2: Delete a product
var toDelete = await context.Products.FirstOrDefaultAsync(p => p.Name == "Rice Bag");
if (toDelete != null)
{
    context.Products.Remove(toDelete);
    await context.SaveChangesAsync();
    Console.WriteLine($"Deleted: {toDelete.Name}");
}
Console.WriteLine();
Console.WriteLine("Submitted by: Superset ID:6361172");