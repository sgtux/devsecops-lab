using Microsoft.AspNetCore.Mvc;
using FakebookApi.Models;
using FakebookApi.Repositories;

namespace FakebookApi.Controllers
{
    [Route("api/[controller]")]
    public class PeopleController : Controller
    {
        private readonly UserRepository _userRepository;

        public PeopleController(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_userRepository.All());
        }

        [HttpGet("{id}")]
        public IActionResult GetAll(int id)
        {
            return Ok(_userRepository.GetById(id));
        }
    }
}