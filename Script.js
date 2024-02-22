


let finalBudget = 0;
const yourBudgetInput = document.getElementById('input');
const categoryInput = document.getElementById('expense-category');
const selectDropdown = document.getElementById('expense-category');
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalAmountElement = document.getElementById('total-amount');
const inputA=document.getElementById("saman")
const buttOn=document.getElementById("btn")

inputA.addEventListener("change", (e) => {
    let userCategory =e.target.value;
    let  newOption = document.createElement("option")
    newOption.value=userCategory;
    newOption.textContent=userCategory;
    selectDropdown.append(newOption)
    inputA.value("")
});
// inputA.addEventListener("change",(e)=>{
//     let userCategory = e.target.value
//     let userOption = document.createElement("option")
//     userOption.value=userCategory
//     userOption.textContent=userCategory
//     selectDropdown.append(userOption)
//     inputA.value=""
// })

let totalAmount = 0;

yourBudgetInput.addEventListener("change", (event) => {
    finalBudget = parseFloat(event.target.value);
    const totalB = document.getElementById("total");
    totalB.innerHTML = finalBudget;
    yourBudgetInput.value = "";
    
    yourBudgetInput.disabled=true;
});




expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const expenseCategory = categoryInput.value.trim();
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const expenseDate = document.getElementById('date').value;

    if (!expenseCategory || isNaN(expenseAmount) || !expenseDate) {
        alert('Please fill in all fields.');
        return;
    }

    totalAmount += expenseAmount;

    // Update the left Money
    const leftB = document.getElementById("left");
    leftB.innerText = (finalBudget - totalAmount).toFixed(2);

    // Update the total amount displayed
    totalAmountElement.textContent = totalAmount.toFixed(2);

    // Update the remaining amount displayed
    const remA = document.getElementById("rem");
    remA.innerText = (finalBudget - totalAmount).toFixed(2);

    // Create a new row with the entered data
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${expenseCategory}</td>
        <td>$${expenseAmount.toFixed(2)}</td>
        <td>${expenseDate}</td>
    `;

    expenseList.appendChild(newRow);

    // Clear input fields after adding expense
    categoryInput.value = '';
    document.getElementById('expense-amount').value = '';
    document.getElementById('date').value = '';
});


inputA.addEventListener("change",(e)=>{
    let userCategory = e.target.value
    let userOption = document.createElement("option")
    userOption.value=userCategory
    userOption.textContent=userCategory
    selectDropdown.append(userOption)
    inputA.value=""
})
