import { createElement, Component } from '../../UgoJs/ugo';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const posts = await res.json();
        console.log(posts)
        this.setState({posts});
    }
    render() {
        return(
            createElement('ul', {}, 
                ...this.state.posts.map(post => createElement('li',{innerText: post.title}))
        )
        )
    }
}

export default Posts;