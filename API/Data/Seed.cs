using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public static class Seed
    {
        public static async Task SeedTests(DataContext context)
        {
            if (await context.Tests.AnyAsync()) return;

            var testData = await System.IO.File.ReadAllTextAsync("Data/seed.json");
            var tests = JsonSerializer.Deserialize<List<Test>>(testData);

            foreach (var test in tests)
            {
                context.Tests.Add(test);
            }

            await context.SaveChangesAsync();
        }
    }
}