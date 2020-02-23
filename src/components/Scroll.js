import React from 'react';

export const Scroll = ({children}) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '700px'}}>
            {children}
        </div>
    )
};