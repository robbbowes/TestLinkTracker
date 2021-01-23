using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class TestsController : BaseApiController
    {
        private readonly ITestRepository _testRepo;
        private readonly IMapper _mapper;
        public TestsController(ITestRepository testRepo, IMapper mapper)
        {
            _mapper = mapper;
            _testRepo = testRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GetTestDto>>> GetTests()
        {
            return Ok(await _testRepo.GetTestsAsync());
        }

        [HttpGet("{name}")]
        public async Task<ActionResult<IEnumerable<GetTestDto>>> GetTest(string name)
        {
            return Ok(await _testRepo.GetTestAsync(name));
        }

    }
}