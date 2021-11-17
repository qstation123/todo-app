// import React from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import '../App.css'
// import Header from './Header'
// // import Navbar from './Navbar'
// import TodoList from './TodoList'
// import InputTodo from './InputTodo'


// class TodoContainer extends React.Component{

//     state = {
//         todos: []
//     }

//     handleChange = id => {
//         this.setState(prevState => {
//             return{
//                 todos: prevState.todos.map(todo => {
//                     if(todo.id===id){
//                         return{
//                             ...todo,
//                             completed: !todo.completed
//                         }
//                     }
//                     return todo
//                 })
//             }
//         })
//     }

//     delTodo = id => {
//         this.setState({
//             todos: [
//                 ...this.state.todos.filter(todo => {
//                     return todo.id !== id
//                 })
//             ]
//         })
//     }

//     addTodoItem = title => {
//         const newTodo = {
//             id: uuidv4(),
//             title: title,
//             completed: false,
//         }
//         this.setState({
//             todos: [...this.state.todos, newTodo]
//         })
//     }

//     setUpdate = (updatedTitle, id) => {
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if(todo.id === id){
//                     todo.title = updatedTitle
//                 }
//                 return todo
//             })
//         })
//     }

//     componentDidMount(){
//         // fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
//         // .then((response) => response.json())
//         // .then((data) => this.setState({todos: data}))

//         const temp = localStorage.getItem('todos')
//         const loadedTodos = JSON.parse(temp)
//         // console.log(loadedTodos)
//         if(loadedTodos){
//             this.setState({todos:loadedTodos})
//         }
//     }

//     componentDidUpdate(prevProps, prevState){
//         if(prevState.todos !== this.state.todos){
//             const temp = JSON.stringify(this.state.todos)
//             localStorage.setItem('todos', temp)
//         }
//     }

//     render() {
//         return(
//             <div className="container">
//                 <div className="inner">
//                     <Header />
//                     <InputTodo addTodoProps={this.addTodoItem}/>
//                     <TodoList
//                     todos={this.state.todos}
//                     handleChangeProps={this.handleChange}
//                     deleteTodoProps={this.delTodo}
//                     setUpdate={this.setUpdate}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

// export default TodoContainer










// HOOKS


import React, { useState, useEffect, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import '../App.css'
import Header from './Header'
import TodoList from './TodoList'
import InputTodo from './InputTodo'
import Navbar from './Navbar'

import About from '../pages/About'
import NotMatch from '../pages/NotMatch'


const TodoContainer = () => {

    const [todos, setTodos] = useState(getInitialTodos())

    const handleChange = id => {
       setTodos(prevState => {
                prevState.map(todo => {
                    if(todo.id===id){
                        return{
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
            })
    }

    const delTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            })
        ])
    }

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }

    // useEffect(() => {
    //     console.log('djesi')

    //     const temp = localStorage.getItem('todos')
    //     const loadedTodos = JSON.parse(temp)

    //     if(loadedTodos){
    //         setTodos(loadedTodos)
    //     }
    // }, [])

    // 2. nacin za ovo iznad
    function getInitialTodos() {
        const temp = localStorage.getItem('todos')
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    useEffect(() => {
        console.log('djesi2')

        const temp = JSON.stringify(todos)
        localStorage.setItem('todos', temp)

    }, [todos]) 


    return(
        // <> - ovo umjesto Fragment ako nismo importovali fragment
        <Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div className="container">
                        <div className="inner">
                            <Header />
                            <InputTodo addTodoProps={addTodoItem}/>
                            <TodoList
                            todos={todos}
                            handleChangeProps={handleChange}
                            deleteTodoProps={delTodo}
                            setUpdate={setUpdate}
                            />
                        </div>
                    </div>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <NotMatch />
                </Route>
            </Switch>
        </Fragment>
    )

}

export default TodoContainer