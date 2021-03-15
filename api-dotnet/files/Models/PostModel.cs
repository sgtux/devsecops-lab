using System;

namespace FakebookApi.Models
{
    public class PostModel
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Photo { get; set; }
        public int AccessType { get; set; }
        public int UserId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}