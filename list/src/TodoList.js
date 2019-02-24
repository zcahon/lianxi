import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
        inputValue: '',
        list: []
        }
    }

    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    };

    render(){
        return (
            <div>
                <input 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange.bind(this)}
                />
                <button>提交</button>
                <ul>
                    <li>英语</li>
                    <li>Learning</li>
                </ul>
            </div>
        )
    }
}

export default TodoList;