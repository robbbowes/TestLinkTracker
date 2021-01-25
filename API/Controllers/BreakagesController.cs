using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BreakagesController : BaseApiController
    {
        private readonly IBreakageRepository _breakageRepo;
        private readonly IMapper _mapper;
        public BreakagesController(IBreakageRepository breakageRepo, IMapper mapper)
        {
            _mapper = mapper;
            _breakageRepo = breakageRepo;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetBreakageDto>> GetBreakage(int id)
        {
            return await _breakageRepo.GetBreakageAsync(id);
        }

        [HttpPost]
        public async Task<ActionResult<GetTestDto>> AddBreakages(AddBreakageDto addBreakageDto)
        {
            return await _breakageRepo.AddBreakageAsync(addBreakageDto);
        }

        [HttpPut]
        public async Task<ActionResult> EditBreakage(EditBreakageDto editBreakageDto)
        {
            Breakage breakage = await _breakageRepo.GetDBBreakageAsync(editBreakageDto.Id);
            if (breakage == null) return NotFound();

            _mapper.Map(editBreakageDto, breakage);
            _breakageRepo.Update(breakage);
            if (await _breakageRepo.SaveAllAsync()) return NoContent();

            return BadRequest("Failed to update breakage");
        }

    }
}