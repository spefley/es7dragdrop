import React, { Component, PropTypes } from 'react';

const dropzone_style_visible = {
    width: '100%',
    height: '10px',
    background: 'blue'
}

const dropzone_style_not_visible = {
    width: '100%',
    height: '0px',
    opacity: '0'
}

export default class Dropzone extends Component {
	static propTypes = {
		isVisible: PropTypes.bool.isRequired,
    }

    render() {
        let style = dropzone_style_not_visible;
        if (this.props.isVisible) {
            style = dropzone_style_visible
        }

        return (
            <div style={style}>
            </div>
        );
    }
}