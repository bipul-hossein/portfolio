import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {

    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            project details page
        </div>
    );
};

export default ProjectDetails;