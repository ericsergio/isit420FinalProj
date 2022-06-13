using System;
using System.Collections.Generic;

namespace ISIT420_eComCourseProject.Models
{
	public partial class ListingTypeTbl
	{
		public ListingTypeTbl()
		{
            Listings = new HashSet<ListedProductTbl>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<ListedProductTbl> Listings { get; set; }
    }
}