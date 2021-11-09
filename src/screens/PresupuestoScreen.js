import React, { useContext } from 'react';
import './presupuestoScreen.css';
import { PresupuestoContext } from '../providers/PresupuestoContext';
import { usePresupuesto } from '../hooks/usePresupuesto';
import { IngresarGasto } from '../components/IngresarGasto';
import { ListGastos } from '../components/ListGastos';

export const PresupuestoScreen = () => {
    const { presupuesto } = useContext(PresupuestoContext);

    const [ { restante, gastos }, addGasto, deleteGasto ] = usePresupuesto(presupuesto);

    return (
        <div className="container mt-5">
            <h1 className="text-light text-center mb-3">GASTOS</h1>
            <div className="contenido">
                <IngresarGasto addGasto={ addGasto } restante={ parseInt(restante) } />
                <ListGastos restante={ parseInt(restante) } deleteGasto={ deleteGasto } gastos={ gastos } />
            </div>
        </div>
    )
}
