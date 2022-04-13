const taskButtons = document.getElementById('task-buttons');
const invoicedTasks = new Set();

let services = [
  { id: 0, task: 'Wash Car', price: 10 },
  { id: 1, task: 'Mow Lawn', price: 20 },
  { id: 2, task: 'Pull Weeds', price: 30 }
];

const taskButtonsHtml = services.map((service) => {
  return `<button value="${service.id}">${service.task}: $${service.price}</button>`;
});
taskButtons.innerHTML = taskButtonsHtml.join('');

taskButtons.addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    invoicedTasks.add(services[target.value]);
    renderTaskList(invoicedTasks);
  }
});

function renderTaskList(taskList) {
  let tasksHtml = '';
  let priceHtml = '';
  let totalAmount = 0;
  for (let item of taskList) {
    tasksHtml += `<p class="task">${item.task}<button id="${item.id}" class="remove-task-button">Remove</button></p>`;
    priceHtml += `<p class="price"><span class="currency-sign">$</span> ${item.price}</p>`;
    totalAmount += item.price;
  }
  document.getElementById('tasks').innerHTML = tasksHtml;
  document.getElementById('prices').innerHTML = priceHtml;
  document.getElementById('total-amount').innerHTML = `<p class="price-total">$ ${totalAmount}</p>`;
}

document.getElementById('remove-button').addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    removeItem(target.id);
    renderTaskList(invoicedTasks);
  }
});

function removeItem(item) {
  invoicedTasks.delete(services[item]);
}

document.getElementById('send-invoice').addEventListener('click', () => {
  invoicedTasks.clear();
  renderTaskList(invoicedTasks);
});
