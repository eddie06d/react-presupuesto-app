import React from 'react';
import PropTypes from 'prop-types';
import { FormAddGasto } from './FormAddGasto';

export const IngresarGasto = ({ addGasto, restante }) => {

    return (
        <div className="card">
            <h5 className="card-header text-center my-2 mx-3">Ingresar Gasto</h5>
            <div className="card-body">
                <FormAddGasto addGasto={ addGasto } restante={ restante }/>
            </div>
        </div>
    )
}

IngresarGasto.propTypes = {
    addGasto: PropTypes.func.isRequired,
    restante: PropTypes.number.isRequired
}