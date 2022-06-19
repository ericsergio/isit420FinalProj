using System;
namespace ISIT420_eComCourseProject.Models
{
    public class ManufacturerTbl
    {
        private string? name;

        public ManufacturerTbl()
        {
            Products = new HashSet<ProductTbl>();
        }

        public int? Id { get; set; }
        public string? Name { get => name; set => name = value; }

        public virtual ICollection<ProductTbl> Products { get; set; }
    }
}

