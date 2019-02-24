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

    handleClick(){
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''  
        })
    }

    handledelete(index){
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }

    render(){
        return (
            <div>
                <input 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleClick.bind(this)}>提交</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return(
                            <li 
                                key={index}
                                onClick={this.handledelete.bind(this, index)}
                            >
                                {item}
                            </li>) 
                        })
                    }  
                </ul>
            </div>
        )
    }
}

export default TodoList;