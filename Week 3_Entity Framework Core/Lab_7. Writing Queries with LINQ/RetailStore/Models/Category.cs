namespace RetailStore.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public List<Product> Product { get; set; } = new();
    }
}
