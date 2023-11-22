/* eslint-disable react/prop-types */

const Card = ({judul,logicDone,body,hapus,todo,archive}) =>{
    
    const onDeleteClick = () => hapus(todo.id);
    const onArchiveClick = () => archive(todo.id)

    // console.log(hapus(todo.id) + "ini di card")
    return(
        <div className="CardAction h-auto ">
            <div className={`card w-full bg-base-100 shadow-xl ${logicDone ? "bg-slate-400 text-white" : "bg-white text-black"}`}>
                <div className="card-body ">
                    <h2 className="card-title"> {judul} </h2>
                    <p className="h-auto">{body}</p>
                    <div className="card-actions ">
                        {
                            logicDone === false ? <button className="btn btn-primary" onClick={onArchiveClick}>Selesai</button>
                            : <button className="btn btn-primary" onClick={onArchiveClick}>Belum selesai</button>
                        }
                        <button className="btn " onClick={onDeleteClick}>Hapus</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;