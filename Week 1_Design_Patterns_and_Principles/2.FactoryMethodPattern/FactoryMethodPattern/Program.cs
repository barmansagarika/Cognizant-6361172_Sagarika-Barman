//Submitted by: Superset ID- 6361172
//Exercise 2: Implementing the Factory Method Pattern


using System;

namespace FactoryMethodPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("-----IMPLEMENTATION OF FACTORY METHOD PATTERN-----");
            Console.WriteLine("--------------------------------------------------");

            DocumentFactory wordFactory = new WordDocumentFactory();
            IDocument word = wordFactory.CreateDocument();
            word.Open();
            word.Close();

            Console.WriteLine(); 

            DocumentFactory pdfFactory = new PdfDocumentFactory();
            IDocument pdf = pdfFactory.CreateDocument();
            pdf.Open();
            pdf.Close();

            Console.WriteLine(); 

            DocumentFactory excelFactory = new ExcelDocumentFactory();
            IDocument excel = excelFactory.CreateDocument();
            excel.Open();
            excel.Close();

            Console.WriteLine("--------------------------");

            Console.ReadLine(); 
        }
    }
}