
function init_card(class_name){
	const cards = document.querySelectorAll(class_name)
	cards.forEach(card => {
		const plus = card.querySelector('button.plus')
		const minus = card.querySelector('button.minus')
		const value = card.querySelector(".value")
		plus.onclick  = ()=>{value.textContent = parseInt(value.textContent) + 1}
		minus.onclick = ()=>{value.textContent = parseInt(value.textContent) - 1}
	});
}

export{
    init_card
}
