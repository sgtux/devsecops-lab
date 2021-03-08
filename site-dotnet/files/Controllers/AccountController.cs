using Microsoft.AspNetCore.Mvc;
using Fakebook.Models;
using Fakebook.Repositories;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Security.Claims;

namespace Fakebook.Controllers
{
    public class AccountController : Controller
    {
        public UserRepository _userRepository { get; set; }

        public AccountController(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromForm] LoginModel model)
        {
            var user = _userRepository.Login(model);
            if (user is null)
                return View("Index");

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Email),
                new Claim("NickName", user.Nick),
                new Claim(ClaimTypes.Role, "Administrator"),
            };

            var claimsIdentity = new ClaimsIdentity(
                claims, CookieAuthenticationDefaults.AuthenticationScheme);

            await HttpContext.SignInAsync(new ClaimsPrincipal(claimsIdentity));
            return Redirect("/");
        }

        [HttpGet]
        public async Task<IActionResult> Logout([FromForm] LoginModel model)
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Redirect("/");
        }

        protected override void Dispose(bool disposing)
        {
            _userRepository.Dispose();
        }
    }
}