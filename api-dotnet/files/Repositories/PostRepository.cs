using System;
using System.Collections.Generic;
using FakebookApi.Config;
using FakebookApi.Models;

namespace FakebookApi.Repositories
{
    public class PostRepository : BaseRepository
    {
        public PostRepository(AppConfig appConfig) : base(appConfig) { }

        public List<PostModel> GetAll()
        {
            List<PostModel> list = new List<PostModel>();
            var sql = $"SELECT Id, Text, Photo, UserId, AccessType, CreatedAt, UpdatedAt FROM \"Post\"";
            var result = Query(sql);
            if (result.HasRows)
            {
                while (result.Read())
                {
                    PostModel post = new PostModel();
                    post.Id = GetValueOrNull<int>(result, "Id");
                    post.Text = GetValueOrNull<string>(result, "Text");
                    post.Photo = GetValueOrNull<string>(result, "Photo");
                    post.UserId = GetValueOrNull<int>(result, "UserId");
                    post.AccessType = GetValueOrNull<int>(result, "AccessType");
                    post.CreatedAt = GetValueOrNull<DateTime>(result, "CreatedAt");
                    post.UpdatedAt = GetValueOrNull<DateTime?>(result, "UpdatedAt");
                    list.Add(post);
                }
            }
            return list;
        }

        public void Add(PostModel post)
        {
            var sql = $"INSERT INTO \"Post\" (Id, Text, Photo, UserId, AccessType, CreatedAt) VALUES (@Id, @Text, @Photo, @UserId, @AccessType, @CreatedAt)";
            post.CreatedAt = DateTime.Now;
            Dictionary<string, object> dic = new Dictionary<string, object>();
            dic.Add("@Id", post.Id);
            dic.Add("@Text", post.Text);
            dic.Add("@Photo", post.Photo);
            dic.Add("@UserId", post.UserId);
            dic.Add("@AccessType", post.AccessType);
            dic.Add("@CreatedAt", post.CreatedAt);
            ExecuteNonQuery(sql, dic);
        }

        public void Update(PostModel post)
        {
            var sql = $"UPDATE \"Post\" SET Text = @Text, Photo = @Photo, UserId = @UserId, AccessType = @AccessType, UpdatedAt = @UpdatedAt WHERE Id = @Id";
            post.UpdatedAt = DateTime.Now;
            Dictionary<string, object> dic = new Dictionary<string, object>();
            dic.Add("@Id", post.Id);
            dic.Add("@Text", post.Text);
            dic.Add("@Photo", post.Photo);
            dic.Add("@UserId", post.UserId);
            dic.Add("@AccessType", post.AccessType);
            dic.Add("@UpdatedAt", post.UpdatedAt);
            ExecuteNonQuery(sql, dic);
        }
    }
}