import React from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { PresupuestoScreen } from './screens/PresupuestoScreen';
import { 
    BrowserRouter as Router, 
    Route, 
    Switch,
    Redirect
} from 'react-router-dom';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={ HomeScreen } exact />
                    <Route path="/presupuesto" component={ PresupuestoScreen } exact />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
