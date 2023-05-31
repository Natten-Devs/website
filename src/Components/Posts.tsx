
import PostItem from './PostItem'

const Posts = () => {
    return (
        <>
        <div className="postContainer">
            <div className="blogPosts">
                <PostItem 
                    title="titly title" 
                    author="author author" 
                    tags="tags tags tags tags"
                    preview={<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>}
                    image={<img src="https://images.unsplash.com/photo-1684508405245-3d3dac130dfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=733&q=80" />}
                />            
            </div>
        </div>
        </>
    );
};

export default Posts;