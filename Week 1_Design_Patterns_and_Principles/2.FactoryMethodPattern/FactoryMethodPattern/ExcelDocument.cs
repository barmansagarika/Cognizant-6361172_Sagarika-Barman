//Submitted by: Superset ID- 6361172
//Exercise 2: Implementing the Factory Method Pattern

using System;

namespace FactoryMethodPattern
{
    public class ExcelDocument : IDocument
    {
        public ExcelDocument()
        {
            Console.WriteLine("Excel Document Created");
        }

        public void Open()
        {
            Console.WriteLine("Opening the Excel");
        }

        public void Close()
        {
            Console.WriteLine("Closing the Excel");
        }
    }
}