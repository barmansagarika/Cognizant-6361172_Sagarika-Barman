//Submitted by: Superset ID- 6361172
//Exercise 2: Implementing the Factory Method Pattern

using FactoryMethodPattern;

namespace FactoryMethodPattern
{
    public class ExcelDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new ExcelDocument();
        }
    }
}