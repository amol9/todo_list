import React, { Component } from 'react';

class AddTodo extends Component {
    render() {
        return (
            <form onSubmit={this.props.addTodo} style={formStyle}>
                <input 
                    type='text'
                    name='title'
                    style={inputTextStyle}
                    placeholder='add todo here...'>    
                </input>
                <input
                    type='submit'
                    value='Submit'
                    style={inputSubmitStyle}
                    className='btn'>
                </input>
            </form>
        )
    }
}

const formStyle = {
    display: 'flex'
}

const inputTextStyle = {
    flex: '10',
    padding: '5px'
}

const inputSubmitStyle = {
    flex: '1'
}

export default AddTodo;