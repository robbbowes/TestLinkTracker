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

        public async Task<IEnumerable<GetTestDto>> AddTestAsync(AddTestDto addTestDto)
        {
            Test test = _mapper.Map<Test>(addTestDto);
            await _context.AddAsync(test);
            await _context.SaveChangesAsync();

            List<Test> tests = await _context.Tests.ToListAsync();
            return tests.Select(t => _mapper.Map<GetTestDto>(t)).ToList();
        }

        public async Task<GetTestDto> GetTestAsync(int testId)
        {
            Test test = await _context.Tests
                .Where(t => t.Id == testId)
                .Include(t => t.Tags)
                .Include(t => t.Breakage)
                .SingleOrDefaultAsync();

            return _mapper.Map<GetTestDto>(test);
        }

        public async Task<IEnumerable<GetTestDto>> GetTestsAsync()
        {
            List<Test> tests = await _context.Tests
                .Include(t => t.Tags)
                .Include(t => t.Breakage)
                .ToListAsync();
            return tests.Select(t => _mapper.Map<GetTestDto>(t)).ToList();
        }
    }
}