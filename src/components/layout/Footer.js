import React from 'react';

function Footer() {
    return (
        <h6 style={getStyle()}>
            made with react v{React.version}
        </h6>
    )
}

function getStyle() {
    return {
        textAlign: 'center',
        color: '#888888'
    }
}

export default Footer;