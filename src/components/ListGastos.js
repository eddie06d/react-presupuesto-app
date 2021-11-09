import React from 'react';
import PropTypes from 'prop-types';
import { ListGastosItem } from './ListGastosItem';
import { CabeceraListGastos } from './CabeceraListGastos';

export const ListGastos = ({ restante, deleteGasto, gastos }) => {
    return (
        <div className="card">
            <h5 className="card-header text-center my-2 mx-3">Listado de Gastos</h5>
            <div className="card-body mt-3">
                <CabeceraListGastos restante={ restante } />
                <ul className="list-group list-group-flush mt-3">
                    {
                        gastos.map((gasto, index) => (
                            <ListGastosItem key={ index } gasto={ gasto } deleteGasto={ deleteGasto } />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

ListGastos.propTypes = {
    restante: PropTypes.number.isRequired,
    gastos: PropTypes.array.isRequired,
    deleteGasto: PropTypes.func.isRequired
}