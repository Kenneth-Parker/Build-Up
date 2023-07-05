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
