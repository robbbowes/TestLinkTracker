using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class TestRepository : ITestRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public TestRepository(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<GetTestDto> GetTestAsync(string name)
        {
            Test test = await _context.Tests
                .Where(t => t.Name == name)
                .Include(t => t.Tags)
                .SingleOrDefaultAsync();

            return _mapper.Map<GetTestDto>(test);
        }

        public async Task<IEnumerable<GetTestDto>> GetTestsAsync()
        {
            List<Test> tests = await _context.Tests
                .Include(t => t.Tags)
                .ToListAsync();
            return tests.Select(t => _mapper.Map<GetTestDto>(t)).ToList();
        }
    }
}