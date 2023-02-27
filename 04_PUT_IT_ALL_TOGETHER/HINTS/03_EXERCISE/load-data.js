async function main() {
    // Fetching the CSV
    fetch('data/top_10_county_Texas_change.csv')
    // Returning it as text
      .then(response => response.text())
      .then(data => {
        // Get the table as a variable by calling the id myTable
        let tableElement = document.getElementById('myTable');
        // Empty out what's inside that table
        tableElement.innerHTML = '';
        // Run a function (see below) and pass the csv data and the table variable as arguments
        createHTMLtable(data, tableElement);
    });
  }
  
  function createHTMLtable(csv, tableElement) {
    // Split every row
    const rows = csv.trim().split(/\r?\n|\r/);
    console.log(rows)

    // Set variables as an empty string, one for the whole table, one for the table rows and one for the table header
    let table = '';
    let tableRows = '';
    let tableHeader = '';

    // We're going to loop over each row with two arguments, the row and index of the row
    rows.forEach(function (row, row_index) {
      console.log(row, row_index)
      // Set a variable called for the columns of the row
      let tableColumns = '';
      // Because these are csvs, we need to split the columns in a row on every comma
      let columns = row.split(',');
      // Another loop! This time we're looping over each column
      columns.forEach(function (column, column_index) {
        // One way to do an if/then statement
        // We're creating the tableColumns, if it's the first row (index 0), then we're adding the tag <th> otherwise we add the tag <td>
        console.log(column, column_index)
          if (row_index == 0) {
            tableColumns += '<th>' + column + '</th>';
          } else {
            if (column_index == 4) {
                tableColumns += '<td class="rightAlign">' + column + '%</td>';
            }
            else {
                tableColumns += '<td>' + column + '</td>';
            } 
          }
      });
      // Second way to do an if/then statement
      // If this is first row (index 0), then we're adding the tableColumns into the variable called tableHeader, if not, we'll add it tableRows
      if (row_index == 0) {
        tableHeader += '<tr>' + tableColumns  + '</tr>';
      } else {
        tableRows += '<tr>' + tableColumns  + '</tr>';
      }
    });

    console.log(tableHeader)
    console.log(tableRows)

    // We can now build the table with the values from the csv inside the tags we created in the loop
    table += '<table>';
    table += '<thead>';
    table += tableHeader;
    table += '</thead>';
    table += '<tbody>';
    table += tableRows;
    table += '</tbody>';
    table += '</table>';
  
    tableElement.innerHTML += table;
  }
  
  main();
  