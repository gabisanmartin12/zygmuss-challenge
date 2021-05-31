const PostsList = ({ posts }) => {
  if (!posts || posts.length === 0)
    return <div>There are no posts to show</div>;

  return (
    <div role="list">
      {posts.map((post) => (
        <div key={post.id} role="listitem">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
