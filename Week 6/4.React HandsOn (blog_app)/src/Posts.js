import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const postList = data.map(p => new Post(p.id, p.title, p.body));
                this.setState({ posts: postList });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert('An error occurred');
    }

    render() {
        const containerStyle = {
            maxWidth: '800px',
            margin: '20px auto',
            padding: '10px',
            fontFamily: 'Arial, sans-serif'
        };

        const postStyle = {
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '15px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        };

        const titleStyle = {
            fontSize: '1.2rem',
            color: '#333'
        };

        const bodyStyle = {
            color: '#555',
            lineHeight: '1.5'
        };

        return (
            <div style={containerStyle}>
                <h2 style={{ textAlign: 'center' }}>Blog Posts</h2>
                {this.state.posts.map(post => (
                    <div key={post.id} style={postStyle}>
                        <h3 style={titleStyle}>{post.title}</h3>
                        <p style={bodyStyle}>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;