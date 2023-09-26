using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using vajrangorg.Models;

namespace vajrangorg.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult Textdatascraping()
    {
        return View();
    }


    public IActionResult Tabledatascraping()
    {
        return View();
    }
    public IActionResult Uppercase()
    {
        return View();
    }
    public IActionResult LoginValidator()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
