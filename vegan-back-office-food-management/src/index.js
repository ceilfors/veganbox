import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import List from './List';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const foodApi = {
    getFoods: async () => {
        const res = await fetch('http://localhost:3001/food')
        return res.json()
    }
}

const ListPage = (props) => {
    return (
        <List
            foodApi={foodApi}
            {...props}
        />
    );
}

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">List</Link></li>
                <li><Link to="/add">Add New Food</Link></li>
            </ul>

            <hr />

            <Route exact path="/" render={ListPage} />
            <Route path="/add" component={App} />
        </div>
    </Router>
)

ReactDOM.render(<BasicExample />, document.getElementById('root'));
