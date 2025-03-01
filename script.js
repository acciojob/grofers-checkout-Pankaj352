const getSumBtn = document.getElementById("getSumBtn");

const getSum = () => {
    // Get all the price elements (with class "price")
    const priceElements = document.querySelectorAll('.price');
    
    // Initialize total price to 0
    let totalPrice = 0;

    // Loop through each price element and add its value to the total price
    priceElements.forEach(function(priceElement) {
        totalPrice += parseInt(priceElement.innerText, 10); // Convert string to integer and add
    });

    // Create a new row in the table for the total price
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Span across both columns of the table
    totalCell.textContent = Total: Rs ${totalPrice}; // Set the total price text

    // Append the total cell to the new row
    newRow.appendChild(totalCell);

    // Append the new row to the table
    table.appendChild(newRow);

    // Optionally, you can also display the total price in the paragraph
    const ansParagraph = document.getElementById('ans');
    ansParagraph.textContent = Total Price: Rs ${totalPrice};
};

getSumBtn.addEventListener("click", getSum);