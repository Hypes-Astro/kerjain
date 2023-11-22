import Form from "../components/Form";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ListTodos from "../components/ListTodos";
import React from "react";
// inisialisasi data dari utils.
import {getDataUtils} from "../utils/index"
//  --
// for toast
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// bind
import autoBind from "auto-bind"

class MainPage extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            todos: getDataUtils(),
            unfilteredTodos: getDataUtils()
        }
        autoBind(this);
    }

    addNewTodoHandler(newTodoData) {
        try {
          this.setState((prevState) => ({
            todos: [newTodoData, ...prevState.todos],
            unfilteredTodos: [newTodoData, ...prevState.unfilteredTodos]
          }));
        } catch (error) {
          console.error('Error adding new todo:', error);
        }
    }

   onDeleteHandler(id) {
        const result = window.confirm('Apakah yakin anda ingin menghapus todo ini?');
        if (result) {
            this.setState((prevState) => {
                // console.log("bisa masuk" )
                return {
                    todos: prevState.todos.filter(todo => todo.id !== id),
                    unfilteredTodos: prevState.unfilteredTodos.filter(todo => todo.id !== id),
                }
            })
            toast.success('todo berhasil dihapus!');
        } else {
            toast.error('todo tidak terhapus!');
        }
    }


    onArchiveHandler(id) {
        const todoTomodify = this.state.unfilteredTodos.filter(todo => todo.id === id)[0];
        const modifiedTodo = { ...todoTomodify, archived: !todoTomodify.archived };
        this.setState((prevState) => {
            return {
                todos: [
                    ...prevState.todos.filter(todo => todo.id !== id),
                    modifiedTodo
                ],
                unfilteredTodos: [
                    ...prevState.unfilteredTodos.filter(todo => todo.id !== id),
                    modifiedTodo
                ],
            }
            
        });

        console.log("berhasil arcive")
        if (todoTomodify.archived) {
            toast.success('todo moved to active!');
        } else {
            toast.success('todo archived!');
        }
    }

    onSearchHandler(text) {
        if (text.length !== 0 && text.trim() !== '') {
            this.setState({
                todos: this.state.unfilteredTodos.filter(todo => todo.title.toLowerCase().includes(text.toLowerCase())),
            })
        } else {
            this.setState({
                todos: this.state.unfilteredTodos,
            })
        }
    }

    render() {
        return(
            <div className="w-sreen h-screen">
                <Navbar/>
                <div className="flex-col md:flex-row lg:flex justify-center  ">
                    <div className="sideLeft h-full w-full p-2 md:w-1/3 sticky">
                        <Form  addNewTodo={this.addNewTodoHandler} />
                    </div>
                    <div className="sideRight w-full h-[80vh] pt-2 px-5">
                        <SearchBar onSearch={this.onSearchHandler}/>
                        
                        <div className="w-full h-full">
                            <ListTodos todos={this.state.todos} length={this.state.todos.length} hapus={this.onDeleteHandler} archive={this.onArchiveHandler}/>
                            
                        </div>
    
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
            
        )
    }
}



export default MainPage;