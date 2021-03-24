/* VARIABLES */
let itemNo1 = 1;
let itemNo2 = 1;
let item1_value = document.querySelector('#item1_value');
let item2_value = document.querySelector('#item2_value');
const increment_btn = document.querySelectorAll('.btn-inc');
const decrement_btn = document.querySelectorAll('.btn-dec');
const inputs = document.getElementsByTagName('input');
const select = document.querySelector('select');
const form = document.querySelector('form');


/* Click Event: Increment Item No. */
increment_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.parentNode.id === 'js--value1') {
            itemNo1++;
            item1_value.value = itemNo1;
        } else if(btn.parentNode.id === 'js--value2') {
            itemNo2++;
            item2_value.value = itemNo2;
        }
    })
});

/* Click Event: Decrement Item No. */
decrement_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.parentNode.id === 'js--value1' && item1_value.value > 1) {
            itemNo1--;
            item1_value.value = itemNo1;
        } else if(btn.parentNode.id === 'js--value2' && item2_value.value > 1) {
            itemNo2--;
            item2_value.value = itemNo2;
        }
    })
});

/* Input Event: Item user input > 1 */ 
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('change', e => {
        let value = e.target.value;
        if(input.parentNode.id === 'js--value1') {
            if(value < 1) input.value = 1;
        }
    })
});

/* Function: Check Validation */
const checkInput = (evt) => {
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].type !== 'number' && inputs[i].type !== 'checkbox'){
            console.log(inputs[i]);
        }
    }
}

/* Submit Event: Continue Confirmation */
form.addEventListener('submit', e => {
    if (e.keyCode === 13) {
        e.preventDefault();
        alert('Purchase complete. Thank you for your order.');
    }
    e.preventDefault();
    alert('Purchase complete. Thank you for your order.');
})




