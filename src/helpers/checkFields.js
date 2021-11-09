export const checkGasto = ({ cantidad, descripcion, restante }) => {
    let error = {};
    if(!descripcion || !cantidad) {
        error = {
            message: 'Todos los campos son obligatorios',
            show: true
        };
    }else {
        if(isNaN(cantidad)) error = { message: 'La cantidad debe ser un valor numérico', show: true};
        else if(parseInt(cantidad) <= 0) error = { message: 'La cantidad debe ser mayor a cero',  show: true};
        else if(parseInt(cantidad) > restante) error = { message: 'La cantidad no puede ser mayor al presupuesto', show: true};
        else error = { message: '', show: false }
    }
    return error;
};

export const checkPresupuesto = (cantidad) => {
    let error = {};
    if(!cantidad) {
        error = {
            message: 'El presupuesto es obligatorio',
            show: true
        };
    }else {
        if(isNaN(cantidad)) error = { message: 'El presupuesto debe ser un valor numérico', show: true};
        else if(parseInt(cantidad) <= 0) error = { message: 'El presupuesto debe ser mayor a cero',  show: true};
        else error = { message: '', show: false }
    }
    return error;
}