//Submitted by: Superset ID- 6361172
//Exercise 2: Implementing the Factory Method Pattern

namespace FactoryMethodPattern
{
    public class PdfDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new PdfDocument();
        }
    }
}