import { useState } from "react";


// for toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const toastId2 = 'toast-2';
const toastId3 = 'toast-3';
/* eslint-disable react/prop-types */

const Form = ({addNewTodo}) => {
    
    const [formData,setFromData] = useState({
        title: "",
        todoBody: "",
        todoTitleLength:0,
        todoBodyLength: 0
    });

    // membuat event untuk judul,body, dan submit
    
    const onTitleChange = (event) => {
        event.preventDefault();
        if (event.target.value.length <= 20) {
            setFromData({
                ...formData,
                [event.target.name]: event.target.value,

                todoTitleLength: event.target.value.length
            })
            // console.log(event.target.value.length)
        } else {
             // alert("gabias")
             toast.warning('Judul maksimal 20 karakter', { toastId: 'toast-title-warning' });
        }
        // console.log(event.target.value)
    }

    const onBodyChange = (event) => {
        event.preventDefault();
        if (event.target.value.length <= 82) {
            setFromData({
                ...formData,
                [event.target.name]: event.target.value,

                todoBodyLength: event.target.value.length
            })
            // console.log(event.target.value.length)
        } else {
             // alert("g bisa")
             toast.warning('Max length for note body is 82', { toastId: 'toast-body-warning' });
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (formData.title === "") {
            toast.error("Masukan judul", { toastId: toastId2 });
        } 
        
        else if(formData.todoBody === ""){
            toast.error("Masukan body", { toastId: toastId3 });
        }

        else {
            const newData = {
                id: +new Date(),
                title: formData.title,
                body: formData.todoBody,
                archived: false, 
                createdAt: new Date(),
            }
            const result = addNewTodo(newData);
        
            if (!result) {
                toast.success('New note saved!');
                
                setFromData({
                    ...formData,
                    title: '',
                    todoBody: '',
                    todoTitleLength:0,
                    todoBodyLength: 0
                })
            } else {
                toast.error('New note failed to save!');
            }
        }
    }

    return(
        <div className="container">
            <div className="card w-full bg-base-100 shadow-xl">
                {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">Pastikan Kerjaan mu di kerjain</h2>
                    <div className="form-control">

                        {/* Judul */}
                        <label className="label">
                            <span className="label-text">Judul Task</span>
                            <span className="label-text-alt">Sisa {20 - formData.todoTitleLength} karakter</span>
                        </label>

                        {/* penting untuk memastikan komponen value(nilai send), event onchange dan name-"tadi ga make name jadinya ga bisa di ketik" */}

                        <input type="text" placeholder="Judul..." className="input input-bordered w-full " onChange={onTitleChange} name="title" value={formData.title} />
                        {/*----- end judul ------*/}
                        
                        <label className="label">
                            <span className="label-text">Detail Task</span>
                            <span className="label-text-alt">Sisa {82 - formData.todoBodyLength} karakter</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Tulis Deskripsi..." onChange={onBodyChange} name="todoBody" value={formData.todoBody}></textarea>
                    </div>
                    <div className="card-actions justify-end pt-5 w-full">
                        <button type="submit" className="btn btn-primary rounded-full w-full" onClick={onSubmitForm}>Masukan</button>
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
        </div>
        
    );
}

export default Form;