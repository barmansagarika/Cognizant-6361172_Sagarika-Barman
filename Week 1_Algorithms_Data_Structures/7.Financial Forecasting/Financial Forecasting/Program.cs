//Submitted by: Superset ID- 6361172
//Exercise 7: Financial Forecasting

using System;
using System.Globalization;

namespace FinancialForecasting
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("----- Financial Forecasting Tool -----");

            Console.Write("Enter current value (e.g., 1000): ");
            double currentValue = Convert.ToDouble(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.Write("Enter annual growth rate (e.g., 0.05 for 5%): ");
            double growthRate = Convert.ToDouble(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.Write("Enter number of years: ");
            int years = Convert.ToInt32(Console.ReadLine());

            double futureValue = FinancialForecast.PredictFutureValue(currentValue, growthRate, years);

            Console.WriteLine($"\nPredicted future value after {years} years: {futureValue:C2}");

            Console.ReadLine(); 
        }
    }
}