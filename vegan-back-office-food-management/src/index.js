import React from 'react';
import ReactDOM from 'react-dom';
import AddFoodPage from './App';
import ListPage from './List';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const foodApi = {
    getFoods: async () => {
        const res = await fetch('http://localhost:3001/food')
        return res.json()
    },
    deleteFood: async (name) => {
        const res = await fetch(`http://localhost:3001/food/${name}`, {
            method: 'delete'
        })
        return res.json()
    }
}

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">List</Link></li>
                <li><Link to="/add">Add New Food</Link></li>
            </ul>

            <hr />

            <Route exact path="/" render={() => <ListPage foodApi={foodApi} />} />
            <Route path="/add" component={AddFoodPage} />
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
