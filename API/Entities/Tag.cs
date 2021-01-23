namespace API.Entities
{
    public class Tag
    {
        public int Id { get; set; }
        public int TestId { get; set; }
        public Test Test { get; set; }
        public string Role { get; set; }
        public string Area { get; set; }
        public string Scope { get; set; }
        public string Topic { get; set; }
        public string Object { get; set; }
    }
}