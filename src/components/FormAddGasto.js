import React, { useState } from 'react';
import { checkGasto } from '../helpers/checkFields';
import { useForm } from '../hooks/useForm';

export const FormAddGasto = ({ addGasto, restante }) => {
    const [ { message, show }, setError ] = useState({
        message: '',
        show: false
    });

    const [ { descripcion, cantidad }, handleChange, reset ] = useForm({
        descripcion: '',
        cantidad: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const check = checkGasto({ descripcion, cantidad: parseInt(cantidad), restante });
        setError(check);
        if(!check.show) addGasto({ descripcion, cantidad: parseInt(cantidad) });
        reset();
    }

    return (
        <form>
            {
                show && (
                    <div className="d-flex justify-content-center">
                        <span className="badge bg-danger mb-3">{message}</span>
                    </div>
                )
            }
            <div className="mb-3">
                <label htmlFor="gasto" className="form-label">Gasto</label>
                <input
                    type="text"
                    className="form-control"
                    id="gasto"
                    name="descripcion"
                    placeholder="Ej: Comida.."
                    value={descripcion}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="cantidad" className="form-label">Cantidad</label>
                <input
                    type="text"
                    className="form-control"
                    id="cantidad"
                    name="cantidad"
                    placeholder="Ej: 300"
                    value={cantidad}
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
                className="btn btn-secondary w-100 mt-1"
                onClick={handleSubmit}
            >
                AGREGAR GASTO
            </button>
        </form>
    )
}
