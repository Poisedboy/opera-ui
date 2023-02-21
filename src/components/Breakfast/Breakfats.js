import React from "react";
import { Container } from "react-bootstrap";
import CustomCard from './CustomCard';

import breakfast1 from '../../assets/breakfast/fry-eggs.jpg';
import breakfast2 from '../../assets/breakfast/sweet-curd-fritter.jpg';
import breakfast3 from '../../assets/breakfast/solt-curd-fritter.jpg';
import breakfast4 from '../../assets/breakfast/chicken-flippers.jpg';
import breakfast5 from '../../assets/breakfast/sweet-flippers.jpg';
import breakfast6 from '../../assets/breakfast/cereal.jpg';
import breakfast7 from '../../assets/breakfast/plate-health.jpg';
import breakfast8 from '../../assets/breakfast/croissant-n-cutting.jpg';

const breakfast = [
    { id: 1, name: 'Яєшня', picture: breakfast1 },
    { id: 2, name: 'Солодкі сирники', picture: breakfast2 },
    { id: 3, name: 'Солені сирники', picture: breakfast3 },
    { id: 4, name: 'Млинці з куркою та грибами', picture: breakfast4 },
    { id: 5, name: 'Солодкі млинці', picture: breakfast5 },
    { id: 6, name: 'Вівсянка', picture: breakfast6 },
    { id: 7, name: 'Тарілка "Здоров\'я"', picture: breakfast7 },
    { id: 8, name: 'Круасан з нарізкою', picture: breakfast8 }
];

const Breakfasts = () => {

    const list = breakfast.map(item => {
        return (
            <div key={item.id}>
                <CustomCard name={item.name} picture={item.picture} />
            </div>
        );
    });

    return (
        <Container className="d-flex flex-wrap justify-content-center">
            {list}
        </Container>
    )
};

export default Breakfasts;