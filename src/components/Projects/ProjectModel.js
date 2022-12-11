import React from 'react';

const ProjectModel = ({ item }) => {
    console.log(item)
    return (
        <div>
            <input type="checkbox" id="show_project_model" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="show_project_model" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <h3 className="font-bold text-lg">{item.projectName}</h3>
                    <p className="py-4">{item.projectDesc}</p>
                    <p className=''>Used Component: {item.tags}</p>
                    <div>
                        <h2 className='text-2xl text-yellow-300'>Project Feather:</h2>
                        {
                            item.feather?.map((data, i) => <>
                                <p>{i + 1}. {data}</p>
                            </>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectModel;