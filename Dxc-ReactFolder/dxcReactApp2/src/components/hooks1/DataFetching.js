import React, { useState, useEffect } from 'react'
import axios from 'axios'
function DataFetching() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    /**
    * ///useEffect is about the lifecycle methods of a class component --
    *  if you want to use lifecycle methods of a class component in a stateless functional component --then we use useEffect hook
    */
    //Promise -- Deferred obj in kotlin--
    useEffect(
        //the arrow function below will get executed after every render
        () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    console.log(res)
                    setPosts(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        [] //run this useEffect hook only once ie after component did mount
    )

    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <div>{posts.title}</div>
            {/*<ul>
                {
                    posts.map(
                        posts => <li key={post.id}> {post.title}</li>
                    )
                }
            </ul>*/}
        </div>
    )
}

export default DataFetching
