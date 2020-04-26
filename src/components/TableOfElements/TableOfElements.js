import React from 'react';
import Element from './Element';
import elementList from '../../data/elements';
import './TableOfElements.css';

const TableOfElements = () => (
    <>
        <ol className="c-table-of-elements">
            {elementList.elements.map((element, index) => {
                return <Element key={`element_item_${index}`} element={element} />;
            })}
        </ol>
    </>
);

export default TableOfElements;
