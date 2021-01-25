using System;

namespace API.DTOs
{
    public class GetBreakageDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Info { get; set; }
        public string Ticket { get; set; }
    }
}