import React from 'react';

const Flight = ({name, year, img}) => {
    return (
        <div className={'flight'}>
            <div className={'text'}>
                <h1>{name}</h1>
                <h3>{year}</h3>
            </div>
            <div>
                <img src={img} alt={name}/>
            </div>
        </div>
    );
};

export default Flight;