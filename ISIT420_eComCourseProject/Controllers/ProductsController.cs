using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ISIT420_eComCourseProject.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

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
    [ActionName("GetUniqueYear")]
    public async Task<ActionResult<IEnumerable<ProductTbl>>> GetUniqueYear()
    {
        var context = new SportsCardsContext();
        return await context.ProductTbls.Select(x => new ProductTbl
        {
            Year = x.Year

        }).Distinct().ToListAsync();
    }

    [HttpGet("{player}")]
    [ActionName("GetYearsAverageCardSalePrice")]
    public double GetYearsAverageCardSalePrice(string player)
    {
        var context = new Models.SportsCardsContext();

        var playerQuery = context.ProductTbls.Join(context.PricingTbls, o => o.Id, i => i.Id, (product, pricing) => new { Title = product.PlayerName, FinalSales = pricing.Finalsaleamount })
                                .Where(o => o.Title.Contains(player))
                                .Average(o => Convert.ToDouble(o.FinalSales));
        return playerQuery;

    }

    [ActionName("GetTotalSalesForEachManufacturer")]
    public List<ManufacturerSales> GetTotalSalesForEachManufacturer()
    {
        var context = new Models.SportsCardsContext();
        List<ManufacturerSales> myList = new List<ManufacturerSales>();

        var manufacturerQuery = (from c in (from i in context.ProductTbls
                                            join pricing in context.PricingTbls on i.Id equals pricing.Id
                                            select new
                                            {
                                                Manufacturer = i.Manufacturer_fk,
                                                Sum = pricing.Finalsaleamount
                                            })
                                 group c by c.Manufacturer
                                           into selection
                                 select new ManufacturerSales
                                 {
                                     Manufacturer = Convert.ToInt32(selection.Key),
                                     Sum = selection.Sum(x => Convert.ToDouble(x.Sum))
                                 }).ToList();
        return manufacturerQuery;

        //var manufacturerQuery = (from oneItem in context.ManufacturerTbls
        //                         join pricing in context.PricingTbls on oneItem.Id equals pricing.Id
        //                         group new { oneItem, pricing } by oneItem.Name into selection
        //                         select new
        //                         {
        //                             Manufacturer = selection.Key,
        //                             SumOfSales = selection.Sum(x => Convert.ToInt32(x.pricing.Finalsaleamount))
        //                         }).ToList();
    }



    [HttpGet("{year}")]
    [ActionName("GetSumOfCardsSoldByYear")]
    public double GetSumOfCardsSoldByYear(int year)
    {
        var context = new Models.SportsCardsContext();

        var yearQuery = context.ProductTbls.Join(context.PricingTbls,
                                                 o => o.Id,
                                                 i => i.Id,
                                                 (product, pricing) => new { Year = product.Year, FinalSaleAmt = pricing.Finalsaleamount })
            .Where(product => product.Year.Equals(year))
            .Sum(pricing => Convert.ToDouble(pricing.FinalSaleAmt));

        return yearQuery;

    }






}

public class ManufacturerSales
{
    public int Manufacturer { get; set; }
    public Double Sum { get; set; }
}