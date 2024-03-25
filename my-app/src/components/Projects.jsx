// Projects.jsx

import React from 'react';
import BedSketch from '../projects/Project1/sketch.js';
// import Project2Sketch from '../projects/Project2Sketch';
// Import other p5.js sketch files...

const Projects = ({ projectId }) => {
    // Render the corresponding p5.js sketch based on projectId
    switch (projectId) {
        case '1':
            return <BedSketch/>;
        case '2':
            // return <Project2Sketch />;
            return <div>nothing yet</div>;
        // Add other cases for different projects...
        default:
            return <div>Project not found</div>;
    }
};

export default Projects;