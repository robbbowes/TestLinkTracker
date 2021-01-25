using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;

namespace API.Interfaces
{
    public interface ITestRepository
    {
        public Task<IEnumerable<GetTestDto>> GetTestsAsync();
        public Task<GetTestDto> GetTestAsync(int testId);
        public Task<IEnumerable<GetTestDto>> AddTestAsync(AddTestDto addTestDto);
    }
}