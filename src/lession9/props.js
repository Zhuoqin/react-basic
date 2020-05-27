import React, {Component} from 'react';
import Avatar from "./Avatar";
class PropsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch("https://api.github.com/users/GoodSpeed-HL").then(response => response.json()).then(response => {
            console.log(response);
            this.setState({
                loading: false,
                data: response
            })
        });
    }

    render() {
        if(this.state.loading){
            return "loading...";
        }

        return (
           <pre>
               <Avatar url={this.state.data.avatar_url}></Avatar>
           </pre>
        );
    }
}

export default PropsDemo;
