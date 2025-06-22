//Submitted by: Superset ID- 6361172
//Exercise 2: E-commerce Platform Search Function

using System;

namespace EcommercePlatformSearch
{
    public class SearchEngine
    {
        // Linear Search
        public static Product LinearSearch(Product[] products, string targetName)
        {
            foreach (var product in products)
            {
                if (product.ProductName.Equals(targetName, StringComparison.OrdinalIgnoreCase))
                {
                    return product;
                }
            }
            return null;
        }

        // Binary Search
        public static Product BinarySearch(Product[] sortedProducts, string targetName)
        {
            int left = 0, right = sortedProducts.Length - 1;

            while (left <= right)
            {
                int mid = (left + right) / 2;
                int compare = string.Compare(sortedProducts[mid].ProductName, targetName, true);

                if (compare == 0)
                    return sortedProducts[mid];
                else if (compare < 0)
                    left = mid + 1;
                else
                    right = mid - 1;
            }

            return null;
        }
    }
}