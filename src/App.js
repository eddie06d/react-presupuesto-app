import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { PresupuestoContext } from './providers/PresupuestoContext';

export const App = () => {
    const [presupuesto, setPresupuesto] = useState('');

    return (
        <PresupuestoContext.Provider value={ {
            presupuesto, 
            setPresupuesto
        } }>
            <AppRouter />
        </PresupuestoContext.Provider>
    )
}
