// let finalBudget = 0;
// let totalAmount = 0;
// const yourBudgetInput = document.getElementById('input');
// const categoryInput = document.getElementById('expense-category');
// const selectDropdown = document.getElementById('expense-category');
// const expenseForm = document.getElementById('expense-form');
// const expenseList = document.getElementById('expense-list');
// const leftB = document.getElementById("left");
// const remA = document.getElementById("rem");
// const totalAmountElement = document.getElementById('total-amount');
// const inputA = document.getElementById("saman");
// const buttOn = document.getElementById("btn");

// // Fetch array from local storage on page load

// const storedArray = JSON.parse(localStorage.getItem("test2")) || [];
// let arrNew = storedArray.length > 0 ? storedArray : ["Food", "Gym", "Goods", "Transport"];

// // Populate dropdown with array elements

// for (let i = 0; i < arrNew.length; i++) {
//     const option = document.createElement("option");
//     option.value = arrNew[i];
//     option.textContent = arrNew[i];
//     selectDropdown.append(option);
// }

// inputA.addEventListener("change", (e) => {
//     let userCategory = e.target.value.trim().toLowerCase();
//     userCategory = userCategory.charAt(0).toUpperCase() + userCategory.slice(1).toLowerCase();

//     // Check if the category already exists in the dropdown
//     if (arrNew.includes(userCategory)) {
//         alert("Item Already Exists");
//     }
//     else {
//         // CATEGORY PUSHED TO THE ARRAY THAT IS ENTERED BY THE USER 

//         arrNew.push(userCategory);

//         // Update local storage with the modified array

//         const arrM = JSON.stringify(arrNew)
//         localStorage.setItem("test2", arrM)
//         const nameM = JSON.parse(localStorage.getItem("test2"))
//         console.log(nameM);

//         // If not, add a new option to the dropdown
//         const newOption = document.createElement("option");
//         newOption.value = userCategory;
//         newOption.textContent = userCategory;
//         selectDropdown.append(newOption);
//         inputA.value = "";
//     }
// });

// yourBudgetInput.addEventListener("change", (event) => {
//     finalBudget = parseFloat(event.target.value);
//     const totalB = document.getElementById("total");
//     totalB.innerHTML = finalBudget;
//     yourBudgetInput.value = "";
//     yourBudgetInput.disabled = true;
// });


// expenseForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const expensesArray = JSON.parse(localStorage.getItem("expenses")) ?? [];

//     const expenseCategory = categoryInput.value.trim();
//     const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
//     const expenseDate = document.getElementById('date').value;

//     //    for(let i=0;i<expensesArray.length;i++){
//     //     const expenseCategory = expensesArray[i].category;
//     //     const expenseAmount =  expensesArray[i].amount;
//     //     const expenseDate =  expensesArray[i].date;

//     totalAmount += expenseAmount;

//     // Update the left Money
//     leftB.innerText = (finalBudget - totalAmount);

//     // Update the total amount displayed
//     totalAmountElement.textContent = totalAmount;

//     // Update the remaining amount displayed
//     remA.innerText = finalBudget - (finalBudget - totalAmount);

//     // Create a new row with the entered data
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `
//         <td>${expenseCategory}</td>
//         <td>$${expenseAmount}</td>
//         <td>${expenseDate}</td>
//         <td>
//             <i class="material-icons edit-icon" style="font-size:24px;cursor:pointer; margin-left:4px;margin-top:5px; color:blue;">edit</i>
//             <i class="material-icons delete-icon" style="font-size:24px; cursor:pointer;margin-left:10px;margin-top:5px;color:red;">delete</i>
//         </td>
//     `;


//     expenseList.appendChild(newRow);

//     // // Attach click event listener to delete icon   

//     const deleteIcon = newRow.querySelector('.delete-icon');
//     deleteIcon.addEventListener('click', () => deleteExpenseRow(newRow));


//     // Attach click event listener to edit icon 

//     const editIcon = newRow.querySelector('.edit-icon');
//     editIcon.addEventListener('click', () => editExpenseRow(newRow));

//     // Store amount and date in local storage

//     const expenseData = {
//         category: expenseCategory,
//         amount: expenseAmount,
//         date: expenseDate
//     };

//     expensesArray.push(expenseData);
//     localStorage.setItem("expenses", JSON.stringify(expensesArray));


//     // Clear input fields after adding expense
//     categoryInput.value = '';
//     document.getElementById('expense-amount').value = '';
//     document.getElementById('date').value = '';

// });


// // Function to delete the expense row when click on delete icon 

// function deleteExpenseRow(row) {
//     const expenseAmount = parseFloat(row.children[1].textContent.slice(1));
//     totalAmount -= expenseAmount;

//     // Update the left Money after deleting the row
//     leftB.innerText = (finalBudget - totalAmount);

//     // Update the total amount displayed after deleting the row
//     totalAmountElement.textContent = totalAmount.toFixed(2);

//     // Update the remaining amount after deleting the row
//     const currentRemAmount = parseFloat(remA.innerText);
//     remA.innerText = (currentRemAmount - expenseAmount);

//     // Remove the row from the table
//     row.remove();
// }

// // function to edit the row data 

// function editExpenseRow() {
//     console.log("hello")
// }



// purana

// document.addEventListener('DOMContentLoaded', function () {
//     let finalBudget = parseFloat(localStorage.getItem("finalBudget")) || 0;
//     let totalAmount = parseFloat(localStorage.getItem("totalAmount")) || 0;
//     const totalB = document.getElementById("total");

//     const yourBudgetInput = document.getElementById('input');
//     const categoryInput = document.getElementById('expense-category');
//     const selectDropdown = document.getElementById('expense-category');
//     const expenseForm = document.getElementById('expense-form');
//     const expenseList = document.getElementById('expense-list');
//     const leftB = document.getElementById("left");
//     const remA = document.getElementById("rem");
//     const totalAmountElement = document.getElementById('total-amount');
//     const inputA = document.getElementById("saman");
//     const editModal = document.getElementById('editModal');
//     const editCategoryInput = document.getElementById('editCategory');
//     const editAmountInput = document.getElementById('editAmount');
//     const editDateInput = document.getElementById('editDate');
//     const saveChangesBtn = document.getElementById('saveChangesBtn');
//     const filTer=document.getElementById("filterByDate");



//     let selectedRow;
//     let selectedAmount; 


//     // Fetch array from local storage on page load
    
//     const storedArray = JSON.parse(localStorage.getItem("test2")) || [];
//     let arrNew = storedArray.length > 0 ? storedArray : ["Food", "Gym", "Goods", "Transport"];

//     totalB.innerText = finalBudget;
    

//     // Populate dropdown with array elements


//     for (let i = 0; i < arrNew.length; i++) {
//         const option = document.createElement("option");
//         option.value = arrNew[i];
//         option.textContent = arrNew[i];
//         selectDropdown.append(option);
//     }

//     //

//     // take category input   

//     inputA.addEventListener("change", (e) => {
//         let userCategory = e.target.value.trim().toLowerCase();
//         userCategory = userCategory.charAt(0).toUpperCase() + userCategory.slice(1).toLowerCase();

//         // Check if the category already exists in the dropdown


//         if (arrNew.includes(userCategory)) {
//             alert("Item Already Exists");
//         } else {
//             // CATEGORY PUSHED TO THE ARRAY THAT IS ENTERED BY THE USER 
//             arrNew.push(userCategory);

//             // Update local storage with the modified array
//             const arrM = JSON.stringify(arrNew)
//             localStorage.setItem("test2", arrM)
//             const nameM = JSON.parse(localStorage.getItem("test2"))
//             console.log(nameM);

//             // If not, add a new option to the dropdown
//             const newOption = document.createElement("option");
//             newOption.value = userCategory;
//             newOption.textContent = userCategory;
//             selectDropdown.append(newOption);
//             inputA.value = "";
//         }
//     });

//     yourBudgetInput.addEventListener("change", (event) => {
//         finalBudget = parseFloat(event.target.value);
//         localStorage.setItem("finalBudget", finalBudget); // Save to local storage
//         totalB.innerHTML = finalBudget;
//         yourBudgetInput.value = "";
//         yourBudgetInput.disabled = true;

//         // Update the left Money, total amount, and remaining amount
//         leftB.innerText = (finalBudget - totalAmount);
//         totalAmountElement.textContent = totalAmount.toFixed(2);

//         // remA.innerText = (finalBudget - totalAmount).toFixed(2);
//         // remA.innerText = totalAmountElement.value;
//     });


//     // Fetch expenses from local storage on page load

//     const expensesArray = JSON.parse(localStorage.getItem("expenses")) || [];

//     // Populate the expense table with existing expenses


//     for (let i = 0; i < expensesArray.length; i++) {
//         const { category, amount, date } = expensesArray[i];
//         totalAmount += amount;


//         // Create a new row with the loaded data

        
//         const newRow = document.createElement('tr');
//         newRow.innerHTML = `
//                                 <td>${category}</td>
//                                 <td>$${amount}</td>
//                                 <td>${date}</td>
//                                 <td>
//                                     <i class="material-icons edit-icon" style="font-size:24px;cursor:pointer; margin-left:4px;margin-top:5px; color:blue;">edit</i>
//                                     <i class="material-icons delete-icon" style="font-size:24px; cursor:pointer;margin-left:10px;margin-top:5px;color:red;">delete</i>
//                                 </td>
//                             `;

//         expenseList.appendChild(newRow);

//         // Attach click event listener to delete icon   
//         const deleteIcon = newRow.querySelector('.delete-icon');
//         deleteIcon.addEventListener('click', () => deleteExpenseRow(newRow));

//         // Attach click event listener to edit icon 
//         const editIcon = newRow.querySelector('.edit-icon');
//         editIcon.addEventListener('click', () => openEditModal(newRow));
//     }

//     // Update the left Money, total amount, and remaining amount


//     leftB.innerText = (finalBudget - totalAmount);
//     totalAmountElement.textContent = totalAmount.toFixed(2);
//     // remA.innerText = (finalBudget - totalAmount).toFixed(2);

//     expenseForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const expenseCategory = categoryInput.value.trim();
//         const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
//         const expenseDate = document.getElementById('date').value;

//         totalAmount += expenseAmount;

//         // Update the left Money
//         leftB.innerText = (finalBudget - totalAmount);

//         // Update the total amount displayed
//         totalAmountElement.textContent = totalAmount;
//         localStorage.setItem("kharcha",totalAmount);

//         // if( expenseAmount+totalAmount < finalBudget ){
//         //     alert (" you use ur mone ")
//         // }
        
//         // Update the remaining amount displayed

//         remA.innerText = finalBudget - (finalBudget - totalAmount);
//         // Create a new row with the entered data
//         const newRow = document.createElement('tr');
//         newRow.innerHTML = `
//                                 <td>${expenseCategory}</td>
//                                 <td>$${expenseAmount}</td>
//                                 <td>${expenseDate}</td>
//                                 <td>
//                                     <i class="material-icons edit-icon" style="font-size:24px;cursor:pointer; margin-left:4px;margin-top:5px; color:blue;">edit</i>
//                                     <i class="material-icons delete-icon" style="font-size:24px; cursor:pointer;margin-left:10px;margin-top:5px;color:red;">delete</i>
//                                 </td>
//                             `;

//         expenseList.appendChild(newRow);

//         // Attach click event listener to delete icon   
//         const deleteIcon = newRow.querySelector('.delete-icon');
//         deleteIcon.addEventListener('click', () => deleteExpenseRow(newRow));

//         // Attach click event listener to edit icon 
//         const editIcon = newRow.querySelector('.edit-icon');
//         editIcon.addEventListener('click', () => openEditModal(newRow));

//         // Store amount and date in local storage
//         const expenseData = {
//             category: expenseCategory,
//             amount: expenseAmount,
//             date: expenseDate
//         };

//         expensesArray.push(expenseData);
//         localStorage.setItem("expenses", JSON.stringify(expensesArray));

//         // Clear input fields after adding expense
//         categoryInput.value = '';
//         document.getElementById('expense-amount').value = '';
//         document.getElementById('date').value = '';
//     });

//     function deleteExpenseRow(row) {
//         const expenseAmount = parseFloat(row.children[1].textContent.slice(1));

//         // its  the index of the expense data in expensesArray

//         const indexToDelete = expensesArray.findIndex(expense => expense.amount === expenseAmount);

//         // Remove the entry from expensesArray
//         expensesArray.splice(indexToDelete, 1);

//         // Update local storage
//         localStorage.setItem("expenses", JSON.stringify(expensesArray));

//         totalAmount -= expenseAmount;

//         // Update the left Money after deleting the row
//         leftB.innerText = (finalBudget - totalAmount);

//         // Update the total amount displayed after deleting the row
//         totalAmountElement.textContent = totalAmount.toFixed(2);

//         // Update the remaining amount after deleting the row
//         const currentRemAmount = parseFloat(remA.innerText);
//         remA.innerText = (currentRemAmount - expenseAmount);

//         // Remove the row from the table
//         row.remove();
//     }


//     function openEditModal(clickedRow) {
//         selectedRow = clickedRow;
//         selectedAmount = parseFloat(selectedRow.children[1].textContent.slice(1));

//         //  now we can Populate the edit modal with existing data

//         const existingCategory = selectedRow.children[0].textContent;
//         const existingAmount = selectedAmount;
//         const existingDate = selectedRow.children[2].textContent;

//         editCategoryInput.value = existingCategory;
//         editAmountInput.value = existingAmount;
//         editDateInput.value = existingDate;

//         editModal.style.display = 'block';
//     }

//     //  cross sign to close modal 

//     const closeModalBtn = document.querySelector('.close');
//     closeModalBtn.addEventListener('click', function () {
//         editModal.style.display = 'none';
//     });

//     window.onclick = function (event) {
//         if (event.target === editModal) {
//             editModal.style.display = 'none';
//         }
//     };

//     saveChangesBtn.addEventListener('click', function () {
//         const editedCategory = editCategoryInput.value.trim();
//         const editedAmount = parseFloat(editAmountInput.value);
//         const editedDate = editDateInput.value;

//         // Update the displayed values in the edited row
//         selectedRow.children[0].textContent = editedCategory;
//         selectedRow.children[1].textContent = `$${editedAmount}`;
//         selectedRow.children[2].textContent = editedDate;

//         // Update total amount considering the edited amount
//         totalAmount = totalAmount - selectedAmount + editedAmount;
//         totalAmountElement.textContent = totalAmount.toFixed(2);

//         // Update the remaining amount and left Money
//         const remainingAmount = finalBudget - (finalBudget - totalAmount);
//         remA.innerText = remainingAmount;

//         const spendAmount = (finalBudget - totalAmount).toFixed(2);

//         leftB.innerText = spendAmount;

//         // Update the expense data in the local storage
//         const index = Array.from(expenseList.children).indexOf(selectedRow);
//         expensesArray[index] = {
//             category: editedCategory,
//             amount: editedAmount,
//             date: editedDate
//         };

//         localStorage.setItem("expenses", JSON.stringify(expensesArray));

//         // Close the edit modal
//         editModal.style.display = 'none';
//     });

// });


document.addEventListener('DOMContentLoaded', function () {
    let finalBudget = parseFloat(localStorage.getItem("finalBudget")) || 0;
    let totalAmount = parseFloat(localStorage.getItem("totalAmount")) || 0;
    const totalB = document.getElementById("total");

    const yourBudgetInput = document.getElementById('input');
    const categoryInput = document.getElementById('expense-category');
    const selectDropdown = document.getElementById('expense-category');
    const filterItems=document.getElementById('filter-items')
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const leftB = document.getElementById("left");
    const remA = document.getElementById("rem");
    const totalAmountElement = document.getElementById('total-amount');
    const inputA = document.getElementById("saman");
    const editModal = document.getElementById('editModal');
    const editCategoryInput = document.getElementById('editCategory');
    const editAmountInput = document.getElementById('editAmount');
    const editDateInput = document.getElementById('editDate');
    const saveChangesBtn = document.getElementById('saveChangesBtn');
   

    let selectedRow;
    let selectedAmount;

    // Fetch array from local storage on page load

    const storedArray = JSON.parse(localStorage.getItem("test2")) || [];
    let arrNew = storedArray.length > 0 ? storedArray : ["Food", "Gym", "Goods", "Transport"];


    totalB.innerText = finalBudget;

    // Populate dropdown with array elements

    for (let i = 0; i < arrNew.length; i++) {
        const option = document.createElement("option");
        option.value = arrNew[i];
        option.textContent = arrNew[i];
        selectDropdown.append(option);
    }

    // take  dropdown items in filtered dropown  

    for (let i = 0; i < arrNew.length; i++) {
        const option = document.createElement("option");
        option.value = arrNew[i];
        option.textContent = arrNew[i];
        filterItems.append(option);
    }
    // take category input   


    inputA.addEventListener("change", (e) => {
        let userCategory = e.target.value.trim().toLowerCase();
        userCategory = userCategory.charAt(0).toUpperCase() + userCategory.slice(1).toLowerCase();

        // Check if the category already exists in the dropdown
        if (arrNew.includes(userCategory)) {
            alert("Item Already Exists");
        } else {
            // CATEGORY PUSHED TO THE ARRAY THAT IS ENTERED BY THE USER 
            arrNew.push(userCategory);

            // Update local storage with the modified array
            const arrM = JSON.stringify(arrNew)
            localStorage.setItem("test2", arrM)
            const nameM = JSON.parse(localStorage.getItem("test2"))
            console.log(nameM);

            // If not, add a new option to the dropdown
            const newOption = document.createElement("option");
            newOption.value = userCategory;
            newOption.textContent = userCategory;
            selectDropdown.append(newOption);
            filterItems.append(newOption)
            inputA.value = "";
        }
    });

    yourBudgetInput.addEventListener("change", (event) => {
        finalBudget = parseFloat(event.target.value);
        localStorage.setItem("finalBudget", finalBudget); // Save to local storage
        totalB.innerHTML = finalBudget;
        yourBudgetInput.value = "";
        yourBudgetInput.disabled = true;

        // Update the left Money, total amount, and remaining amount
        leftB.innerText = (finalBudget - totalAmount);
        totalAmountElement.textContent = totalAmount.toFixed(2);

        // remA.innerText = (finalBudget - totalAmount).toFixed(2);
        // remA.innerText = totalAmountElement.value;
    });

    // Fetch expenses from local storage on page load
    const expensesArray = JSON.parse(localStorage.getItem("expenses")) || [];

    // Populate the expense table with existing expenses
    for (let i = 0; i < expensesArray.length; i++) {
        const { category, amount, date } = expensesArray[i];
        totalAmount += amount;

        // Create a new row with the loaded data
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
                                <td>${category}</td>
                                <td>$${amount}</td>
                                <td>${date}</td>
                                <td>
                                    <i class="material-icons edit-icon" style="font-size:24px;cursor:pointer; margin-left:4px;margin-top:5px; color:blue;">edit</i>
                                    <i class="material-icons delete-icon" style="font-size:24px; cursor:pointer;margin-left:10px;margin-top:5px;color:red;">delete</i>
                                </td>
                            `;

        expenseList.appendChild(newRow);

        // Attach click event listener to delete icon   
        const deleteIcon = newRow.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', () => deleteExpenseRow(newRow));

        // Attach click event listener to edit icon 
        const editIcon = newRow.querySelector('.edit-icon');
        editIcon.addEventListener('click', () => openEditModal(newRow));
    }

    // Update the left Money, total amount, and remaining amount
    leftB.innerText = (finalBudget - totalAmount);
    totalAmountElement.textContent = totalAmount.toFixed(2);
    // remA.innerText = (finalBudget - totalAmount).toFixed(2);

    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const expenseCategory = categoryInput.value.trim();
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
        const expenseDate = document.getElementById('date').value;

        // here we  Check if adding the new expense exceeds the final budget


        if (totalAmount + expenseAmount > finalBudget) {
            alert("You have exceeded your total budget!");
            return; 
        }

        totalAmount += expenseAmount;

        // Update the left Money
        
        leftB.innerText = (finalBudget - totalAmount);

        // Update the total amount displayed
        totalAmountElement.textContent = totalAmount;
        localStorage.setItem("kharcha", totalAmount);

        // Update the remaining amount displayed
        remA.innerText = finalBudget - (finalBudget - totalAmount);

        // Create a new row with the entered data
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
                                <td>${expenseCategory}</td>
                                <td>$${expenseAmount}</td>
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

        // Attach click event listener to edit icon 
        const editIcon = newRow.querySelector('.edit-icon');
        editIcon.addEventListener('click', () => openEditModal(newRow));

        // Store amount and date in local storage
        const expenseData = {
            category: expenseCategory,
            amount: expenseAmount,
            date: expenseDate
        };

        expensesArray.push(expenseData);
        localStorage.setItem("expenses", JSON.stringify(expensesArray));

        // Clear input fields after adding expense
        categoryInput.value = expenseCategory;
        document.getElementById('expense-amount').value = '';
        document.getElementById('date').value = '';
    });

    function deleteExpenseRow(row) {
        const expenseAmount = parseFloat(row.children[1].textContent.slice(1));

        // its  the index of the expense data in expensesArray
        const indexToDelete = expensesArray.findIndex(expense => expense.amount === expenseAmount);

        // Remove the entry from expensesArray
        expensesArray.splice(indexToDelete, 1);

        // Update local storage
        localStorage.setItem("expenses", JSON.stringify(expensesArray));

        totalAmount -= expenseAmount;

        // Update the left Money after deleting the row
        leftB.innerText = (finalBudget - totalAmount);

        // Update the total amount displayed after deleting the row
        totalAmountElement.textContent = totalAmount.toFixed(2);

        // Update the remaining amount after deleting the row
        const currentRemAmount = parseFloat(remA.innerText);
        remA.innerText = (currentRemAmount - expenseAmount);

        // Remove the row from the table
        row.remove();
    }

    function openEditModal(clickedRow) {
        selectedRow = clickedRow;
        selectedAmount = parseFloat(selectedRow.children[1].textContent.slice(1));

        //  now we can Populate the edit modal with existing data

        const existingCategory = selectedRow.children[0].textContent;
        const existingAmount = selectedAmount;
        const existingDate = selectedRow.children[2].textContent;

        editCategoryInput.value = existingCategory;
        editAmountInput.value = existingAmount;
        editDateInput.value = existingDate;

        editModal.style.display = 'block';
    }

    //  cross sign to close modal 
    const closeModalBtn = document.querySelector('.close');
    closeModalBtn.addEventListener('click', function () {
        editModal.style.display = 'none';
    });

    window.onclick = function (event) {
        if (event.target === editModal) {
            editModal.style.display = 'none';
        }
    };

    saveChangesBtn.addEventListener('click', function () {
        const editedCategory = editCategoryInput.value.trim();
        const editedAmount = parseFloat(editAmountInput.value);
        const editedDate = editDateInput.value;

        // Update the displayed values in the edited row
        selectedRow.children[0].textContent = editedCategory;
        selectedRow.children[1].textContent = `$${editedAmount}`;
        selectedRow.children[2].textContent = editedDate;

        // Update total amount considering the edited amount
        totalAmount = totalAmount - selectedAmount + editedAmount;
        totalAmountElement.textContent = totalAmount.toFixed(2);

        // Update the remaining amount and left Money
        const remainingAmount = finalBudget - (finalBudget - totalAmount);
        remA.innerText = remainingAmount;

        const spendAmount = (finalBudget - totalAmount).toFixed(2);

        leftB.innerText = spendAmount;

        // Update the expense data in the local storage
        const index = Array.from(expenseList.children).indexOf(selectedRow);
        expensesArray[index] = {
            category: editedCategory,
            amount: editedAmount,
            date: editedDate
        };

        localStorage.setItem("expenses", JSON.stringify(expensesArray));

        // Close the edit modal
        editModal.style.display = 'none';
    });

});






