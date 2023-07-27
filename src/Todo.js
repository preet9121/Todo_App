import "./App.css";
import React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mytext: " ",
            myarray: [],
            editIdx: null
        };
    }

    onChangeDo(event) {
        this.setState({
            mytext: event.target.value,
        });
    }

    onClickAdd(event) {
        let list = this.state.myarray;
        if (this.state.editIdx != null) {
            list[this.state.editIdx] = event;
        } else {
            list.push(event);
        }
        this.setState({
            myarray: list,
            mytext: " ",
            editIdx: null,
        });
    }
    removeItem(index) {
        let xyz = this.state.myarray.splice(index, 1);
        this.setState({
            todoListy: xyz,
        });
    }
    editItem(index) {
        this.setState({
            mytext: this.state.myarray[index],
            editIdx: index,
        });
    }

    render() {
        return (
            <div>
                <center>
                    <h1>TODO </h1>
                    <hr/>
                <b>Enter your task : </b>
                <input
                    type="text"
                    name="txt"
                    placeholder="Todays goal"
                    value={this.state.mytext}
                    onChange={this.onChangeDo.bind(this)}
                />
                &nbsp;&nbsp;&nbsp;
                <button
                    className="AddButton"
                    onClick={() => this.onClickAdd(this.state.mytext)}
                >
                    Click ME{" "}
                </button>
                <b>
                    {this.state.myarray.map((value, index) => (
                        <h4 key={index}>
                            {index + 1}. {value}
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => this.editItem(index)}>EDIT</button>
                            <button onClick={() => this.removeItem(index)}>DELETE</button>
                        </h4>
                    ))}
                </b>
                </center>
            </div>
        );
    }
}

export default App;
