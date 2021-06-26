import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component{
    state = {
        
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
     };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
     };

    handleKeyDown = e => {
        if (e.code === 'Escape') { this.props.onClose() };
    };

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) { this.props.onClose() };
    };

    render() {
        
        return createPortal(
            <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
                <div className="Modal__content">{this.props.children}</div>
            </div>,
            modalRoot
        )
    };
};

export default Modal;