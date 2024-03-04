// write cool JS hwere!!




const firstItem = document.getElementById('No-one').value
const secondItem = document.getElementById('No2').value
const thirdItem = document.getElementById('No3').value




function validateForm() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedItems = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedItems.push(checkbox.value);
        }
    });

    if (checkedItems.length > 0) {
       // console.log('Checked item(s):', checkedItems.join(', '));
        alert('You checked:' + checkedItems)
    } else {
        alert('No item checked.')
    }
}














