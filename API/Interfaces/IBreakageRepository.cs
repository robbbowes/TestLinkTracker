using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IBreakageRepository
    {
        public Task<Breakage> GetDBBreakageAsync(int id);
        public Task<IEnumerable<GetTestDto>> AddBreakageAsync(AddBreakageDto addBreakageDto);
        public Task<GetBreakageDto> GetBreakageAsync(int id);
        public void Update(Breakage breakage);
        public Task<bool> SaveAllAsync();
    }
}