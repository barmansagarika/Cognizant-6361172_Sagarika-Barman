//Submitted by:Superset ID: 6361172
//Exercise 1: Implementing the Singleton Pattern


using System;

namespace Singleton_Pattern
{
    class Program
    {
        static void Main(string[] args)
        {
            Logger logger1 = Logger.GetInstance();
            logger1.Log("First log message");

            Logger logger2 = Logger.GetInstance();
            logger2.Log("Second log message");

            if (ReferenceEquals(logger1, logger2))
            {
                Console.WriteLine("Both logger1 and logger2 are the same instance.");
            }
            else
            {
                Console.WriteLine("Different instances exist.");
            }

            Console.ReadLine(); 
        }
    }
}