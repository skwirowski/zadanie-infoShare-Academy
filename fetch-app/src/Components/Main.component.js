import React, {Component} from 'react';

class Main extends Component {
    state = {
        usersData: []
    };

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => this.setState({
                usersData: data.results
            }));
    }

    renderUsersData = () => this.state.usersData.map((user, index) =>
        <div key={index}>
            <img src={user.picture.large} />
            <p> {user.email} </p>
        </div>
            );

    render() {
        return(
            <div>
                <h1>User information</h1>
                {this.renderUsersData()}
            </div>
        )
    }
}
export default Main;
