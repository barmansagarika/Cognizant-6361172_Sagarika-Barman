using Microsoft.EntityFrameworkCore;
using RetailStore.Models;

namespace RetailStore.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=DESKTOP-LD1RIV0\\SQLEXPRESS;Database=RetailStoreDB;Trusted_Connection=True;TrustServerCertificate=True;");
        }
    }
}
