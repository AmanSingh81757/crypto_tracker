import { create } from 'zustand'
import axios from 'axios';

const blogStore = create((set) => ({
    posts: [],
    fetchPosts: async()=>{
        const response = await axios.get('http://localhost/wordpress/wp-json/wp/v2/posts');
        console.log(response.data);
        set({posts: response.data});
    }
}))

export default blogStore;