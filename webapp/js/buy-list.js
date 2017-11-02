// TODO. hanle with the html input like <h1>abc</h1>
// TODO. more friendly with phone web. Too small

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
    var textEscape = escapeInput(inputText.val());

    list.append('<li>' + textEscape + '</li>');
    // Empty the input form.
    inputText = inputText.val('');
    // Store to the local storage.
    updateListToLocal(list);
  })

  // Click every list item to mark done of it.
  list.on('click', 'li', function(e) {
    var li = $(this);
    var complete = li.hasClass('complete');
    if (complete === true) {
      // TODO. animate complete.
      li.remove();
      // complete item should be removed from the list.
      updateListToLocal(list);
    } else {
      var text = li.text();
      li.remove();
      list.append('<li class=\"complete\">' + text
                  + '</li>')
          .hide().fadeIn(100);
      updateListToLocal(list);
    }
  })
  // Click again to remove from the list.

});

// Handle escaping of user input.
function escapeInput(inputText) {
  // TODO. use jquery to be compatible.
  var temp = document.createElement('div');
  // if the textContent should be html, then
  // innerHTML must be escaped characters to show textContent.
  temp.textContent = inputText;
  return temp.innerHTML;
}

function updateListToLocal(list) {
  localStorage.setItem('list', list.html());
}

// debug
// localStorage.clear();






