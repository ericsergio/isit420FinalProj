using System;
namespace ISIT420_eComCourseProject.Models
{
    public partial class ListedProductTbl
    {
        private ManufacturerTbl manufacturer;

        public ListedProductTbl()
        {
            Products = new HashSet<ProductTbl>();
            Listings = new HashSet<ListedProductTbl>();
        }

        public int Id { get; set; }
        public int? Sport_fk { get; set; }
        public string? Title { get; set; }
        public int? ListingType_fk { get; set; }
        public int? Pricing_fk { get; set; }
        public int? ShippingCostType_fk { get; set; }
        public string? ShippingCost { get; set; }

        public virtual ManufacturerTbl Manufacturer { get => manufacturer; set => manufacturer = value; }
        public virtual PricingTbl Price { get; set; }
        public virtual ListedProductTbl Listing { get; set; }
        public virtual ListedProductTbl ListingType { get; set; }
        public virtual SportTbl Sport { get; set; }
        public virtual ShippingCostTypeTbl ShippingCostType { get; set; }
        public virtual ICollection<ProductTbl> Products { get; set; }
        public virtual ICollection<ListedProductTbl> Listings { get; set; }

    }
}