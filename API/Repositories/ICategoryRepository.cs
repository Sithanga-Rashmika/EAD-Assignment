public interface ICategoryRepository
{
    IEnumerable<Category> GetAllVendors();
    
    Vendor GetCategoryByID(string id);

    void AddCategory(Product product);

    void UpdateCategory(Product product);

    string DeleteCategory(string id);
}
