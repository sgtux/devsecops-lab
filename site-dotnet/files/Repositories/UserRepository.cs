using System;
using Fakebook.Config;
using Fakebook.Helpers;
using Fakebook.Models;

namespace Fakebook.Repositories
{
    public class UserRepository : BaseRepository
    {
        public UserRepository(AppConfig appConfig) : base(appConfig) { }

        public UserModel Login(LoginModel loginModel)
        {
            UserModel userModel = null;
            var sql = $"SELECT Id, Nick, Email, Password, Photo, CreatedAt, UpdatedAt FROM \"User\" WHERE Email = '{loginModel.Email}' AND Password = '{HashHelper.Md5(loginModel.Password)}'";
            var result = Query(sql);
            if (result.HasRows)
            {
                result.Read();
                userModel = new UserModel();
                userModel.Id = GetValueOrNull<int>(result, "Id");
                userModel.Nick = GetValueOrNull<string>(result, "Nick");
                userModel.Email = GetValueOrNull<string>(result, "Email");
                userModel.Password = GetValueOrNull<string>(result, "Password");
                userModel.Photo = GetValueOrNull<string>(result, "Photo");
                userModel.CreatedAt = GetValueOrNull<DateTime>(result, "CreatedAt");
                userModel.UpdatedAt = GetValueOrNull<DateTime?>(result, "UpdatedAt");
            }
            return userModel;
        }
    }
}