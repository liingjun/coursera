$(function() {
  console.log("Init page...");
  // body...
  // Hide the form of add item.
  var newItemForm = $('#newItemForm');
  newItemForm.hide();
  // Show the button of NEW ITEM
  var newItemButton = $('#newItemButton');
  newItemButton.show();

  // Click newItemButton to show newItemForm and hide the newItemButton.
  newItemButton.on('click', function() {
    newItemButton.hide();
    newItemForm.show();
  })

  // Click the add button of the form, to add new item to list.
});