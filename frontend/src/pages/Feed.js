import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import send from '../assets/send.svg';
import comment from '../assets/comment.svg';

export default class Feed extends Component {
    render() {
        return (
            <section id="post-list"> 
                <article>
                    <header>
                        <div className="user-info">
                            <span>Daniel Marques</span>
                            <span className="place">João Pessoa</span>
                        </div>
                        <img src={more} alt="Mais opções"/>
                    </header>
                    <img src="http://localhost:3333/files/bored-manda-te-700x360.jpg" />
                    <footer>
                        <div className="actions">
                            <img src={like} />
                            <img src={comment} />
                            <img src={send} />
                        </div>

                        <strong>9000 Curtidas</strong>

                        <p>
                            Post muito massa da oministack
                            <span className="hashtags">#muito #massa</span>
                        </p>
                    </footer>
                </article>
                <article>
                    <header>
                        <div className="user-info">
                            <span>Daniel Marques</span>
                            <span className="place">João Pessoa</span>
                        </div>
                        <img src={more} alt="Mais opções"/>
                    </header>
                    <img src="http://localhost:3333/files/bored-manda-te-700x360.jpg" />
                    <footer>
                        <div className="actions">
                            <img src={like} />
                            <img src={comment} />
                            <img src={send} />
                        </div>

                        <strong>9000 Curtidas</strong>

                        <p>
                            Post muito massa da oministack
                            <span className="hashtags">#muito #massa</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}
