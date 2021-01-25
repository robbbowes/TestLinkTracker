using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class BreakageRepository : IBreakageRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public BreakageRepository(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<GetBreakageDto> GetBreakageAsync(int id)
        {
            GetBreakageDto breakageDto = null;
            Breakage breakage = await _context.Breakages.Where(b => b.Id == id).SingleOrDefaultAsync();
            if (breakage != null)
            {
                breakageDto = _mapper.Map<GetBreakageDto>(breakage);
            }
            return breakageDto;
        }
        public async Task<GetTestDto> AddBreakageAsync(AddBreakageDto addBreakageDto)
        {
            GetTestDto testDto = null;
            Test test = await _context.Tests
                .Where(t => t.Id == addBreakageDto.TestId)
                .Include(t => t.Tags)
                .Include(t => t.Breakage)
                .SingleOrDefaultAsync();

            if (test != null)
            {
                Breakage breakage = _mapper.Map<Breakage>(addBreakageDto);
                await _context.Breakages.AddAsync(breakage);
                await _context.SaveChangesAsync();
                testDto = _mapper.Map<GetTestDto>(test);
            }
            return testDto;
        }

        public void Update(Breakage breakage)
        {
            _context.Entry(breakage).State = EntityState.Modified;
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Breakage> GetDBBreakageAsync(int id)
        {
            return await _context.Breakages.FirstOrDefaultAsync(b => b.Id == id);
        }
    }
}