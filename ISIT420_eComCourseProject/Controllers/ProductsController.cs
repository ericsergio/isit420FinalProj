using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ISIT420_eComCourseProject.Models;
using Microsoft.EntityFrameworkCore;

namespace ISIT420_eComCourseProject.Controllers;
[Route("api/[controller]/[Action]")]
//Controller = Products
//Action == [ActionName]
//[Route("http://localhost:49643/api/Products")]
[ApiController]
public class ProductsController : ControllerBase
{
    //localhost/api/Products
    //Get
    [ActionName("AllProducts")]
    public async Task<ActionResult<IEnumerable<ProductTbl>>> Get()
    {
        var context = new SportsCardsContext();
        return await context.ProductTbls.Select(x => new ProductTbl
        {
            Id = x.Id,
            Sport_fk = x.Sport_fk,
            Year = x.Year,
            Manufacturer_fk = x.Manufacturer_fk,
            MainSet = x.MainSet,
            SubSet = x.SubSet,
            PlayerName = x.PlayerName,
            CardNo = x.CardNo,
            Parallel = x.Parallel,
            Rookie = x.Rookie, 
            Auto = x.Auto,
            SerialNumbered = x.SerialNumbered,
            Memorabilia = x.Memorabilia,
            PhotoURL = x.PhotoURL,
            Pricing_fk = x.Pricing_fk,
            ListedProduct_fk = x.ListedProduct_fk
        }).ToListAsync();
    }

    [ActionName("GetUniquePlayers")]
    public async Task<ActionResult<IEnumerable<ProductTbl>>> GetUniquePlayers()
    {
        var context = new SportsCardsContext();
        return await context.ProductTbls.Select(x => new ProductTbl
        {
            PlayerName = x.PlayerName
            
        }).Distinct().ToListAsync();
    }


    //[ActionName("GetDistinctPlayerNames")]
    //public IEnumerable<String> GetDistinctPlayerNames()
    //{
    //    var context = new SportsCardsContext();
    //    var distinctPlayerNames = context.ProductTbls.Select(p => p.PlayerName).Distinct();
    //    return distinctPlayerNames;
    //}










    //[HttpGet]
    //[ActionName("GetPlayerNames")]
    //public async Task<ActionResult<IEnumerable<ProductTbl>>> GetPlayerNamesAsync()
    //{
    //    var context = new SportsCardsContext();
    //    var descriptQuery = (from eachProduct in context.ProductTbls
    //                         select new
    //                         {
    //                             eachProduct.PlayerName,
    //                         }).FirstOrDefault();
    //    return await context.ProductTbls.Select(x => new ProductTbl) 
    //   {
    //        PlayerName = x.PlayerName,
    //   }

    //}
}