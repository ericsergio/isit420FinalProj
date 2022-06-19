using System;
namespace ISIT420_eComCourseProject.Models
{
	public partial class PricingTbl
	{
		public PricingTbl()
		{
			Listings = new HashSet<ListedProductTbl>();
			Products = new HashSet<ProductTbl>();
		}

		public int? Id { get; set; }
		public string? AvgSaleAll { get; set; }
		public string? AvgSaleMatchesBaseProduct { get; set; }
		public string? AvgtSaleMatchesCardNo { get; set; }

		public virtual ICollection<ProductTbl> Products { get; set; }
		public virtual ICollection<ListedProductTbl> Listings { get; set; }
	}
}

