import React from 'react'
import blogStore from '../stores/blogStore'

function Blog() {
    const store = blogStore();

    React.useEffect(() => {
        store.fetchPosts();
     }, [])

  return (
    <div className='gap-10 flex items-center justify-center flex-col'>
        {
            store.posts.map((post) => {
                return (
                    <div key={post.id} className='min-w-100'>
                        <h1 className='text-4xl'>{post.title.rendered}</h1>
                        <div className='' dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Blog