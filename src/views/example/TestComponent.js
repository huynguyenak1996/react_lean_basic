import React from "react";

class TestComponent extends React.Component {
    /*
        JSX cho phép hàm của js trả ra html
        <React.Fragment> cho in ra html bên trong mà không cần bọc div bên ngoài (hoặc dùng <></> cho phiên bản cao)
    */
    state = {
        name: "dit me",
        channel: "mầy"
    }
    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    render() {
        return (
            <>
                <div className="test1">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnchangeName(event)} className="form-controller" />
                    {this.state.name}
                </div>
                <div className="test2">
                    {console.log('my name is : ', this.state.channel)}
                    hello {this.state.channel}
                </div>
            </>
        );
    }
}
export default TestComponent;