const taskButtons = document.getElementById('task-buttons');
const invoicedTasks = new Set();

let services = [
  { id: '1', task: 'Wash Car', price: 10 },
  { id: '2', task: 'Mow Lawn', price: 20 },
  { id: '3', task: 'Pull Weeds', price: 30 },
];

// Create task buttons dynamically
const taskButtonsHtml = services.map((service) => {
  return `<button value="${service.id}">${service.task}: $${service.price}</button>`;
});
taskButtons.innerHTML = taskButtonsHtml.join('');

// Add task
taskButtons.addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    const index = services.findIndex((service) => service.id === target.value);
    invoicedTasks.add(services[index]);
  }
  renderTaskList(invoicedTasks);
});

// Display tasks, prices and total sum
function renderTaskList(taskList) {
  let tasksHtml = '';
  let priceHtml = '';
  let totalAmount = 0;
  for (let item of taskList) {
    tasksHtml += `<p class="task">${item.task}<button value="${item.id}" class="remove-task-button">Remove</button></p>`;
    priceHtml += `<p class="price"><span class="currency-sign">$</span> ${item.price}</p>`;
    totalAmount += item.price;
  }
  document.getElementById('tasks').innerHTML = tasksHtml;
  document.getElementById('prices').innerHTML = priceHtml;
  document.getElementById('total-amount').innerHTML = `<p class="price-total">$ ${totalAmount}</p>`;
};  

// Remove task
document.getElementById('remove-button').addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    const index = services.findIndex((service) => service.id === target.value);
    invoicedTasks.delete(services[index]);
  }
  renderTaskList(invoicedTasks);
});

// Send the invoice
document.getElementById('send-invoice').addEventListener('click', () => {
  invoicedTasks.clear();
  renderTaskList(invoicedTasks);
});
