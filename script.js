var checkboxItem = document.querySelectorAll('.checkbox-item');
var totalItem = document.getElementById('total');
var total = 0;

checkboxItem.forEach(item => {
  item.addEventListener('click', () => {
		if (item.checked)	total += parseInt(item.value) 
		else total -= parseInt(item.value);
		totalItem.innerHTML = "Rp" + total;
	});
});