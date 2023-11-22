/* eslint-disable react/prop-types */
import Card from "./Card";

const ListTodos = ({todos,hapus,archive}) => {
    const undoneTodos = todos.filter(todo => !todo.archived);
    const doneTodos = todos.filter(todo => todo.archived);
    var done = true;
    var undone = false;
    return(
        <div className="w-full h-full">
            {/* undone */}
            <div className="kontenUndone collapse collapse-arrow h-auto bg-base-200 mt-3">
                <input type="checkbox" name="my-accordion-2"/> 
                <div className="collapse-title text-xl font-medium">
                    List Pekerjaan
                </div>
                <div className="collapse-content py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                undoneTodos.length !== 0 ? (
                        undoneTodos.map(item => (
                            <Card
                                key={item.id}
                                todo={item}
                                judul={item.title}
                                body={item.body}
                                hapus={hapus}
                                archive={archive}
                                logicDone={undone}
                            />
                        ))
                    ) : (
                        <p>Tidak ada todo</p>
                    )}
                </div>
            </div>
            
            {/* Archive */}
            <div className="kontenArchive collapse collapse-arrow bg-base-200 mt-3">
                <input type="checkbox" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium text-red-800">
                    Tugas Selesai
                </div>
                <div className="collapse-content py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {doneTodos.length !== 0 ? (
                        doneTodos.map(item => (
                            <Card
                                key={item.id}
                                todo={item}
                                judul={item.title}
                                body={item.body}
                                hapus={hapus}
                                archive={archive}
                                logicDone={done}
                            />
                        ))
                    ) : (
                        <p>Tidak ada todo</p>
                    )}
                </div>
            </div>
        </div> 

        
    );
}

export default ListTodos;