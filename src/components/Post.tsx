import React, { Component } from 'react';
import Footer from './Footer';

const style = {
    backgroundColor: "#fff",
    padding: '10px 15px',
    border: '1px solid #ddd',
    marginBottom: '10px',
};

interface IPostProps {
    image: string;
}
export default class Post extends Component<IPostProps> {
    render() {
        const { image } = this.props;
        return (
            <div style={style}>
                <img src={image} />
                <Footer />
            </div>
        );
    }
}
