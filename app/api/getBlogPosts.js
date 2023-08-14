const getBlogPosts = async () => {
    const response = await fetch('../data/blogData.json');
    
    if (response.ok) {
        return response.json();
    }
    return "There is an error in blog data fatching";
}

export default getBlogPosts;