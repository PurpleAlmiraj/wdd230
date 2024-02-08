const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')

button.addEventListener('click', () => {
	if (input.value != "") {
		const li = document.createElement('li');
		const deletebutton = document.createElement('button')
		li.textContent = input.value;
		deletebutton.textContent = "❌";
		li.appendChild(deletebutton);
		list.appendChild(li);
		deletebutton.addEventListener('click', () => {
			list.removeChild(li);
			input.focus();
		})
		input.value = ""

	} 

})