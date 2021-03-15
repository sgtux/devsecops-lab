using System.Collections.Generic;
using FakebookApi.Config;
using FakebookApi.Helpers;
using FakebookApi.Models;

namespace FakebookApi.Repositories
{
    public class UserRepository : BaseRepository
    {
        public UserRepository(AppConfig appConfig) : base(appConfig) { }

        public UserModel GetById(int id)
        {
            var result = Query($"SELECT Id, Nick, Email, Password, CoverPhoto, PerfilPhoto, CreatedAt, UpdatedAt FROM \"User\" WHERE Id = {id}");
            if (result.HasRows && result.Read())
                return new UserModel(result);
            return null;
        }

        public UserModel Login(LoginModel loginModel)
        {
            var result = Query($"SELECT Id, Nick, Email, Password, CoverPhoto, PerfilPhoto, CreatedAt, UpdatedAt FROM \"User\" WHERE Email = '{loginModel.Email}' AND Password = '{HashHelper.Md5(loginModel.Password)}'");
            if (result.HasRows && result.Read())
                return new UserModel(result);
            return null;
        }

        public List<UserModel> All()
        {
            var list = new List<UserModel>();
            var result = Query($"SELECT Id, Nick, Email, Password, CoverPhoto, PerfilPhoto, CreatedAt, UpdatedAt FROM \"User\" ORDER BY Nick");
            if (result.HasRows)
                while (result.Read())
                    list.Add(new UserModel(result));
            return list;
        }
    }
}