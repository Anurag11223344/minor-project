import React, { useState, useEffect } from 'react';
import { draw, animate } from '../utils/drawingAndAnimation';

const Landing = () => {
  const [algorithm, setAlgorithm] = useState('fcfs');
  const [rows, setRows] = useState([
    { process: 'P0', arrival: 0, execute: 5, service: '', priority: '' },
    { process: 'P1', arrival: 1, execute: 3, service: '', priority: '' },
  ]);
  const [quantum, setQuantum] = useState(3); // Default quantum value

  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
  };

  const addRow = () => {
    const newProcess = `P${rows.length}`;
    const newRow = { process: newProcess, arrival: rows.length, execute: '', service: '', priority: '' };
    setRows([...rows, newRow]);
  };

  const deleteRow = () => {
    if (rows.length > 1) setRows(rows.slice(0, -1));
  };

  const recalculateServiceTime = () => {
    let totalExecuteTime = 0;
    let updatedRows = [];
  
    switch (algorithm) {
      case 'fcfs':
        updatedRows = rows.map((row, index) => {
          let newServiceTime = index === 0 ? row.arrival : totalExecuteTime;
          totalExecuteTime = newServiceTime + (parseInt(row.execute) || 0);
          return { ...row, service: newServiceTime };
        });
        break;
  
      case 'sjf':
        const sortedRows = [...rows].sort((a, b) => (parseInt(a.execute) || 0) - (parseInt(b.execute) || 0));
        totalExecuteTime = sortedRows[0].arrival;
        updatedRows = sortedRows.map(row => {
          const newServiceTime = totalExecuteTime;
          totalExecuteTime += parseInt(row.execute) || 0;
          return { ...row, service: newServiceTime };
        });
        break;
  
      case 'priority':
        const sortedByPriority = [...rows].sort((a, b) => (parseInt(b.priority) || 0) - (parseInt(a.priority) || 0));
        totalExecuteTime = sortedByPriority[0].arrival;
        updatedRows = sortedByPriority.map(row => {
          const newServiceTime = totalExecuteTime;
          totalExecuteTime += parseInt(row.execute) || 0;
          return { ...row, service: newServiceTime };
        });
        break;
  
      case 'robin':
        let queue = [...rows];
        let currentTime = 0;
        while (queue.length > 0) {
          const row = queue.shift();
          const executeTime = parseInt(row.execute) || 0;
          const quantumTime = Math.min(executeTime, quantum);
          const newServiceTime = currentTime;
          currentTime += quantumTime;
          const remainingTime = executeTime - quantumTime;
  
          if (remainingTime > 0) {
            queue.push({ ...row, execute: remainingTime });
          } else {
            updatedRows.push({ ...row, service: newServiceTime });
          }
        }
        break;
  
      default:
        break;
    }
  
    setRows(updatedRows);
  };

  useEffect(() => {
    recalculateServiceTime();
  }, [algorithm, rows]);

  // Drawing and animating the table
  useEffect(() => {
    draw(rows, algorithm);
    animate();
  }, [rows, algorithm]);

  return (
    <div className="container">
      <h1>OS Algorithm Visualizer</h1>
      <div className="algorithm-selector">
        <h2>Select Algorithm:</h2>
        <form id="algorithm">
          <label><input type="radio" name="algorithm" value="fcfs" checked={algorithm === 'fcfs'} onChange={handleAlgorithmChange}/> FCFS</label><br/>
          <label><input type="radio" name="algorithm" value="sjf" checked={algorithm === 'sjf'} onChange={handleAlgorithmChange}/> SJF</label><br/>
          <label><input type="radio" name="algorithm" value="priority" checked={algorithm === 'priority'} onChange={handleAlgorithmChange}/> Priority Scheduling</label><br/>
          <label><input type="radio" name="algorithm" value="robin" checked={algorithm === 'robin'} onChange={handleAlgorithmChange}/> Round Robin</label>
        </form>
      </div>

      <div className="input-table">
        <table>
          <thead>
            <tr>
              <th>Process</th>
              <th>Arrival Time</th>
              <th>Execute Time</th>
              <th className="servtime">Service Time</th>
              {algorithm === 'priority' && <th className="priority-only">Priority</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.process}</td>
                <td>{row.arrival}</td>
                <td><input className="exectime" type="text" value={row.execute} onChange={(e) => {
                  const newRows = [...rows];
                  newRows[index].execute = e.target.value;
                  setRows(newRows);
                }} /></td>
                <td className="servtime">{row.service}</td>
                {algorithm === 'priority' && <td className="priority-only"><input type="text" value={row.priority} onChange={(e) => {
                  const newRows = [...rows];
                  newRows[index].priority = e.target.value;
                  setRows(newRows);
                }} /></td>}
              </tr>
            ))}
          </tbody>
        </table>
        <input className="control-button" type="button" value="-" onClick={deleteRow} />
        <input className="control-button" type="button" value="+" onClick={addRow} />
      </div>

      {algorithm === 'robin' && (
        <div id="quantumParagraph">
          Quantum: <input style={{ width: '50px' }} type="text" value={quantum} onChange={(e) => setQuantum(e.target.value)} />
        </div>
      )}

      <div className="action-buttons">
        <input className="control-button" type="button" value="Go" onClick={() => {/* Implement Go button action */}} />
      </div>

      <div className="results">
        <p>Timer: <strong id="timer"></strong> sec</p>
      </div>
    </div>
  );
};

export default Landing;
