// let finalBudget = 0;
// const yourBudgetInput = document.getElementById('input');
// const categoryInput = document.getElementById('expense-category');
// const selectDropdown = document.getElementById('expense-category');
// const expenseForm = document.getElementById('expense-form');
// const expenseList = document.getElementById('expense-list');
// const totalAmountElement = document.getElementById('total-amount');
// const inputA = document.getElementById("saman")
// const buttOn = document.getElementById("btn")

// inputA.addEventListener("change", (e) => {
//     let userCategory = e.target.value
//     let userOption = document.createElement("option")
//     userOption.value = userCategory
//     userOption.textContent = userCategory
//     selectDropdown.append(userOption)
//     inputA.value = ""
// })

// // inputA.addEventListener("change",(e)=>{
// //     let userCategory = e.target.value
// //     let userOption = document.createElement("option")
// //     userOption.value=userCategory
// //     userOption.textContent=userCategory
// //     selectDropdown.append(userOption)
// //     inputA.value=""
// // })

// let totalAmount = 0;

// yourBudgetInput.addEventListener("change", (event) => {
//     finalBudget = parseFloat(event.target.value);
//     const totalB = document.getElementById("total");
//     totalB.innerHTML = finalBudget;
//     yourBudgetInput.value = "";
//     yourBudgetInput.disabled = true;
// });


// expenseForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const expenseCategory = categoryInput.value.trim();
//     const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
//     const expenseDate = document.getElementById('date').value;


//     //  validation to get all fields required 

//     // if (!expenseCategory || isNaN(expenseAmount) || !expenseDate) {
//     //     alert('Please fill in all fields.');
//     //     return;
//     // }

//     totalAmount += expenseAmount;

//     // Update the left Money

//     const leftB = document.getElementById("left");
//     leftB.innerText = (finalBudget - totalAmount);

//     // Update the total amount displayed

//     totalAmountElement.textContent = totalAmount.toFixed(2);

//     // Update the remaining amount displayed

//     const remA = document.getElementById("rem");
//     remA.innerText = finalBudget - (finalBudget - totalAmount).toFixed(2);

//     // Create a new row with the entered data

//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `
//         <td>${expenseCategory}</td>
//         <td>$${expenseAmount.toFixed(2)}</td>
//         <td>${expenseDate}</td>
//         <i class="material-icons edit-icon" style="font-size:24px;margin-left:15px;margin-top:5px; color:blue;">edit</i>
//         <i class="material-icons delete-icon" style="font-size:24px; margin-left:20px;margin-top:5px;color:red;">delete</i>
//     `;

//     //append here new child 

//     expenseList.appendChild(newRow);


//     // get delete element  through querySelector from new row  

//     const deleteI = newRow.querySelector("delete-icon");

//     //delete the existing row with the help of a function

//     deleteI.addEventListener("click", () => deleteRow(newRow))

//     //now creating the function to delete row

//     function deleteRow(row){
//         const expenseAmount = parseFloat(row.children[1].textContent.slice(1));
//         totalAmount -= expenseAmount;
//     }
//     // Clear input fields after adding expense
//     categoryInput.value = '';
//     document.getElementById('expense-amount').value = '';
//     document.getElementById('date').value = '';
// });


///////////////

let finalBudget = 0;
const yourBudgetInput = document.getElementById('input');
const categoryInput = document.getElementById('expense-category');
const selectDropdown = document.getElementById('expense-category');
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const remA = document.getElementById("rem");
const totalAmountElement = document.getElementById('total-amount');
const inputA = document.getElementById("saman")
const buttOn = document.getElementById("btn")


//  cretae new user option using category input in dropdown
 

inputA.addEventListener("change", (e) => {
    let userCategory = e.target.value
    let userOption = document.createElement("option")
    userOption.value = userCategory
    userOption.textContent = userCategory
    selectDropdown.append(userOption)
    inputA.value = ""
})


let totalAmount = 0;

yourBudgetInput.addEventListener("change", (event) => {
    finalBudget = parseFloat(event.target.value);
    const totalB = document.getElementById("total");
    totalB.innerHTML = finalBudget;
    yourBudgetInput.value = "";
    yourBudgetInput.disabled = true;
});

expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // ... (Your existing code)
    const expenseCategory = categoryInput.value.trim();
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const expenseDate = document.getElementById('date').value;


    //  validation to get all fields required 

    // if (!expenseCategory || isNaN(expenseAmount) || !expenseDate) {
    //     alert('Please fill in all fields.');
    //     return;
    // }

    totalAmount += expenseAmount;

    // Update the left Money

    const leftB = document.getElementById("left");
    leftB.innerText = (finalBudget - totalAmount);

    // Update the total amount displayed

    totalAmountElement.textContent = totalAmount.toFixed(2);

    // Update the remaining amount displayed


    remA.innerText = finalBudget - (finalBudget - totalAmount);

    // Create a new row with the entered data
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${expenseCategory}</td>
        <td>$${expenseAmount.toFixed(2)}</td>
        <td>${expenseDate}</td>
        <td>
            <i class="material-icons edit-icon" style="font-size:24px;cursor:pointer; margin-left:4px;margin-top:5px; color:blue;">edit</i>
            <i class="material-icons delete-icon" style="font-size:24px; cursor:pointer;margin-left:10px;margin-top:5px;color:red;">delete</i>
        </td>
    `;

    expenseList.appendChild(newRow);

    // Attach click event listener to delete icon
    const deleteIcon = newRow.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', () => deleteExpenseRow(newRow));
    
    // Clear input fields after adding expense
    categoryInput.value = '';
    document.getElementById('expense-amount').value = '';
    document.getElementById('date').value = '';
});

// Function to delete the expense row
function deleteExpenseRow(row) {
    const expenseAmount = parseFloat(row.children[1].textContent.slice(1));
    totalAmount -= expenseAmount;

    // Update the left Money
    const leftB = document.getElementById("left");
    leftB.innerText = (finalBudget - totalAmount);

    // Update the total amount displayed
    totalAmountElement.textContent = totalAmount.toFixed(2);

    // Update the remaining amount displayed
    const remA = document.getElementById("rem");
    remA.innerText = finalBudget - totalAmount;

    // Remove the row from the table
    row.remove();
}
