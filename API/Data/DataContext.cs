using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }

        public DbSet<Test> Tests { get; set; }
        public DbSet<Tag> Tags { get; set; }
    }
}