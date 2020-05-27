import React, {Component} from 'react';

class CpuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/cpus").then(response => response.json()).then(response => {
           this.setState({
               loading: false,
               data: response.result
           })
        });
    }

    render() {
        if(this.state.loading){
            return "loading...";
        }

        return (
            <div>
                <table className={"table"}>
                    <thead>
                        <tr>
                            <td>Label</td>
                            <td>Status</td>
                            <td>Core</td>
                            <td>Speed</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map( item => {
                                return (
                                    <tr>
                                        <td>{item.label}</td>
                                        <td>{item.description}</td>
                                        <td>{item.core}</td>
                                        <td>{item.speed}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CpuList;
