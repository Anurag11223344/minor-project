import React from 'react';

export default function Landing() {
  return (
    <div className="container section-m1">
      <h1>OS Algorithm Visualizer</h1>
      <div className="algorithm-selector">
        <h2>Select Algorithm:</h2>
        <form id="algorithm">
                <label><input type="radio" name="algorithm" value="fcfs" defaultChecked/> FCFS</label><br/>
                <label><input type="radio" name="algorithm" value="sjf"/> SJF</label><br/>
                <label><input type="radio" name="algorithm" value="priority"/> Priority Scheduling</label><br/>
                <label><input type="radio" name="algorithm" value="robin"/> Round Robin</label>
        </form>
      </div>

      <div className="input-table">
        <table id="inputTable">
          <thead>
            <tr>
              <th>Process</th>
              <th>Arrival Time</th>
              <th>Burst Time</th>
              <th className="servtime">Service Time</th>
              <th className="priority-only">Priority</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  <td>P0</td>
                  <td>0</td>
                  <td><input className="initial exectime" type="text" value="5" /></td>
                  <td className="servtime"></td>
                  <td className="priority-only initial"><input type="text"/></td>
              </tr>
              <tr>
                  <td>P1</td>
                  <td>1</td>
                  <td><input className="initial exectime" value="3" /></td>
                  <td className="servtime"></td>
                  <td className="priority-only"><input type="text"/></td>
              </tr>
          </tbody>
        </table>
        <input 
          id="minus" 
          className="control-button" 
          type="button" 
          value="-" 
          onClick={() => deleteRow()} 
        />
        <input 
          className="control-button" 
          type="button" 
          value="+" 
          onClick={() => addRow()}
        />
      </div>

      <div id="quantumParagraph" style={{ display: 'none' }}>
        Quantum: <input style={{ width: '50px' }} id="quantum" type="text" defaultValue="3" />
      </div>

      <div className="action-buttons">
        <input 
          className="control-button" 
          type="button" 
          value="Go" 
          onClick={() => draw()}/>
      </div>

      <div className="results">
        <div id='fresh'></div>
        <p>Timer: <strong id="timer"></strong> sec</p>
      </div>
    </div>
  );
}
