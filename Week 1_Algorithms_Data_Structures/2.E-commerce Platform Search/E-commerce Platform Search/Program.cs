//Submitted by: Superset ID- 6361172
//Exercise 2: E-commerce Platform Search Function


using System;
using System.Linq;

namespace EcommercePlatformSearch
{
    class Program
    {
        static void Main(string[] args)
        {
            Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Shirt", "Clothing"),
                new Product(3, "Phone", "Electronics"),
                new Product(4, "Shoes", "Footwear"),
                new Product(5, "Book", "Stationery")
            };

            Console.WriteLine("Available Products:");
            foreach (var product in products)
            {
                Console.WriteLine($"- {product.ProductName}");
            }

            Console.Write("\nEnter product name to search: ");
            string searchName = Console.ReadLine();

            // LINEAR SEARCH
            Console.WriteLine("\nUsing LINEAR SEARCH:");
            var foundLinear = SearchEngine.LinearSearch(products, searchName);
            Console.WriteLine(foundLinear != null ? foundLinear.ToString() : "Product not found");

            // BINARY SEARCH
            Console.WriteLine("\nUsing BINARY SEARCH:");
            var sortedProducts = products.OrderBy(p => p.ProductName).ToArray();
            var foundBinary = SearchEngine.BinarySearch(sortedProducts, searchName);
            Console.WriteLine(foundBinary != null ? foundBinary.ToString() : "Product not found");

            Console.ReadLine(); 
        }
    }
}