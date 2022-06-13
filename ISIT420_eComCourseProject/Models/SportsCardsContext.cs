using System;
using System.Collections.Generic;
using Microsoft.AspNetCore;
using Microsoft.Net;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;



namespace ISIT420_eComCourseProject.Models
{
    public partial class SportsCardsContext : DbContext
	{
        public SportsCardsContext()
        {
        }

        public SportsCardsContext(DbContextOptions<SportsCardsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ListingTypeTbl> ListingTypeTbls { get; set; } = null!;
        public virtual DbSet<ShippingCostTypeTbl> ShippingCostTypeTbls { get; set; } = null!;
        public virtual DbSet<ListedProductTbl> ListedProductTbls { get; set; } = null!;
        public virtual DbSet<PricingTbl> PricingTbls { get; set; } = null!;
        public virtual DbSet<ManufacturerTbl> ManufacturerTbls { get; set; } = null!;
        public virtual DbSet<SportTbl> SportTbls { get; set; } = null!;
        public virtual DbSet<ProductTbl> ProductTbls { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server = tcp:es2022.database.windows.net, 1433; Initial Catalog = SportCards; Persist Security Info = False; User ID = isit420ericsergiodb; Password=<password>; MultipleActiveResultSets = False; Encrypt = True; TrustServerCertificate = False; Connection Timeout = 30");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ListingTypeTbl>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("ListingTypeTbl");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Name).HasColumnName("name");
                entity.Property(e => e.Name).HasMaxLength(12);
            });



            modelBuilder.Entity<ShippingCostTypeTbl>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("ShippingCostTypeTbl");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Name).HasColumnName("name");
                entity.Property(e => e.Name).HasMaxLength(65);
            });


            modelBuilder.Entity<ListedProductTbl>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("ListedProductTbl");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Sport_fk).HasColumnName("sport_fk");
                entity.HasOne(d => d.Sport)                                                                                                                                                              
                                    .WithMany(p => p.Listings)
                                    .HasForeignKey(d => d.Sport_fk)
                                    .OnDelete(DeleteBehavior.ClientSetNull)
                                    .HasConstraintName("FK_ListedProductTbl_SportTbl");
                
                entity.Property(e => e.Title).HasColumnName("title");
                entity.Property(e => e.Title).HasMaxLength(265);
                entity.Property(e => e.ListingType_fk).HasColumnName("listingtype_fk");
                entity.HasOne(d => d.ListingType)                                                                                                                                                              
                                    .WithMany(p => p.Listings)
                                    .HasForeignKey(d => d.ListingType_fk)
                                    .OnDelete(DeleteBehavior.ClientSetNull)
                                    .HasConstraintName("FK_ListedProductTbl_ListingTypeTbl");
                
                entity.Property(e => e.Pricing_fk).HasColumnName("pricing_fk");
                entity.HasOne(d => d.Price)                                                                                                                                                              
                                    .WithMany(p => p.Listings)
                                    .HasForeignKey(d => d.Pricing_fk)
                                    .OnDelete(DeleteBehavior.ClientSetNull)
                                    .HasConstraintName("FK_ListedProductTbl_PricingTbl");
                
                entity.Property(e => e.ShippingCostType_fk).HasColumnName("shippingcosttype_fk");
                entity.HasOne(d => d.ShippingCostType)                                                                                                                                                              
                                    .WithMany(p => p.Listings)
                                    .HasForeignKey(d => d.ShippingCostType_fk)
                                    .OnDelete(DeleteBehavior.ClientSetNull)
                                    .HasConstraintName("FK_ListedProductTbl_ShippingCostTypeTbl");
                
                entity.Property(e => e.ShippingCost).HasColumnName("shippingcost");
                entity.Property(e => e.ShippingCost).HasMaxLength(25);
            });




            modelBuilder.Entity<PricingTbl>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("PricingTbl");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.AvgSaleAll).HasColumnName("AvgSaleAll");
                entity.Property(e => e.AvgSaleMatchesBaseProduct).HasColumnName("AvgSaleMatchesBaseProduct");
                entity.Property(e => e.AvgtSaleMatchesCardNo).HasColumnName("AvgtSaleMatchesCardNo");
                entity.Property(e => e.AvgSaleAll).HasMaxLength(65);
                entity.Property(e => e.AvgSaleMatchesBaseProduct).HasMaxLength(65);
                entity.Property(e => e.AvgtSaleMatchesCardNo).HasMaxLength(65);
            });



            modelBuilder.Entity<ManufacturerTbl>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("ManufacturerTbl");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Name).HasColumnName("name");
                entity.Property(e => e.Name).HasMaxLength(65);
            });


            modelBuilder.Entity<SportTbl>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("SportTbl");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Name).HasColumnName("name");
                entity.Property(e => e.Name).HasMaxLength(65);
            });


            modelBuilder.Entity<ProductTbl>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("ProductTbl");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Sport_fk).HasColumnName("sport_fk");
                entity.HasOne(d => d.Sport)                                                                                                                                                              
                                    .WithMany(p => p.Products)
                                    .HasForeignKey(d => d.Sport_fk)
                                    .OnDelete(DeleteBehavior.ClientSetNull)
                                    .HasConstraintName("FK_ProductTbl_SportTbl");
                
                entity.Property(e => e.Year).HasColumnName("year");
                entity.Property(e => e.Manufacturer_fk).HasColumnName("manufacturer_fk");
                entity.HasOne(d => d.Manufacturer)                                                                                                                                                              
                                    .WithMany(p => p.Products)
                                    .HasForeignKey(d => d.Manufacturer_fk)
                                    .OnDelete(DeleteBehavior.ClientSetNull)
                                    .HasConstraintName("FK_ProductTbl_ManufacturerTbl");
                
                entity.Property(e => e.MainSet).HasColumnName("mainset");
                entity.Property(e => e.MainSet).HasMaxLength(40);
                entity.Property(e => e.SubSet).HasColumnName("subset");
                entity.Property(e => e.SubSet).HasMaxLength(40);
                entity.Property(e => e.PlayerName).HasColumnName("playerName");
                entity.Property(e => e.PlayerName).HasMaxLength(60);
                entity.Property(e => e.CardNo).HasColumnName("cardNo");
                entity.Property(e => e.CardNo).HasMaxLength(20);
                entity.Property(e => e.Parallel).HasColumnName("parallel");
                entity.Property(e => e.Parallel).HasMaxLength(40);
                entity.Property(e => e.Rookie).HasColumnName("rookie");
                entity.Property(e => e.Rookie).HasMaxLength(1);
                entity.Property(e => e.Auto).HasColumnName("auto");
                entity.Property(e => e.Auto).HasMaxLength(1);
                entity.Property(e => e.SerialNumbered).HasColumnName("serialNumbered");
                entity.Property(e => e.SerialNumbered).HasMaxLength(20);
                entity.Property(e => e.Memorabilia).HasColumnName("memorabilia");
                entity.Property(e => e.Memorabilia).HasMaxLength(20);
                entity.Property(e => e.PhotoURL).HasColumnName("photoURL");
                entity.Property(e => e.PhotoURL).HasMaxLength(250);
                entity.Property(e => e.Pricing_fk).HasColumnName("pricing_fk");
                entity.HasOne(d => d.Price)                                                                                                                                                              
                                    .WithMany(p => p.Products)
                                    .HasForeignKey(d => d.Pricing_fk)
                                    .OnDelete(DeleteBehavior.ClientSetNull)
                                    .HasConstraintName("FK_ProductTbl_PricingTbl");
                
                entity.Property(e => e.ListedProduct_fk).HasColumnName("listedproduct_fk");
                entity.HasOne(d => d.Listing)
                                    .WithMany(p => p.Products)
                                    .HasForeignKey(d => d.ListedProduct_fk)
                                    .OnDelete(DeleteBehavior.ClientSetNull)
                                    .HasConstraintName("FK_ProductTbl_ListedProductsTbl");
                
            });


        OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
