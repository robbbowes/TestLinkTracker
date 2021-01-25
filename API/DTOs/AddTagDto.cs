namespace API.DTOs
{
    public class AddTagDto
    {
        public string Role { get; set; }
        public string Area { get; set; }
        public string Topic { get; set; }
        public string Scope { get; set; }
        public string Object { get; set; }
        public int TestId { get; set; } 
    }
}