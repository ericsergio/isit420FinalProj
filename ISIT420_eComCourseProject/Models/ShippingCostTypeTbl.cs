using System;
namespace ISIT420_eComCourseProject.Models
{
	public partial class ShippingCostTypeTbl
	{
		public ShippingCostTypeTbl()
		{
			Listings = new HashSet<ListedProductTbl>();
		}

		public int Id { get; set; }
		public string Name { get; set; }

		public virtual ICollection<ListedProductTbl> Listings { get; set; }
	}
}