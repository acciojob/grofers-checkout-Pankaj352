const getSumBtn = document.getElementById("getSumBtn");

const getSum = () => {
    // Get all the price elements (with class "price")
    const priceElements = document.querySelectorAll('.price');
    
    // Initialize total price to 0
    let totalPrice = 0;

    // Loop through each price element and add its value to the total price
    priceElements.forEach(function(priceElement) {
        totalPrice += parseInt(priceElement.innerText, 10) || 0; // Convert string to integer and add
    });

    // Create a new row in the table for the total price (if it doesn’t already exist)
    let totalRow = document.getElementById("totalRow");
    if (!totalRow) {
        const table = document.querySelector('table');
        totalRow = document.createElement('tr');
        totalRow.id = "totalRow";
        const totalCell = document.createElement('td');
        totalCell.colSpan = 2; // Span across both columns of the table
        totalRow.appendChild(totalCell);
        table.appendChild(totalRow);
    }

    // Update the total price text
    totalRow.children[0].textContent = `Total: Rs ${totalPrice}`;

    // Display total price in the paragraph as well
    const ansParagraph = document.getElementById('ans');
    ansParagraph.textContent = `Total Price: Rs ${totalPrice}`;
};

// Attach event listener to the button
getSumBtn.addEventListener("click", getSum);
