const getBlogPosts = async () => {
    const response = await fetch('http://localhost:3000/data/blogData.json');
    
    if (response.ok) {
        return response.json();
    }
    return "There is an error in blog data fatching";
}
export default getBlogPosts;