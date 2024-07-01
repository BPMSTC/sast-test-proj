const $ = require('jquery');

function createTaskItem(taskText) {
  const listItem = $('<li>').text(taskText);
  const removeButton = $('<button>').text('Remove');
  removeButton.on('click', function() { $(this).parent().remove(); });
  listItem.append(removeButton);
  return listItem;
}

module.exports = { createTaskItem };
