// import React from "react"
// import styles from '../TodoItem.module.css'

// class TodoItem extends React.Component {

//     state = {
//         editing: false,
//     }

//     handleEditing = (e) => {
//         this.setState({
//             editing: true,
//         })

//         // const body = document.querySelector('body')
//         // body.addEventListener('click', (e) => {
//         //     console.log(e)
//         //     const prviEl = document.querySelector('input.TodoItem_textInput__11O7w')
//         //     if(e.target === prviEl){
//         //         this.setState({ editing: true })
//         //         console.log('dejei')
//         //     }else{
//         //         this.setState({ editing: false })
//         //     }
//         // }) 
//     }

//     handleUpdatedDone = e => {
//         if(e.key === 'Enter'){
//             this.setState({ editing: false })
//         }
//     }

//     componentWillUnmount(){
//         console.log('djesi-todoitem')
//     }



//     render() {

//         const completedStyle = {
//            fontStyle: 'italic',
//            color: '#595959',
//            opacity: '0.4',
//            textDecoration: 'line-through'
//         }

//         const viewMode = {}
//         const editMode = {}

//         if(this.state.editing){
//             viewMode.display = 'none'
//         }else{
//             editMode.display = 'none'
//         }

//         return <li className={styles.item}>
//                 <div onDoubleClick={this.handleEditing} style={viewMode}>
//                     <input
//                     className={styles.checkbox}
//                     type="checkbox"
//                     checked={this.props.todo.completed}
//                     onChange={() => this.props.handleChangeProps(this.props.todo.id)} />

//                     <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>

//                     <span style={this.props.todo.completed ? completedStyle : null}>
//                         {this.props.todo.title}
//                     </span>
//                 </div>

//                 <input type="text"
//                 style={editMode} 
//                 className={styles.textInput}
//                 value={this.props.todo.title}
//                 onChange={e => {
//                     this.props.setUpdate(e.target.value, this.props.todo.id)
//                 }}
//                 onKeyDown={this.handleUpdatedDone}
//                 />
//             </li>
//     }
// }

// export default TodoItem










// HOOKS

import React, { useState } from "react"
import styles from '../TodoItem.module.css'

const TodoItem = props => {

    const [editing, setEditing] = useState(false)

    const handleEditing = (e) => {
        setEditing(true)

        // const body = document.querySelector('body')
        // body.addEventListener('click', (e) => {
        //     console.log(e)
        //     const prviEl = document.querySelector('input.TodoItem_textInput__11O7w')
        //     if(e.target === prviEl){
        //         this.setState({ editing: true })
        //         console.log('dejei')
        //     }else{
        //         this.setState({ editing: false })
        //     }
        // }) 
    }

    const handleUpdatedDone = e => {
        if(e.key === 'Enter'){
            setEditing(false)
        }
    }

    // componentWillUnmount(){
    //     console.log('djesi-todoitem')
    // }

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: '0.4',
        textDecoration: 'line-through'
    }


    // DESTUCTURING
    const {completed, id, title} = props.todo


    const viewMode = {}
    const editMode = {}

    if(editing){
        viewMode.display = 'none'
    }else{
        editMode.display = 'none'
    }

    return <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                className={styles.checkbox}
                type="checkbox"
                checked={completed}
                onChange={() => props.handleChangeProps(id)} />

                <button onClick={() => props.deleteTodoProps(id)}>Delete</button>

                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>

            <input type="text"
            style={editMode} 
            className={styles.textInput}
            value={title}
            onChange={e => {
                props.setUpdate(e.target.value, id)
            }}
            onKeyDown={handleUpdatedDone}
            />
        </li>
}

export default TodoItem