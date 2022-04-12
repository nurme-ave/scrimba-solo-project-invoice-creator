/* Project requirements:
 * - array to hold services requested
 * - buttons to add service to array
 * - place to display data from array - updated every time the array changes
 * - don't charge more than once for same service
 * - total cost stays updated
 * - button to "send invoice" (reset after clicking the button)
 * - STRETCH: remove items after adding - the REMOVE button next to the item added
 */

let services = [
  {id: 1, task: 'Wash Car', price: 10},
  {id: 2, task: 'Mow Lawn', price: 20},
  {id: 3, task: 'Pull Weeds', price: 30}
]

const buttonsHtml = services.map((service) => {
  return `<button value="${service.id}">${service.task}: $${service.price}</button>`
})
document.getElementById('service-buttons').innerHTML = buttonsHtml.join('');





const tasksHtml = services.map((service) => {
  return `<p class="task">${service.task}<button class="task-remove">Remove</button></p>`;
});
document.getElementById('tasks').innerHTML = tasksHtml.join('');


const pricesHtml = services.map((service) => {
  return `<p class="price"><span class="currency-sign">$</span>${service.price}</p>`;
});
document.getElementById('prices').innerHTML = pricesHtml.join('');

