function create_tr(table_id) {
    let table_body = document.getElementById(table_id),
        first_tr = table_body.firstElementChild
    tr_clone = first_tr.cloneNode(true);

    table_body.append(tr_clone);

    clean_first_tr(table_body.firstElementChild);
}

function clean_first_tr(firstTr) {
    let children = firstTr.children;

    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x => {
        if (x !== firstTr.lastElementChild) {
            x.firstElementChild.value = '';
        }
    });
}



function remove_tr(This) {
    if (This.closest('tbody').childElementCount == 1) {
        alert("You Don't have Permission to Delete This");
    } else {
        This.closest('tr').remove();
    }
}

// Get references to the input field, button, and display tag
const submitButton = document.getElementById('submitButton');
const inputFieldRed = document.getElementById('por');
const displayTagRed = document.getElementById('rhp');
const inputFieldBlue = document.getElementById('pob');
const displayTagBlue = document.getElementById('bhp');
const inputFieldYellow = document.getElementById('poy');
const displayTagYellow = document.getElementById('yhp');
const inputFieldGreen = document.getElementById('pog');
const displayTagGreen = document.getElementById('ghp');

// Add event listener to the button
submitButton.addEventListener('click', function () {
    // Get the value from the input field
    const inputValueRed = inputFieldRed.value;
    const inputValueBlue = inputFieldBlue.value;
    const inputValueYellow = inputFieldYellow.value;
    const inputValueGreen = inputFieldGreen.value;

    // Set the value as the content of the display tag
    displayTagRed.textContent = inputValueRed;
    displayTagBlue.textContent = inputValueBlue;
    displayTagYellow.textContent = inputValueYellow;
    displayTagGreen.textContent = inputValueGreen;
});


