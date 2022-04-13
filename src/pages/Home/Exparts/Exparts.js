import React from 'react';

import expert1 from '../../../images/experts/expert1.jpg'
import expert2 from '../../../images/experts/expert2.jpg'
import expert3 from '../../../images/experts/expert3.jpg'
import expert4 from '../../../images/experts/expert4.jpg'
import expert5 from '../../../images/experts/expert5.jpg'
import expert6 from '../../../images/experts/expert6.png'

import Expart from '../Expart/Expart'

const Exparts = () => {

    const exparts = [
        { id: 1, name: 'Henry', img: expert1 },
        { id: 2, name: 'Rock', img: expert2 },
        { id: 3, name: 'Jack', img: expert3 },
        { id: 4, name: 'Smith', img: expert4 },
        { id: 5, name: 'Taylor', img: expert5 },
        { id: 6, name: 'Jonson', img: expert6 }
    ]

    return (
        <div className='container'>
            <h1 className='text-danger text-center my-3'>this is experts</h1>
            <div className='row'>
                {
                    exparts.map(expart => <Expart
                        key={expart.id}
                        expart={expart}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;