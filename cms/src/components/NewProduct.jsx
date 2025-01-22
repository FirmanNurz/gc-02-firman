export default function NewProduct() {
  return (
    <>
      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-product-section">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2">New Product / Update Product</h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <form id="product-form">
              <div className="mb-3">
                <label htmlFor="product-name">
                  Name <span className="text-danger fw-bold">*</span>
                </label>
                <input type="text" className="form-control" id="product-name" placeholder="Enter product name" autoComplete="off" required="" />
              </div>
              <div className="mb-3">
                <label htmlFor="product-category">
                  Category <span className="text-danger fw-bold">*</span>
                </label>
                <select id="product-category" className="form-select" required="">
                  <option value="" selected="" disabled="">
                    -- Select Category --
                  </option>
                  <option value={1}>Furniture</option>
                  <option value={2}>Workspace</option>
                  <option value={3}>Storage</option>
                  <option value={4}>Textile</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="product-desc">
                  Description <span className="text-danger fw-bold">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product-desc"
                  placeholder="Enter product description"
                  autoComplete="off"
                  required=""
                />
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="product-stock">
                      Stock <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="product-stock"
                      placeholder="Enter product stock"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="product-price">
                      Price <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="product-price"
                      placeholder="Enter product price"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="product-image">Image</label>
                <input type="text" className="form-control" id="product-image" placeholder="Enter product image url" autoComplete="off" />
              </div>
              <div className="row mt-5 mb-3">
                <div className="col-6">
                  <a className="btn btn-lg btn-light rounded-pill w-100 p-2" href="">
                    Cancel
                  </a>
                </div>
                <div className="col-6">
                  <button className="btn btn-lg btn-primary rounded-pill w-100 p-2" type="submit" href="">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
