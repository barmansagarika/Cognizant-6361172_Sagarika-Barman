//Submitted by: Superset ID- 6361172
//Exercise 2: Implementing the Factory Method Pattern

using System;

namespace FactoryMethodPattern
{
    public class PdfDocument : IDocument
    {
        public PdfDocument()
        {
            Console.WriteLine("PDF Document Created");
        }

        public void Open()
        {
            Console.WriteLine("Opening the PDF");
        }

        public void Close()
        {
            Console.WriteLine("Closing the PDF");
        }
    }
}