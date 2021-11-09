import React, { useContext, useState } from 'react';
import { checkPresupuesto } from '../helpers/checkFields';
import { useForm } from '../hooks/useForm';
import { PresupuestoContext } from '../providers/PresupuestoContext';

export const FormSetPresupuesto = ({ history }) => {
    const { setPresupuesto } = useContext(PresupuestoContext);

    const [ { presupuesto }, handleChange, reset ] = useForm({
        presupuesto: ''
    });

    const [ { message, show }, setError ] = useState({
        message: '',
        show: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let check = checkPresupuesto(presupuesto);
        setError(check);
        if(!check.show) {
            setPresupuesto(presupuesto);
            history.push('/presupuesto');
        }
        reset();
    }

    return (
        <form>
            {
                show && (
                    <div className="error">
                        <span className="badge bg-danger mb-3 presupuesto-error">
                            {message}
                        </span>
                    </div>
                )
            }
            <input
                type="text"
                name="presupuesto"
                value={presupuesto}
                onChange={handleChange}
                className="form-control form-control-lg mb-3 text-center"
                placeholder="Ingrese presupuesto..."
            />
            <button
                type="submit"
                className="btn btn-secondary w-100"
                onClick={handleSubmit}
            >
                ACEPTAR
            </button>
        </form>
    )
}
