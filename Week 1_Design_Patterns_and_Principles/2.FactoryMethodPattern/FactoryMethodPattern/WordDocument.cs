//Submitted by: Superset ID- 6361172
//Exercise 2: Implementing the Factory Method Pattern

using System;

namespace FactoryMethodPattern
{
    public class WordDocument : IDocument
    {
        public WordDocument()
        {
            Console.WriteLine("Word Document Created");
        }

        public void Open()
        {
            Console.WriteLine("Opening the Word");
        }

        public void Close()
        {
            Console.WriteLine("Closing the Word");
        }
    }
}
