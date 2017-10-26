$(function() {
  console.log("Init page...");
  // body...
  // Cache the html items.
  var list = $('ul');

  // Populate list using local data.
  var localList = localStorage.getItem('list');
  list.html(localList);

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
  newItemForm.on('submit', function(e) {
    e.preventDefault();
    inputText = $('input:text');
    var text = inputText.val();
    list.append('<li>' + text + '</li>');
    // Empty the input form.
    inputText = inputText.val('');
    // Store to the local storage.
    storeToLocal(list);
  })

  // Click every list item to mark done of it.
  // Click again to remove from the list.

});

function storeToLocal(list) {
  localStorage.setItem('list', list.html());
}