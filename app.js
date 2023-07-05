// Default page load item removal

// Get the button element 1
const removeButton1 = document.getElementById("resource-1");

// Add an event listener to the button
removeButton1.addEventListener("click", (event) => {
  // Get the resource elements
  const resourceImage1 = document.getElementById("resource-image-1");
  const resourceField1 = document.getElementById("resource-field-1");

  // Remove the resource elements
  resourceImage1.remove();
  resourceField1.remove();
});

// Get the button element 2
const removeButton2 = document.getElementById("resource-2");

// Add an event listener to the button
removeButton2.addEventListener("click", (event) => {
  // Get the resource elements
  const resourceImage2 = document.getElementById("resource-image-2");
  const resourceField2 = document.getElementById("resource-field-2");

  // Remove the resource elements
  resourceImage2.remove();
  resourceField2.remove();
});

// Get the button element 3
const removeButton3 = document.getElementById("resource-3");

// Add an event listener to the button
removeButton3.addEventListener("click", (event) => {
  // Get the resource elements
  const resourceImage3 = document.getElementById("resource-image-3");
  const resourceField3 = document.getElementById("resource-field-3");

  // Remove the resource elements
  resourceImage3.remove();
  resourceField3.remove();
});

// Toggle inStock Resource

// Get the button element
const inStockButton = document.querySelector(".instock1");

// Create a boolean variable to store the state of the toggle switch
let isInStock = true;

// Add an event listener to the button
inStockButton.addEventListener("click", (event) => {
  // Toggle the state of the toggle switch
  isInStock = !isInStock;

  // Update the text of the button
  if (isInStock) {
    inStockButton.textContent = "In Stock";
  } else {
    inStockButton.textContent = "Out of Stock";
  }
});

// Get the button element
const inStockButton2 = document.querySelector(".instock2");

// Create a boolean variable to store the state of the toggle switch
let isInStock2 = true;

// Add an event listener to the button
inStockButton2.addEventListener("click", (event) => {
  // Toggle the state of the toggle switch
  isInStock2 = !isInStock2;

  // Update the text of the button
  if (isInStock2) {
    inStockButton2.textContent = "In Stock";
  } else {
    inStockButton2.textContent = "Out of Stock";
  }
});

// Get the button element
const inStockButton3 = document.querySelector(".instock3");

// Create a boolean variable to store the state of the toggle switch
let isInStock3 = true;

// Add an event listener to the button
inStockButton3.addEventListener("click", (event) => {
  // Toggle the state of the toggle switch
  isInStock3 = !isInStock3;

  // Update the text of the button
  if (isInStock3) {
    inStockButton3.textContent = "In Stock";
  } else {
    inStockButton3.textContent = "Out of Stock";
  }
});

