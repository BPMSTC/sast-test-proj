const $ = require('jquery');
const { createTaskItem } = require('./app'); // Use './app' to indicate the same directory

describe('Task Management Functionality', () => {
  beforeAll(() => {
    // Setup a DOM environment for jQuery if your tests run in a Node environment
    document.body.innerHTML = '<div id="container"></div>';
    global.$ = $;
  });

  test('createTaskItem should create a list item with the correct text and a remove button', () => {
    const taskText = 'Learn Jest';
    const item = createTaskItem(taskText);

    // Check if the item is a list element with the correct text
    expect(item.text()).toContain(taskText);
    expect(item.find('button').text()).toBe('Remove');
    expect(item.find('button').length).toBe(1);
  });

  test('remove button should remove the item from DOM when clicked', () => {
    const taskText = 'Complete unit test';
    const container = $('#container');
    const item = createTaskItem(taskText);
    container.append(item);

    expect(container.find('li').length).toBe(1); // Ensure item is added

    item.find('button').trigger('click'); // Simulate click on remove button
    expect(container.find('li').length).toBe(0); // Ensure item is removed
  });
});
