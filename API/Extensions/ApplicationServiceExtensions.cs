using API.Data;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<ITestRepository, TestRepository>();
            services.AddScoped<IBreakageRepository, BreakageRepository>();
            services.AddAutoMapper(typeof(AutoMapperProfile).Assembly);
                        services.AddDbContext<DataContext>(options => 
            {
                options.UseSqlite(config.GetConnectionString("SqliteConnection"));
            });

            return services;
        }
    }
}