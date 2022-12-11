import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData'
import ProjectModel from './ProjectModel';
import './Projects.css'


function Projects() {
    const [item, setItem] = useState({})


    return (
        <div style={{ background: '#2c323f' }}>
            <div className="py-5 w-11/12 mx-auto ">
                <h1 className="text-center mb-5 text-3xl text-white">My projects</h1>
                <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                    {
                        projectsData.map(data => <div className="card bg-base-100 image-full shadow-xl cursor-pointer">
                            <figure><img src={data.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.projectName}</h2>
                                <p>{data.projectDesc}</p>
                                <div className="card-actions justify-end">

                                    <div>
                                        <a
                                            href={data.live_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="btn">Live site</button>
                                        </a>
                                    </div>

                                    <div >
                                        <a
                                            href={data.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="btn">GitHub</button>
                                        </a>

                                    </div>
                                    <div >
                                        <label onClick={() => setItem(data)} htmlFor="show_project_model" className="btn">Details</label>

                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>

            </div>
            <ProjectModel item={item}></ProjectModel>
        </div>
    )
}

export default Projects
