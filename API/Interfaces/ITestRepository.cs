using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;

namespace API.Interfaces
{
    public interface ITestRepository
    {
        public Task<IEnumerable<GetTestDto>> GetTestsAsync();
        public Task<GetTestDto> GetTestAsync(string name);
        public Task<IEnumerable<GetTestDto>> AddTestAsync(AddTestDto addTestDto);
    }
}