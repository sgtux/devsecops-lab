using Microsoft.AspNetCore.Mvc;
using FakebookApi.Models;
using Microsoft.AspNetCore.Authorization;
using FakebookApi.Repositories;
using System.Linq;
using System;

namespace FakebookApi.Controllers
{
    [Authorize]
    public class PostController : Controller
    {
        private PostRepository _postRepository;

        public PostController(PostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Create()
        {
            return PartialView("_CreatePost");
        }

        [HttpPost]
        public IActionResult Create(PostModel model)
        {
            model.UserId = Convert.ToInt32(User.Claims.First(p => p.Type == "Id").Value);
            _postRepository.Add(model);
            return PartialView("_CreatePost", model);
        }
    }
}