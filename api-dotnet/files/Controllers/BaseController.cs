using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace FakebookApi.Controllers
{
    public class BaseController : Controller
    {
        protected int UserId => Convert.ToInt32(User.Claims.First(p => p.Type == "Id").Value);
    }
}