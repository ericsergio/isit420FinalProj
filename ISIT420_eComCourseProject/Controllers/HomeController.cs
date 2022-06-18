using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ISIT420_eComCourseProject.Models;

namespace ISIT420_eComCourseProject.Controllers;

public class HomeController : Controller
{
    private readonly SportsCardsContext _context;
    private readonly IServiceProvider _serviceProvider;
    /*private readonly ILogger<HomeController> _logger;
    public HomeController(SportsCardsContext context
        , IServiceProvider serviceProvider
        , ILogger<HomeController> logger)
    {
        _context = context;
        _serviceProvider = serviceProvider;
       
    }
    */
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

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}