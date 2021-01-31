using System.Collections.Generic;

namespace API.DTOs
{
    public class AddTestDto
    {
        public string Name { get; set; }
        public List<GetTagDto> Tags { get; set; }
        public string TestLinkTest { get; set; }
        public string LastChecked { get; set; }
        public string Observations { get; set; }
    }
}