using System.Collections.Generic;

namespace API.DTOs
{
    public class GetTestDto
    {
        public string Name { get; set; }
        public List<GetTagDto> Tags { get; set; }
        public string TestLinkTest { get; set; }
    }
}