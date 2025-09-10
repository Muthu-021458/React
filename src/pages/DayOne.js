import React, { Component } from 'react';


export class DayOne extends Component {
constructor(props) {
super(props);
this.state = { users: [] };
this.refresh = this.refresh.bind(this);
}
    componentDidMount() {
        this.refresh();
        
    }
refresh(){
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data.users });
      })
}

render() {
        return (
            <div>
                muthu
            </div>
        );
    }
}