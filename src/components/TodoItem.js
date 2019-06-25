import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        if(this.props.todo.completed === true) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }

    getStyle2 = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = (e) => {
        this.props.todo.completed = true
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle2()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                    {' '}
                    { title }
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

/*const itemStyle = {
    backgroundColor: '#f4f4f4'
}*/

export default TodoItem