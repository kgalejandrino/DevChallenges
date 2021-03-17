/* VARIABLES */
let itemNo1 = 1;
let itemNo2 = 1;
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
const increment_btn = document.querySelectorAll('.btn-inc');
const decrement_btn = document.querySelectorAll('.btn-dec');

/* Click Event: Increment Item No. */
increment_btn.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        if(btn.parentNode.id === 'js--value1') {
            itemNo1++;
            input1.value = itemNo1;
        } else if(btn.parentNode.id === 'js--value2') {
            itemNo2++;
            input2.value = itemNo2;
        }
    })
});

/* Click Event: Decrement Item No. */
decrement_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.parentNode.id === 'js--value1' && input1.value > 1) {
            itemNo1--;
            input1.value = itemNo1;
        } else if(btn.parentNode.id === 'js--value2' && input2.value > 1) {
            itemNo2--;
            input2.value = itemNo2;
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





