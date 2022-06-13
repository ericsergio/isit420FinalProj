using System;
namespace ISIT420_eComCourseProject.Models
{
	public class ManufacturerTbl
	{
		public ManufacturerTbl()
		{
			Products = new HashSet<ProductTbl>();
		}

		public int Id { get; set; }
		public string Name { get; set; }

		public virtual ICollection<ProductTbl> Products { get; set; }
	}
}

