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
import Description from "./Description";

const breakfast = [
    { id: 1, name: 'Яєшня', picture: breakfast1, ingredients: 'яйце, помідор, огірок, листя салату, сосиска, булка, масло.' },
    { id: 2, name: 'Солодкі сирники', picture: breakfast2, ingredients: 'сир кисломолочний, лісові ягоди, ягідний джем, сметана.' },
    { id: 3, name: 'Солені сирники', picture: breakfast3, ingredients: 'сир кисломолочний, зелень, соус песто, сметана.' },
    { id: 4, name: 'Млинці з куркою та грибами', picture: breakfast4, ingredients: 'млинці, курка, гриби, зелень, помідор чері, кетчуп.' },
    { id: 5, name: 'Солодкі млинці', picture: breakfast5, ingredients: 'млинці, сир кисломолочний, лісові ягоди, сметана.' },
    { id: 6, name: 'Вівсянка', picture: breakfast6, ingredients: 'вівсянка, банан, малина, горіх.' },
    { id: 7, name: 'Тарілка "Здоров\'я"', picture: breakfast7, ingredients: 'яйце, мікро грін, помідор чері.' },
    { id: 8, name: 'Круасан з нарізкою', picture: breakfast8, ingredients: 'круасан, сир твердий, помідор, огірок, листя салату, оливки, масло.' }
];

const Breakfasts = () => {

    const list = breakfast.map(item => {
        return (
            <div key={item.id}>
                <CustomCard name={item.name} picture={item.picture} ingredients={item.ingredients} />
            </div>
        );
    });

    return (
        <Container>
            <Description />
            <div className="d-flex flex-wrap justify-content-center">
                {list}
            </div>
        </Container>
    )
};

export default Breakfasts;