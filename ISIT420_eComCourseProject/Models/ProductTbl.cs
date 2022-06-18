using System;
namespace ISIT420_eComCourseProject.Models
{
	public partial class ProductTbl
	{
		public int Id { get; set; }
		public int Sport_fk { get; set; }
		public int Year { get; set; }
		public int Manufacturer_fk { get; set; }
		public string? MainSet { get; set; }
		public string? SubSet { get; set; }
		public string? PlayerName { get; set; }
		public string? CardNo { get; set; }
		public string? Parallel { get; set; }
		public string? Rookie { get; set; }
		public string? Auto { get; set; }
		public string? SerialNumbered { get; set; }
		public string? Memorabilia { get; set; }
		public string? PhotoURL { get; set; }
		public int? Pricing_fk { get; set; }
		public int? ListedProduct_fk { get; set; }

		public virtual ManufacturerTbl? Manufacturer { get; set; }
		public virtual PricingTbl? Price { get; set; }
		public virtual ListedProductTbl? Listing { get; set; }
		public virtual SportTbl? Sport { get; set; }

	}
}

/*
 * using System;
using System.Collections.Generic;

namespace NodeOrder500HW.Models
{
    public partial class OrdersTable
    {
        public int OrdersId { get; set; }
        public int StoreId { get; set; }
        public int SalesPersonId { get; set; }
        public int CdId { get; set; }
        public int PricePaid { get; set; }
        public string Date { get; set; } = null!;

        public virtual CdTable Cd { get; set; } = null!;
        public virtual SalesPersonTable SalesPerson { get; set; } = null!;
        public virtual StoreTable Store { get; set; } = null!;
    }
}
 */