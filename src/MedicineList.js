import React from 'react';
import Card from './Card';

const MedicineList = ({ medicine }) => {
    const medicineComponent = medicine.map((item, i) => {
        return <Card
            key={i}
            id={medicine[i].id}
            name={medicine[i].name}
            symptom={medicine[i].symptom}
            links={medicine[i].links} />
    });

    return (
        <div>
            {medicineComponent}
        </div>
    );
}

export default MedicineList;