using System;

namespace API.DTOs
{
    public class AddBreakageDto
    {
        public DateTime Date { get; set; } = DateTime.Now;
        public string Info { get; set; }
        public string Ticket { get; set; }
        public int TestId { get; set; }
    }
}