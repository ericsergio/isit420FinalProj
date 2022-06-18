using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ISIT420_eComCourseProject.Models;

namespace ISIT420_eComCourseProject.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public List<ProductTbl> Get()
    {
        List<ProductTbl> ProductList = new();
        var context = new SportsCardsContext();
        var productTblQuery = from eachIteration in context.ProductTbls
                              select new
                              {
                                  eachIteration.Id,
                                  eachIteration.Sport_fk,
                                  eachIteration.Year,
                                  eachIteration.Manufacturer_fk,
                                  eachIteration.MainSet,
                                  eachIteration.SubSet,
                                  eachIteration.PlayerName,
                                  eachIteration.CardNo,
                                  eachIteration.Parallel,
                                  eachIteration.Rookie,
                                  eachIteration.Auto,
                                  eachIteration.SerialNumbered,
                                  eachIteration.Memorabilia,
                                  //eachIteration.PhotoURL,
                                  //eachIteration.Pricing_fk,
                                  //eachIteration.ListedProduct_fk
                              };
        foreach (var item in productTblQuery)
        {
            ProductTbl pt = new();
            pt.Id = item.Id;
            pt.Sport_fk = item.Sport_fk;
            pt.Year = item.Year;
            pt.Manufacturer_fk = item.Manufacturer_fk;
            pt.MainSet = item.MainSet;
            pt.SubSet = item.SubSet;
            pt.PlayerName = item.PlayerName;
            pt.CardNo = item.CardNo;
            pt.Parallel = item.Parallel;
            pt.Rookie = item.Rookie;
            pt.Auto = item.Auto;
            pt.SerialNumbered = item.SerialNumbered;
            pt.Memorabilia = item.Memorabilia;
            //pt.PhotoURL = item.PhotoURL;
            //pt.Pricing_fk = item.Pricing_fk;
            //pt.ListedProduct_fk = item.ListedProduct_fk;
            ProductList.Add(pt);
        }
        return ProductList;
    }
    
    /*private readonly ILogger<HomeController> _logger;

    public ProductController(ILogger<HomeController> logger)
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
    }*/
}