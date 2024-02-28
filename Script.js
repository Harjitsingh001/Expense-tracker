


// document.addEventListener('DOMContentLoaded', function () {
//     let finalBudget = parseFloat(localStorage.getItem("finalBudget")) || 0;
//     let totalAmount = parseFloat(localStorage.getItem("totalAmount")) || 0;
//     const totalB = document.getElementById("total");

//     const yourBudgetInput = document.getElementById('input');
//     const categoryInput = document.getElementById('expense-category');
//     const selectDropdown = document.getElementById('expense-category');
//     const filterItems = document.getElementById('filter-items');
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

//     let selectedRow;
//     let selectedAmount;

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

//     // Populate filter dropdown with array elements

//     for (let i = 0; i < arrNew.length; i++) {
//         const option = document.createElement("option");
//         option.textContent = arrNew[i];
//         filterItems.append(option);
//     }

//     const selectedFilter = localStorage.getItem('selectedFilter') || 'all';
//     filterItems.value = selectedFilter;

//     //  filter row   function

//     function filterRows(selectedCategory) {
//         const rows = Array.from(document.querySelectorAll('#expense-list tr'));

//         rows.forEach(row => {
//             const category = row.cells[0].textContent.toLowerCase();
//             row.style.display = selectedCategory === 'all' || category === selectedCategory ? 'table-row' : 'none';

//         });
//     }

//     filterItems.addEventListener('change', function () {
//         const selectedCategory = filterItems.value.toLowerCase();
//         localStorage.setItem('selectedFilter', selectedCategory);
//         filterRows(selectedCategory);
//     });

//     // calling function  

//     filterRows(selectedFilter);

//     inputA.addEventListener("change", (e) => {
//         let userCategory = e.target.value.trim().toLowerCase();
//         userCategory = userCategory.charAt(0).toUpperCase() + userCategory.slice(1).toLowerCase();

//         if(userCategory==""){
//             alert("enter valid category ")
//         }


//         if (arrNew.includes(userCategory)) {
//             alert("Item Already Exists");} 
//             else {
//             arrNew.push(userCategory);

//             const arrM = JSON.stringify(arrNew);
//             localStorage.setItem("test2", arrM);
//             const nameM = JSON.parse(localStorage.getItem("test2"));
//             console.log(nameM);

//             const newOption = document.createElement("option");
//             newOption.value = userCategory;
//             newOption.textContent = userCategory;

//             selectDropdown.append(newOption);
//              filterItems.append(newOption);

//             inputA.value = "";
//         }
//     });

//     //    

//     yourBudgetInput.addEventListener("change", (event) => {
//         finalBudget = parseFloat(event.target.value);
//         localStorage.setItem("finalBudget", finalBudget);
//         totalB.innerHTML = finalBudget;
//         yourBudgetInput.value = "";
//         yourBudgetInput.disabled = true;


//         // if(yourBudgetInput>1){
//         //     yourBudgetInput.style.visibility="hidden";
//         //     return ;
//         // }



//         leftB.innerText = (finalBudget - totalAmount);
//         totalAmountElement.textContent = totalAmount.toFixed(2);
//     });

//     const expensesArray = JSON.parse(localStorage.getItem("expenses")) || [];

//     for (let i = 0; i < expensesArray.length; i++) {
//         const { category, amount, date } = expensesArray[i];
//         totalAmount += amount;

//         const newRow = document.createElement('tr');
//         newRow.innerHTML = `
//             <td>${category}</td>
//             <td>$${amount}</td>
//             <td>${date}</td>
//             <td>
//                 <i class="material-icons edit-icon" style="font-size:24px;cursor:pointer; margin-left:4px;margin-top:5px; color:blue;">edit</i>
//                 <i class="material-icons delete-icon" style="font-size:24px; cursor:pointer;margin-left:10px;margin-top:5px;color:red;">delete</i>
//             </td>
//         `;

//         expenseList.appendChild(newRow);

//         const deleteIcon = newRow.querySelector('.delete-icon');
//         deleteIcon.addEventListener('click', () => deleteExpenseRow(newRow));

//         const editIcon = newRow.querySelector('.edit-icon');
//         editIcon.addEventListener('click', () => openEditModal(newRow));
//     }

//     leftB.innerText = (finalBudget - totalAmount);
//     totalAmountElement.textContent = totalAmount.toFixed(2);

//     expenseForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const expenseCategory = categoryInput.value.trim();
//         const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
//         const expenseDate = document.getElementById('date').value;

//         if (totalAmount + expenseAmount > finalBudget) {
//             alert("You have exceeded your total budget!");
//             return;
//         }
//         if(expenseAmount==0){
//             alert("Amount cannot 0");
//             return;
//         }

//         totalAmount += expenseAmount;
//         leftB.innerText = (finalBudget - totalAmount);
//         totalAmountElement.textContent = totalAmount;
//         localStorage.setItem("kharcha", totalAmount);

//         remA.innerText = finalBudget - (finalBudget - totalAmount);

//         const newRow = document.createElement('tr');
//         newRow.innerHTML = `
//             <td>${expenseCategory}</td>
//             <td>$${expenseAmount}</td>
//             <td>${expenseDate}</td>
//             <td>
//                 <i class="material-icons edit-icon" style="font-size:24px;cursor:pointer; margin-left:4px;margin-top:5px; color:blue;">edit</i>
//                 <i class="material-icons delete-icon" style="font-size:24px; cursor:pointer;margin-left:10px;margin-top:5px;color:red;">delete</i>
//             </td>
//         `;

//         expenseList.appendChild(newRow);

//         const deleteIcon = newRow.querySelector('.delete-icon');
//         deleteIcon.addEventListener('click', () => deleteExpenseRow(newRow));

//         const editIcon = newRow.querySelector('.edit-icon');
//         editIcon.addEventListener('click', () => openEditModal(newRow));

//         const expenseData = {
//             category: expenseCategory,
//             amount: expenseAmount,
//             date: expenseDate
//         };

//         expensesArray.push(expenseData);
//         localStorage.setItem("expenses", JSON.stringify(expensesArray));

//         categoryInput.value = expenseCategory;
//         document.getElementById('expense-amount').value = '';
//         document.getElementById('date').value = '';
//     });

//     function deleteExpenseRow(row) {
//         const expenseAmount = parseFloat(row.children[1].textContent.slice(1));
//         const indexToDelete = expensesArray.findIndex(expense => expense.amount === expenseAmount);

//         expensesArray.splice(indexToDelete, 1);
//         localStorage.setItem("expenses", JSON.stringify(expensesArray));

//         totalAmount -= expenseAmount;
//         leftB.innerText = (finalBudget - totalAmount);
//         totalAmountElement.textContent = totalAmount.toFixed(2);

//         const currentRemAmount = parseFloat(remA.innerText);
//         remA.innerText = (currentRemAmount - expenseAmount);
//         row.remove();
//     }

//     function openEditModal(clickedRow) {
//         selectedRow = clickedRow;
//         selectedAmount = parseFloat(selectedRow.children[1].textContent.slice(1));

//         const existingCategory = selectedRow.children[0].textContent;
//         const existingAmount = selectedAmount;
//         const existingDate = selectedRow.children[2].textContent;

//         editCategoryInput.value = existingCategory;
//         editAmountInput.value = existingAmount;
//         editDateInput.value = existingDate;

//         editModal.style.display = 'block';
//     }

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



//         if (!editedAmount || !editedCategory) {
//             alert("Please fill in all fields before save.");
//             return;
//         }

//         if (editedDate === "" ) {
//             alert("Please fill in the date.");
//             return;
//         }

//         selectedRow.children[0].textContent = editedCategory;
//         selectedRow.children[1].textContent = `$${editedAmount}`;
//         selectedRow.children[2].textContent = editedDate;

//         totalAmount = totalAmount - selectedAmount + editedAmount;
//         totalAmountElement.textContent = totalAmount.toFixed(2);

//         const remainingAmount = finalBudget - (finalBudget - totalAmount);
//         remA.innerText = remainingAmount;

//         const spendAmount = (finalBudget - totalAmount).toFixed(2);
//         leftB.innerText = spendAmount;

//         const index = Array.from(expenseList.children).indexOf(selectedRow);
//         expensesArray[index] = {
//             category: editedCategory,
//             amount: editedAmount,
//             date: editedDate
//         };

//         localStorage.setItem("expenses", JSON.stringify(expensesArray));

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
    const filterItems = document.getElementById('filter-items');
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

    // Populate filter dropdown with array elements

    for (let i = 0; i < arrNew.length; i++) {
        const option = document.createElement("option");
        option.textContent = arrNew[i];
        filterItems.append(option);
    }

    const selectedFilter = localStorage.getItem('selectedFilter') || 'all';
    filterItems.value = selectedFilter;

    //  filter row   function

    function filterRows(selectedCategory) {
        const rows = Array.from(document.querySelectorAll('#expense-list tr'));

        rows.forEach(row => {
            const category = row.cells[0].textContent.toLowerCase();
            row.style.display = selectedCategory === 'all' || category === selectedCategory ? 'table-row' : 'none';

        });
    }

    filterItems.addEventListener('change', function () {
        const selectedCategory = filterItems.value.toLowerCase();
        localStorage.setItem('selectedFilter', selectedCategory);
        filterRows(selectedCategory);
    });

    // calling function  

    filterRows(selectedFilter);

    inputA.addEventListener("change", (e) => {
        let userCategory = e.target.value.trim().toLowerCase();
        userCategory = userCategory.charAt(0).toUpperCase() + userCategory.slice(1).toLowerCase();

        if (userCategory == "") {
            alert("enter valid category ")
        }


        if (arrNew.includes(userCategory)) {
            alert("Item Already Exists");
        }
        else {
            arrNew.push(userCategory);

            const arrM = JSON.stringify(arrNew);
            localStorage.setItem("test2", arrM);
            const nameM = JSON.parse(localStorage.getItem("test2"));
            console.log(nameM);

            const newOption = document.createElement("option");
            newOption.value = userCategory;
            newOption.textContent = userCategory;
            filterItems.append(newOption);
            selectDropdown.append(newOption);

            inputA.value = "";
        }
    });

    //    

    yourBudgetInput.addEventListener("change", (event) => {
        finalBudget = parseFloat(event.target.value);
        localStorage.setItem("finalBudget", finalBudget);
        totalB.innerHTML = finalBudget;
        yourBudgetInput.value = "";
        yourBudgetInput.disabled = true;
        leftB.innerText = (finalBudget - totalAmount);
        totalAmountElement.textContent = totalAmount.toFixed(2);
    });

    const expensesArray = JSON.parse(localStorage.getItem("expenses")) || [];

    for (let i = 0; i < expensesArray.length; i++) {
        const { category, amount, date } = expensesArray[i];
        totalAmount += amount;

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

        const deleteIcon = newRow.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', () => deleteExpenseRow(newRow));

        const editIcon = newRow.querySelector('.edit-icon');
        editIcon.addEventListener('click', () => openEditModal(newRow));
    }

    leftB.innerText = (finalBudget - totalAmount);
    totalAmountElement.textContent = totalAmount.toFixed(2);

    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const expenseCategory = categoryInput.value.trim();
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
        const expenseDate = document.getElementById('date').value;

        if (totalAmount + expenseAmount > finalBudget) {
            alert("You have exceeded your total budget!");
            return;
        }

        totalAmount += expenseAmount;
        leftB.innerText = (finalBudget - totalAmount);
        totalAmountElement.textContent = totalAmount;
        localStorage.setItem("kharcha", totalAmount);

        remA.innerText = finalBudget - (finalBudget - totalAmount);

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

        const deleteIcon = newRow.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', () => deleteExpenseRow(newRow));

        const editIcon = newRow.querySelector('.edit-icon');
        editIcon.addEventListener('click', () => openEditModal(newRow));

        const expenseData = {
            category: expenseCategory,
            amount: expenseAmount,
            date: expenseDate
        };

        expensesArray.push(expenseData);
        localStorage.setItem("expenses", JSON.stringify(expensesArray));

        categoryInput.value = expenseCategory;
        document.getElementById('expense-amount').value = '';
        document.getElementById('date').value = '';
    });

    function deleteExpenseRow(row) {
        const expenseAmount = parseFloat(row.children[1].textContent.slice(1));
        const indexToDelete = expensesArray.findIndex(expense => expense.amount === expenseAmount);

        expensesArray.splice(indexToDelete, 1);
        localStorage.setItem("expenses", JSON.stringify(expensesArray));

        totalAmount -= expenseAmount;
        leftB.innerText = (finalBudget - totalAmount);
        totalAmountElement.textContent = totalAmount.toFixed(2);

        const currentRemAmount = parseFloat(remA.innerText);
        remA.innerText = (currentRemAmount - expenseAmount);
        row.remove();
    }

    function openEditModal(clickedRow) {
        selectedRow = clickedRow;
        selectedAmount = parseFloat(selectedRow.children[1].textContent.slice(1));

        const existingCategory = selectedRow.children[0].textContent;
        const existingAmount = selectedAmount;
        const existingDate = selectedRow.children[2].textContent;

        editCategoryInput.value = existingCategory;
        editAmountInput.value = existingAmount;
        editDateInput.value = existingDate;

        editModal.style.display = 'block';
    }

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


        if (!editedAmount || !editedCategory) {
            alert("Please fill in all fields before save.");
            return;
        }

        if (editedDate === "") {
            alert("Please fill in the date.");
            return;
        }

        selectedRow.children[0].textContent = editedCategory;
        selectedRow.children[1].textContent = `$${editedAmount}`;
        selectedRow.children[2].textContent = editedDate;

        totalAmount = totalAmount - selectedAmount + editedAmount;
        totalAmountElement.textContent = totalAmount.toFixed(2);

        const remainingAmount = finalBudget - (finalBudget - totalAmount);
        remA.innerText = remainingAmount;

        const spendAmount = (finalBudget - totalAmount).toFixed(2);
        leftB.innerText = spendAmount;

        const index = Array.from(expenseList.children).indexOf(selectedRow);
        expensesArray[index] = {
            category: editedCategory,
            amount: editedAmount,
            date: editedDate
        };

        localStorage.setItem("expenses", JSON.stringify(expensesArray));

        editModal.style.display = 'none';
    });

});
