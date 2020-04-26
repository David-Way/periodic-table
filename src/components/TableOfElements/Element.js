import PropTypes from 'prop-types';
import React from 'react';
import './Element.css';

const Element = ({ element, otherProps }) => {
    return (
        <li className={`c-element c-element--col-${element.xpos}`} data-period={element.xpos} data-element-group={element.category} {...otherProps}>
            <div className="c-element__container">
                <div className="c-element__header">
                    <h2 className="c-element__name">{element.name}</h2>
                    <i className="c-element__symbol">{element.symbol}</i>
                    <dl className="c-element-dl c-element-dl--bold">
                        <dt>Atomic mass</dt>
                        <dd>{element.atomic_mass}</dd>
                    </dl>
                </div>
                <div className="c-element__aside">
                    <dl className="c-element-dl c-element-dl--lead c-element-dl--align:right">
                        <dt>Atomic number</dt>
                        <dd>{element.number}</dd>
                    </dl>
                </div>
            </div>
            <div className="c-element__footer">
                {element.ionization_energies.length > 0 && (
                    <dl className="c-element-dl">
                        <dt>First ionisation energy</dt>
                        <dd>{element.ionization_energies[0]}</dd>
                    </dl>
                )}
                {element.electronegativity_pauling && (
                    <dl className="c-element-dl c-element-dl--align:right">
                        <dt>Electronegativity</dt>
                        <dd>{element.electronegativity_pauling}</dd>
                    </dl>
                )}
            </div>
        </li>
    );
};

Element.propTypes = {
  element: PropTypes.object,
}

Element.defaultProps = {
  element: {},
}

export default Element;
