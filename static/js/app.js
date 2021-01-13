// Set up the dat from data.js
const UfoData = data;

// get the references to the table
const tbody = d3.select("tbody");

// Creater a table with the data
function createTable(data) {
    tbody.html("");

    // get each item in the data and append it to row 
    data.forEach( (dataRow) => {
        
        // append a new row to the table
        const row = tbody.append("tr");

        // appends values to the table
        Object.values(dataRow)
              .forEach(value => {
                        let cell = row.append("td");
                            cell.text(value);
})})};

// create function to handle the click to print out the data
function handleClick() {

    // get the value property of the input element
    const input = d3.select("#datetime");
    let inputValue = input.property("value");
    
    // filter the data by date
    let filteredData = UfoData.filter(item => item.datetime == inputValue);

    // creata the table with the filtered data
    createTable(filteredData);

}

// handle click event
d3.selectAll("#filter-btn")
  .on("click", handleClick);

// Display filtered data
createTable(UfoData);
