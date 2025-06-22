let products = [
  [101, "Samsung Galaxy S21", 25, 699.99],
  [102, "Apple MacBook Pro 13", 15, 1299.99],
  [103, "Sony Headphones WH-1000XM4", 30, 349.99],
  [104, "Canon EOS Rebel T7 DSLR Camera", 10, 449.99],
  [105, "Apple iPad Air", 20, 599.99],
  [106, "Microsoft Surface Laptop 4", 8, 999.99],
  [107, "JBL Flip 5 Portable Speaker", 35, 119.99],
  [108, "Apple iPhone 13", 18, 799.99],
  [109, "Dell XPS 13", 12, 899.99],
  [110, "Bose QuietComfort Earbuds", 22, 279.99],
];
const headers = ["ID", "Name", "Quantity", "Price"];

const tableContainer = document.querySelector("#tableContainer");

let table = document.createElement("table");
table.setAttribute("class", "table table-bordered table-dark table-striped");

let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

let headingsRow = document.createElement("tr");

headers.forEach((header) => {
  const th = document.createElement("th");
  th.innerText = header;
  headingsRow.appendChild(th);
});
thead.appendChild(headingsRow);

products.forEach((product) => {
  const tr = document.createElement("tr");
  product.forEach((item) => {
    const td = document.createElement("td");
    td.innerText = item;
    tr.appendChild(td);
  });

  const valueTd = document.createElement("td");
  const productValue = product[2] * product[3];
  valueTd.innerText = `${productValue.toFixed(2)} $`;
  tr.appendChild(valueTd);

  tbody.appendChild(tr);
});

table.appendChild(thead);
table.appendChild(tbody);
tableContainer.appendChild(table);

const productValueHeader = document.createElement("th");
productValueHeader.innerText = `Product Value ($)`;
headingsRow.appendChild(productValueHeader);

// Total inventory value

const sumValue = () => {
  return products.reduce((total, product) => {
    const quantity = product[2];
    const price = product[3];
    return total + quantity * price;
  }, 0);
};

const totalValue = document.querySelector("#totalValue");
totalValue.innerText = `Total Inventory Value: $${sumValue().toFixed(2)}`;

// Create a wrapper for the button and filtered table
const filteredSection = document.createElement("div");
filteredSection.setAttribute("id", "filteredSection");
filteredSection.setAttribute("class", "mt-4");

// Create and configure the filter button
const filterButton = document.createElement("button");
filterButton.innerText = "Filter Table";
filterButton.setAttribute("class", "btn btn-light mb-3");

// Create an empty container for the filtered table
const filteredTable = document.createElement("div");
filteredTable.setAttribute("id", "filteredTable");

// Append button and table container to the wrapper
filteredSection.appendChild(filterButton);
filteredSection.appendChild(filteredTable);

// Append the wrapper below the main table
tableContainer.parentNode.insertBefore(
  filteredSection,
  tableContainer.nextSibling
);

// Function to create filtered table
const createFilteredTable = () => {
  // Clear previous filtered results
  filteredTable.innerHTML = "";

  const filteredProducts = products.filter((product) => product[2] > 10);

  const filtered = document.createElement("table");
  filtered.setAttribute(
    "class",
    "table table-bordered table-dark table-striped"
  );

  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  const th1 = document.createElement("th");
  th1.innerText = "ID";
  const th2 = document.createElement("th");
  th2.innerText = "Name";

  trHead.appendChild(th1);
  trHead.appendChild(th2);
  thead.appendChild(trHead);

  const tbody = document.createElement("tbody");

  filteredProducts.forEach((product) => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = product[0]; // ID
    const td2 = document.createElement("td");
    td2.innerText = product[1]; // Name

    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  });

  filtered.appendChild(thead);
  filtered.appendChild(tbody);
  filteredTable.appendChild(filtered);
};

// Add event listener
filterButton.addEventListener("click", createFilteredTable);

// Last assignment

// ========== NEW HIGHLIGHTED TABLE SECTION ==========
const quantityPriceSection = document.createElement("div");
quantityPriceSection.setAttribute("id", "quantityPriceSection");
quantityPriceSection.setAttribute("class", "mt-4");

// Button
const quantityPriceButton = document.createElement("button");
quantityPriceButton.innerText = "Highlight Quantity & Price";
quantityPriceButton.setAttribute("class", "btn btn-danger mb-3");

// Container for the new table
const quantityPriceTableContainer = document.createElement("div");
quantityPriceTableContainer.setAttribute("id", "quantityPriceTable");

// Append to the section
quantityPriceSection.appendChild(quantityPriceButton);
quantityPriceSection.appendChild(quantityPriceTableContainer);

// Insert below the filteredSection
filteredSection.parentNode.insertBefore(
  quantityPriceSection,
  filteredSection.nextSibling
);

// Create function to generate new table
const createQuantityPriceTable = () => {
  quantityPriceTableContainer.innerHTML = "";

  const table = document.createElement("table");
  table.setAttribute("class", "table table-bordered table-dark table-striped");

  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  const th1 = document.createElement("th");
  th1.innerText = "Quantity";
  const th2 = document.createElement("th");
  th2.innerText = "Price";

  trHead.appendChild(th1);
  trHead.appendChild(th2);
  thead.appendChild(trHead);

  const tbody = document.createElement("tbody");

  products.forEach((product) => {
    const tr = document.createElement("tr");

    const quantity = product[0];
    const price = product[1];

    const tdQuantity = document.createElement("td");
    tdQuantity.innerText = quantity;

    const tdPrice = document.createElement("td");
    tdPrice.innerText = `${price}`;

    // Highlight entire row if quantity > 20
    if (quantity > 105) {
      tr.style.backgroundColor = "red";
      tr.style.color = "white";
    }

    // Highlight only price cell if price > 1000
    tr.appendChild(tdQuantity);
    tr.appendChild(tdPrice);
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  quantityPriceTableContainer.appendChild(table);
};

// Add event listener to the new button
quantityPriceButton.addEventListener("click", createQuantityPriceTable);
