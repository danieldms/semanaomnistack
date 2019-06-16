import React, { Component } from 'react';

import api from '../services/api';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import send from '../assets/send.svg';
import comment from '../assets/comment.svg';

export default class Feed extends Component {
    state = {
        feeds: [],
    };
     
    async componentDidMount() {
        const response = await api.get('posts');

        this.setState({feeds: response.data});
    }
    render() {
        return (
            <section id="post-list"> 
                {this.state.feeds.map(post => (
                    <article key={post._id}>
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>
                            <img src={more} alt="Mais opções"/>
                        </header>
                        <img src={`http://localhost:3333/files/${post.image}`} />
                        <footer>
                            <div className="actions">
                                <img src={like} />
                                <img src={comment} />
                                <img src={send} />
                            </div>

                            <strong>{post.likes} Curtidas</strong>

                            <p>
                                {post.description}
                                <span className="hashtags">{post.hashtags}</span>
                            </p>
                        </footer>
                    </article>
                ))}
            </section>
        );
    }
}
