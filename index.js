/* Project requirements:
 * - array to hold services requested
 * - buttons to add service to array
 * - place to display data from array - updated every time the array changes
 * - don't charge more than once for same service
 * - total cost stays updated
 * - button to "send invoice" (reset after clicking the button)
 * - STRETCH: remove items after adding - the REMOVE button next to the item added
 */

const taskButtons = document.getElementById('task-buttons');
const removeButton = document.getElementById('remove-button')
const invoicedTasks = new Set();

let services = [
  { id: 0, task: 'Wash Car', price: 10 },
  { id: 1, task: 'Mow Lawn', price: 20 },
  { id: 2, task: 'Pull Weeds', price: 30 },
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

removeButton.addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    removeItem(target.id)
    renderTaskList(invoicedTasks)
  }
})


function renderTaskList(taskList) {
  let tasksHtml = '';
  let priceHtml = '';
  let totalAmount = 0;
  for (let item of taskList) {
    tasksHtml += `<p class="task">${item.task}<button id="${item.id}" class="task-remove">Remove</button></p>`;
    priceHtml += `<p class="price"><span class="currency-sign">$</span> ${item.price}</p>`;
    totalAmount += item.price;
  }
  document.getElementById('tasks').innerHTML = tasksHtml;
  document.getElementById('prices').innerHTML = priceHtml;
  document.getElementById('total-amount').innerHTML = `<p class="price-total"><span class="currency-sign-total-amount">$ ${totalAmount}</span></p>`;
}


function removeItem(item){
  invoicedTasks.delete(services[item])
}
