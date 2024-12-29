import React from 'react';

export const DocCard = ({ children, background, padding, rounded, width, height, extaClass }) => {
    return (
        <div className={`${background} ${padding} ${rounded} ${width} ${height} ${extaClass}`}>
            {children}
        </div>
    );
};

DocCard.propTypes = {

};

DocCard.defaultProps = {

};