import React, { useContext } from 'react';
import { colorRestBox } from '../helpers/colorRestBox';
import { PresupuestoContext } from '../providers/PresupuestoContext';

export const CabeceraListGastos = ({ restante }) => {
    const { presupuesto } = useContext(PresupuestoContext);

    return (
        <div className="d-flex">
            <div className="presupuesto w-50">
                Presupuesto: <span>${presupuesto}</span>
            </div>
            <div className={'restante w-50 ' + colorRestBox(restante, presupuesto)}>
                Restante: <span>${restante}</span>
            </div>
        </div>
    )
}
