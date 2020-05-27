import React from 'react';

export default class CPUForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Active",
            core: "2",
            speed: "5.0gz",
            price: 1000
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/api/cpus", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(response => {
            console.log(response);
        })
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className={"mt-3"}>New CPU Entry</h1>
                <div className="d-flex justify-content-center">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className={"form-group"}>
                            <label className="form-label">Label</label>
                            <input type="text" name="label" className="form-control" onInput={this.handleInputChange}/>

                        </div>

                        <div className={"form-group"}>
                            <label className="form-label">Status</label>
                            <select className="form-control" name="status" onChange={this.handleInputChange}>
                                <option value="Active">Active</option>
                                <option value="Active">Inactive</option>
                            </select>
                        </div>

                        <div className={"form-group"}>
                            <label className="form-label">Core Count</label>
                            <select className="form-control" name="core" onChange={this.handleInputChange}>
                                <option value="2">2</option>
                                <option value="4">4</option>
                                <option value="6">6</option>
                                <option value="8">8</option>
                            </select>
                        </div>

                        <div className={"form-group"}>
                            <label className="form-label">Speed</label>
                            <input type="text" name="speed" className="form-control" onInput={this.handleInputChange}/>
                        </div>

                        <div className={"form-group"}>
                            <label className="form-label">Price</label>
                            <input type="text" name="price" className="form-control" onChange={this.handleInputChange}/>
                        </div>


                        <button type={"submit"} className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>

        )
    }

}
