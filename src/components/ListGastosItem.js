import React from 'react';
import PropTypes from 'prop-types';

export const ListGastosItem = ({ gasto, deleteGasto }) => {
    return (
        <li className="list-group-item d-flex justify-content-between ">
            {gasto.descripcion}
            <div>
                <span className="badge rounded-pill bg-secondary">${gasto.cantidad}</span>
                <i
                    className="fas fa-trash-alt text-danger delete"
                    onClick={() => deleteGasto(gasto)}
                ></i>
            </div>
        </li>
    )
}

ListGastosItem.propTypes = {
    gasto: PropTypes.object.isRequired,
    deleteGasto: PropTypes.func.isRequired
}