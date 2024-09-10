import React from 'react';
import ChildExample from './ChildExample.tsx';

// This export breaks hot reloading for itself and all children.
// Commenting it out fixes the issue.
export const THIS_BREAKS_THINGS=4;

const ParentExample = () => {
    return (
        <div>
            <h1>EDIT ME</h1>
            <ChildExample/>
        </div>
    )
}

export default ParentExample;
