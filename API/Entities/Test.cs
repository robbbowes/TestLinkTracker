using System.Collections.Generic;

namespace API.Entities
{
    public class Test
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Tag> Tags { get; set; }
        public string TestLinkTest { get; set; }
        public string LastChecked { get; set; }
        public string Observations { get; set; }
        public Breakage Breakage { get; set; }
    }
}