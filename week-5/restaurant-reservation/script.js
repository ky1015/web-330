/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Kylie Struhs
  Date: April 21 2024
  Filename: script.js

  Instructions: In your JavaScript code, create an in-memory object array for each table in the
  restaurant. Each object should contain properties for table number, capacity, and
  isReserved.
    Create a function reserveTable with three formal parameters: table number, a
  callback function, and a time in milliseconds. The function should check if the table
  is available. If it is, update the isReserved property of the table and then use
  setTimeout to wait for the time specified in the formal parameter, then call the
  callback function with a success message. If the table is not available, it should
  immediately call the callback function with an error message.
    When the form is submitted, call the reserveTable function with a callback that
  updates the webpage with the success or error message.
*/

// Create an in-memory object array for each table in the restaurant
var tables = [
  // Add your table objects here
  {
    tableNumber: 1,
    capacity: 2,
    isReserved: true,
  },
  {
    tableNumber: 2,
    capacity: 2,
    isReserved: false,
  },
  {
    tableNumber: 3,
    capacity: 4,
    isReserved: true,
  },
  {
    tableNumber: 4,
    capacity: 6,
    isReserved: false,
  },
  {
    tableNumber: 5,
    capacity: 8,
    isReserved: false,
  },
  {
    tableNumber: 6,
    capacity: 2,
    isReserved: false,
  },
  {
    tableNumber: 7,
    capacity: 2,
    isReserved: true,
  },
  {
    tableNumber: 8,
    capacity: 4,
    isReserved: false,
  },
  {
    tableNumber: 9,
    capacity: 4,
    isReserved: true,
  },
  {
    tableNumber: 10,
    capacity: 8,
    isReserved: true,
  },
  {
    tableNumber: 11,
    capacity: 2,
    isReserved: false,
  },
  {
    tableNumber: 12,
    capacity: 2,
    isReserved: true,
  },
  {
    tableNumber: 13,
    capacity: 4,
    isReserved: true,
  },
  {
    tableNumber: 14,
    capacity: 6,
    isReserved: false,
  },
  {
    tableNumber: 15,
    capacity: 8,
    isReserved: true,
  },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // check tables for specific table number to get the properties of it
  let yourTable = tables.find(
    (yourTable) => yourTable.tableNumber === tableNumber
  );

  // if table is not already reserved
  if (yourTable.isReserved === false) {
    console.log("creating a reservation");
    setTimeout(() => {
      callback("Table successfully reserved. Thank you.");
      yourTable.isReserved = true;
    }, time);
  } else {
    // table is reserved
    callback("Table not available for reservation");
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // get inputted values from form for table number and time
    const tableNumber = parseInt(document.getElementById("tableNumber").value);
    const time = parseInt(document.getElementById("reservationTime").value);

    // Call the reserveTable function with the provided inputs
    reserveTable(
      tableNumber,
      function (message) {
        // Update the webpage with the success or error message
        document.getElementById("message").innerText = message;
      },
      time * 100
    );
  });
