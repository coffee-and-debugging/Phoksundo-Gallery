import React, { useState } from 'react';
import './Increment.css';

const Increment = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [result, setResult] = useState(0);

    const handleInputChange = (e, setValue) => {
        const inputValue = parseInt(e.target.value) || 0;
        setValue(inputValue);
    };

    const handleAddition = () => {
        setResult(value1 + value2);
    };

    const handleSubtraction = () => {
        setResult(value1 - value2);
    };

    return (
        <div className="center-container">
            <div>
                <label>Input 1: &nbsp;</label>
                <input type="number" value={value1} onChange={(e) => handleInputChange(e, setValue1)} />
            </div>
            &nbsp;
            <div>
                <label>Input 2: &nbsp;</label>
                <input type="number" value={value2} onChange={(e) => handleInputChange(e, setValue2)} />
            </div>
            &nbsp;
            <div className='inline-flex'>
                <button className='btn btn-success' onClick={handleAddition}>
                    Add values
                </button>
                &nbsp;
                <button className='btn btn-primary' onClick={handleSubtraction}>
                    Subtract values
                </button>
                &nbsp;
                <button className='btn btn-danger' onClick={() => setResult(0)}>
                    Reset Result
                </button>
            </div>
            <h2>Result: {result}</h2>
        </div>
    );
};

export default Increment;






// import React, { useState } from 'react'

// const Increment = () => {
//     const [value, setValue] = useState(0)


//     // const increase = () => (
//     //     setValue(value + 1)
//     // )


//     return (
//         <>
//             <center>
//                 <h2>{value}</h2>
//                 <button className='btn btn-success' onClick={() => setValue(value + 1)}>Increment</button>
//                 &nbsp;&nbsp;
//                 {<button className='btn btn-danger' onClick={() => setValue(value - 1)}>Decrement</button>}
//                 &nbsp;&nbsp;
//                 <button className='btn btn-primary' onClick={() => setValue(0)}>Reset Value</button>
//             </center>
//         </>
//     )
// }
// export default Increment