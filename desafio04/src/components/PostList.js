import React, { Component } from 'react'

import Post from './Post'

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Julio Alcantara",
                    avatar: "https://tave.com.br/wp-content/uploads/2016/07/login-icon-3048.png"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "https://tave.com.br/wp-content/uploads/2016/07/login-icon-3048.png"
                        },
                        content: "Conteúdo do comentário"
                    }
                ]
            }
        ]
    };

    render() {
        return (<div className='PostList'>
            {this.state.posts.map(post =>
                (
                    <Post
                        key={this.id}
                        author={this.author}
                        date={this.date}
                        content={this.content}
                        avatar={this.avatar}
                    />
                )
            )
            }
            )

    }



export default PostList