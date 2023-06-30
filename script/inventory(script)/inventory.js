function populateForm() {
  // Retrieve the products array from localStorage
  let products = localStorage.getItem('products');
  products = products ? JSON.parse(products) : [];

  let tableProductContainer = document.getElementById('tableData-product-container');

  // Clear the table before populating it again
    tableProductContainer.innerHTML = '';

  // Loop through each product and create a table row for it
  products.forEach((product) => {
    let addProductTr = document.createElement('tr');
    addProductTr.className = 'display-table-data';

    // Set the inner HTML of the new table row with the product data
    addProductTr.innerHTML = `
      <td>${product.inputProductNumber}</td>
      <td>${product.inputProductName}</td>
      <td>${product.inputProductPrice}</td>
      <td>${product.inputProductQuantity}</td>
      <td>Uploaded</td>
      <td>${product.inputProductCategory}</td>
      <td>Posted</td>
    `;

    // Append the new table row to the table
    tableProductContainer.appendChild(addProductTr);
  });
}
populateForm();

let localStorageConfirmation = document.getElementById('localStorageConfirmation');

function clearLocalStorage() {
  localStorage.clear(); // clear the entire localStorage
  var element = document.getElementById('localStorageConfirmation');
  if (element) {
    element.remove();
    location.reload();
  }
}
function openClosePrompt() {
  localStorageConfirmation.style.display = 'flex';
}

// Removes the delete localStorage prompt
function closePromptLocalStorage() {
  // localStorage Data
  if(localStorageConfirmation) {
    localStorageConfirmation.remove();
    location.reload();
  }
}






