import React from 'react';
import { useHistory } from 'react-router';
import { FormSetPresupuesto } from '../components/FormSetPresupuesto';
import './homeScreen.css';

export const HomeScreen = () => {
    const history = useHistory();

    return (
        <div className="contenido_home mt-5">
            <h1 className="text-light pb-2">Ingrese Presupuesto</h1>
            <div className="card card_home">
                <div className="card-body">
                    <FormSetPresupuesto history={ history } />
                </div>
            </div>
        </div>
    )
}
