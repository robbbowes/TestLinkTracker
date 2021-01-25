using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Test, GetTestDto>();
            CreateMap<AddTestDto, Test>();

            CreateMap<Tag, GetTagDto>();
            CreateMap<AddTagDto, Tag>();

            CreateMap<Breakage, GetBreakageDto>();
            CreateMap<AddBreakageDto, Breakage>();
        }
    }
}