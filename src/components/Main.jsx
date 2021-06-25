import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./HomePage"
import DetailsPage from "./DetailsPage"


export default function Main() {
    return (
        <Router>
            <Switch>
                <Route path="/details">
                    <DetailsPage />
                </Route>
                <Route path='/'>
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    )
}