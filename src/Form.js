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

    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <form>
                        <label className="form-label">Status</label>
                        <select className="form-control" name="status">
                            <option value="Active">Active</option>
                            <option value="Active">Inactive</option>
                        </select>

                        <label className="form-label">Core Count</label>
                        <select className="form-control" name="core">
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                        </select>

                        <label className="form-label">Speed</label>
                        <input type="text" name="speed" className="form-control"/>

                        <label className="form-label">Price</label>
                        <input type="text" name="price" className="form-control" />
                    </form>
                </div>
            </div>

        )
    }

}