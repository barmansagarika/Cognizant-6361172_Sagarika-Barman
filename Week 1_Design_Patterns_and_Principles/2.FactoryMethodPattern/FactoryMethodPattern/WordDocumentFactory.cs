//Submitted by: Superset ID- 6361172
//Exercise 2: Implementing the Factory Method Pattern

namespace FactoryMethodPattern
{
    public class WordDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new WordDocument();
        }
    }
}