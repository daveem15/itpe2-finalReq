function addProduct() {
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productImage = document.getElementById('productImage').value;

    // Create a new row in the table
    var table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    // Display product information in the new row
    cell1.innerHTML = productName;
    cell2.innerHTML = '$' + productPrice;
    cell3.innerHTML = '<img src="' + productImage + '" alt="' + productName + '">';

    // Add buttons for actions
    cell4.innerHTML = '<button onclick="showProductInfo(this)">Show Info</button> ' +
                      '<button onclick="updateProduct(this)">Update</button> ' +
                      '<button onclick="deleteProduct(this)">Delete</button>';
}

function showProductInfo(button) {
    var row = button.parentNode.parentNode;
    var name = row.cells[0].innerHTML;
    var price = row.cells[1].innerHTML;
    var image = row.cells[2].querySelector('img').src;

    alert('Product Name: ' + name + '\nProduct Price: ' + price + '\nProduct Image: ' + image);
}

function updateProduct(button) {
    // Add your update logic here
    alert('Update functionality will be implemented here');
}

function deleteProduct(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}