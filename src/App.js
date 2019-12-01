import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { testValue } from './redux/action';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    handleClick = () => {
        this.props.dispatch(testValue(1))
    }

    render() {
        console.log(this.props)
        return (
            <div className="main">
                <p>Hello World</p>
                <div className="box">我是第二个div</div>
                <Button onClick={this.handleClick}>点击我啊</Button>
            </div>
        );
    }
}

export default connect(state => state)(App);