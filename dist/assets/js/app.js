
// переключение стульев
function chairs() {
	let btn = document.querySelectorAll('.chairs-label-input');
	if (btn) {
		btn.forEach(item => {
			item.addEventListener('click', () => {
				let className = document.querySelector(`.${item.name}`);
				let dataImg = item.getAttribute('data-img');
				let color = item.getAttribute('data-color');
				let colorName = document.querySelector(`.${item.name}-color`);
				let inp = document.querySelector(`.${item.name}-input--hidden`)
				className.src = dataImg;
				colorName.innerHTML = color;
				inp.value = color;
				console.log(inp.value)
			})
		})
	}
}
chairs()