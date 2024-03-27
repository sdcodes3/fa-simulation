import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TableComponent() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/table')
            .then(response => {
                // const dataArray = Object.entries(response.data).map(([key, value]) => ({ id: key, ...value }));
                setTableData(response.data.table);
                console.log("Table Data : ",response.data.table);
            })
            .catch(error => {
                console.error('Error fetching table data:', error);
            });
    }, []); // Empty dependency array ensures useEffect runs only once after component mounts

    return (
        <div className="container">
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>0</th>
                            <th>1</th>
                            {/* {Object.keys(tableData).map((rowIndex) => (
                                <th key={rowIndex}>{rowIndex}</th>
                            ))} */}
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {Object.keys(tableData).map((rowIndex) => (
                            <tr key={rowIndex}>
                                <td>{rowIndex}</td>
                                {Object.keys(tableData[rowIndex]).map((colIndex) => (
                                    <td key={colIndex}>{tableData[rowIndex][colIndex]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>            
        </div>
    );
}

export default TableComponent;
