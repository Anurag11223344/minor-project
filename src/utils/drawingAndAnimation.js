// // Example implementation for the drawing and animation functions

// /**
//  * Draws the table based on rows and algorithm
//  * @param {Array} rows - The array of process rows
//  * @param {string} algorithm - The selected scheduling algorithm
//  */
// export const draw = (rows, algorithm) => {
//     // Clear previous drawings
//     const tableContainer = document.querySelector('.input-table');
//     if (tableContainer) {
//       tableContainer.innerHTML = ''; // Clear existing table
//     }
  
//     // Example: Drawing logic based on rows and algorithm
//     const table = document.createElement('table');
//     const thead = document.createElement('thead');
//     const tbody = document.createElement('tbody');
  
//     // Create table header
//     const headerRow = document.createElement('tr');
//     const headers = ['Process', 'Arrival Time', 'Execute Time', 'Service Time'];
//     if (algorithm === 'priority') headers.push('Priority');
//     headers.forEach(header => {
//       const th = document.createElement('th');
//       th.textContent = header;
//       headerRow.appendChild(th);
//     });
//     thead.appendChild(headerRow);
  
//     // Create table body
//     rows.forEach(row => {
//       const tr = document.createElement('tr');
//       Object.values(row).forEach(value => {
//         const td = document.createElement('td');
//         td.textContent = value;
//         tr.appendChild(td);
//       });
//       tbody.appendChild(tr);
//     });
  
//     table.appendChild(thead);
//     table.appendChild(tbody);
//     tableContainer.appendChild(table);
//   };
  
//   /**
//    * Animates the drawing process
//    */
//   export const animate = () => {
//     // Example: Animation logic (you can use libraries like GSAP or requestAnimationFrame for smooth animations)
//     const timerElement = document.getElementById('timer');
//     if (timerElement) {
//       let time = 0;
//       const interval = setInterval(() => {
//         time += 1;
//         timerElement.textContent = time;
//       }, 1000);
  
//       // Clear interval after some time (for example, 10 seconds)
//       setTimeout(() => {
//         clearInterval(interval);
//       }, 10000);
//     }
//   };
  