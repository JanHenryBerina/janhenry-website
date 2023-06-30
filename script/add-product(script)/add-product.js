function formContentBtn() {
  // Retrieve the input values
  let inputProductNumber = parseInt(document.getElementById('input-product-number').value);
  let inputProductName = document.getElementById('input-product-name').value;
  let inputProductPrice = parseFloat(document.getElementById('input-product-price').value);
  let inputProductQuantity = parseInt(document.getElementById('input-product-quantity').value);
  let inputProductImage = document.getElementById('input-product-image').value;
  let inputProductCategory = document.getElementById('input-product-category').value;
  let inputProductDescriptions = document.getElementById('input-product-descriptions').value;

  
  
  if (
    inputProductName.trim() === '' ||
    inputProductNumber.toString().trim() === '' ||
    inputProductPrice.toString().trim() === '' ||
    inputProductQuantity.toString().trim() === '' ||
    inputProductCategory.trim() === ''
  ) {
    alert('Fields must be filled');
  } else {
    // Retrieve existing products from localStorage
    let products = localStorage.getItem('products');
    products = products ? JSON.parse(products) : [];

    // Create a new product object
    let newProduct = {
      inputProductNumber: inputProductNumber,
      inputProductName: inputProductName,
      inputProductPrice: inputProductPrice,
      inputProductQuantity: inputProductQuantity,
      inputProductCategory: inputProductCategory,
      inputProductImage: inputProductImage,
      inputProductDescriptions: inputProductDescriptions
    };

    // Add the new product to the array
    products.push(newProduct);

    // Store the updated products array in localStorage
    localStorage.setItem('products', JSON.stringify(products));

    // Clear the input fields
    document.getElementById('input-product-number').value = '';
    document.getElementById('input-product-name').value = '';
    document.getElementById('input-product-price').value = '';
    document.getElementById('input-product-quantity').value = '';
    document.getElementById('input-product-category').value = '';
    document.getElementById('input-product-image').value = '';
    document.getElementById('input-product-descriptions').value = '';
  }
}