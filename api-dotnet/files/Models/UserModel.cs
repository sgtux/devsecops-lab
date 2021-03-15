using System;
using FakebookApi.Helpers;
using Npgsql;

namespace FakebookApi.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string Nick { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string CoverPhoto { get; set; }
        public string PerfilPhoto { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public UserModel() { }

        public UserModel(NpgsqlDataReader dataReader) => FillFromDataReader(dataReader);

        public void FillFromDataReader(NpgsqlDataReader dataReader)
        {
            Id = DatabaseHelper.GetValueOrNull<int>(dataReader, "Id");
            Nick = DatabaseHelper.GetValueOrNull<string>(dataReader, "Nick");
            Email = DatabaseHelper.GetValueOrNull<string>(dataReader, "Email");
            Password = DatabaseHelper.GetValueOrNull<string>(dataReader, "Password");
            CoverPhoto = DatabaseHelper.GetValueOrNull<string>(dataReader, "CoverPhoto");
            PerfilPhoto = DatabaseHelper.GetValueOrNull<string>(dataReader, "PerfilPhoto");
            CreatedAt = DatabaseHelper.GetValueOrNull<DateTime>(dataReader, "CreatedAt");
            UpdatedAt = DatabaseHelper.GetValueOrNull<DateTime?>(dataReader, "UpdatedAt");
        }
    }
}