import { useState } from "react";

export const usePresupuesto = (presupuesto) => {
    const [presupuestoValues, setPresupuestoValues] = useState({
        presupuesto,
        restante: presupuesto,
        gastos: []
    });

    const addGasto = (gasto) => {
        setPresupuestoValues({
            ...presupuestoValues,
            restante: presupuestoValues.restante - gasto.cantidad,
            gastos: [...presupuestoValues.gastos, gasto]
        });
    };

    const deleteGasto = (gasto) => {
        setPresupuestoValues({
            ...presupuestoValues,
            restante: presupuestoValues.restante + gasto.cantidad,
            gastos: presupuestoValues.gastos.filter((g) => g.descripcion !== gasto.descripcion)
        });
    };

    return [ presupuestoValues, addGasto, deleteGasto ];

}
