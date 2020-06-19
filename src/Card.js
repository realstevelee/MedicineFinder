import React from 'react';

const Card = (props) => {
    const { links, name, symptom } = props;
    return (
        <div className="bg-white dib br3 pa3 ma2 grow bw2 shadow-5 w-20">
            <img alt='medicine' src={links} width="230"/>
            <div>
                <div>
                    <h2>{name}</h2>
                    <p>{symptom}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;