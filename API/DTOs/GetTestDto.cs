using System.Collections.Generic;

namespace API.DTOs
{
    public class GetTestDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<GetTagDto> Tags { get; set; }
        public string TestLinkTest { get; set; }
        public GetBreakageDto Breakage { get; set; }
        public string LastChecked { get; set; }
        public string Observations { get; set; }
    }
}