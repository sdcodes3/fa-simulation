import { useEffect, useState } from 'react';
import GraphVisualization from './graph';
import TableComponent from './table';

const Home = () => {

    const [graphString, setGraphString] = useState('');
    const [accepted, setAccepted] = useState(false);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/')
          .then(response => response.json())  // Parse response as JSON
          .then(data => {
            console.log('Graph string received:', data.output_string);
            setGraphString(data.output_string);
          })
          .catch(error => console.error('Error fetching graph string:', error));
          setAccepted(true)
      }, []);
    return (
        <div className='py-1'>
            <div className='fs-1 fw-bold text-center'>Thoc Innovative</div>
            <div className='d-flex flex-column flex-md-row flex-wrap p-3'>
                <div className='d-flex flex-column col-6 align-items-center gap-3'>
                    <h2>Finite Automata</h2>
                    <div style={{border:"2px dotted black", padding:"1rem"}}>
                        <GraphVisualization dot={graphString} />
                    </div>
                </div>
                <div className='d-flex flex-column col-6 align-items-center justify-content-between gap-3'>
                    <div className='d-flex flex-column justify-content-center gap-3'>
                        <h2>Transition Table</h2>
                        <TableComponent />
                    </div>
                    <div className='d-flex flex-column justify-content-center gap-3 w-100'>
                        <h2>Input String</h2>
                        <div className='d-flex gap-3'>
                            <h4 className='text-nowrap'>Enter the String to check : </h4>
                            <input type='text' className='form-control' />
                        </div>
                        {
                            accepted ? 
                            <div className='fs-3 d-flex gap-3 fw-bold justify-content-center'>
                                String is : <div className='text-success fw-bold'>Accepted</div>
                            </div>
                            :
                            <div className='fs-3 d-flex gap-3 fw-bold justify-content-center'>
                                String is : <div className='text-danger fw-bold'>Rejected</div>
                            </div>
                        }
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='text-end pe-2'>
                Prepared by : 
            </div>
        </div>
    );
}


export default Home;