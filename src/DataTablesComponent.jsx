import { useState, useEffect } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';

import './App.css';

DataTable.use(DT);

function DataTablesComponent(){
    const [tableData, setTableData] = useState([
        // [ 'Tiger Nixon', 'System Architect' ],
        // [ 'Garrett Winters', 'Accountant' ],
        // ...
      ]);

    useEffect(() => {
        fetch('https://whitebook-engine.kuala.io/get-vehicle-makes')
          .then(response => response.json())
          .then(data => {
            const formattedData = data.data.map(car => [car.name, car.year_range.join(', ')]);
            setTableData(formattedData);
          });
    }, []);

    return (
        <DataTable data={tableData} className="display">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Year Range</th>
                </tr>
            </thead>
        </DataTable>
    );
}

export default DataTablesComponent;