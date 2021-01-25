using System;

namespace API.Entities
{
    public class Breakage
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public Test Test { get; set; }
        public int TestId { get; set; }
        public string Info { get; set; }
        public string Ticket { get; set; }
    }
}