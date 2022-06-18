using System;
namespace ISIT420_eComCourseProject.Models
{
	public partial class SportTbl
	{
		public SportTbl()
		{
            Listings = new HashSet<ListedProductTbl>();
			Products = new HashSet<ProductTbl>();
		}

		public int? Id { get; set; }
        public string? Name { get; set; }

		public virtual SportTbl? Sport { get; set; }
		public virtual ICollection<ProductTbl>? Products { get; set; } = null!;
		public virtual ICollection<ListedProductTbl>? Listings  { get; set; }
	}
}