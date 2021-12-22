import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomeView from '../views/HomeView';
import ProductsView from '../views/ProductsView';
import AccountsView from '../views/AccountsView';
import BudgetsView from '../views/BudgetsView';
import SalesView from '../views/SalesView';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/home" component={HomeView} />
                <Route exact path="/sales" component={SalesView} />
                <Route exact path="/products" component={ProductsView} />
                <Route exact path="/accounts" component={AccountsView} />
                <Route exact path="/budgets" component={BudgetsView} />
            </Switch>
        </BrowserRouter>
    )
}
