import { useLoaderData, Form, Link } from "react-router-dom";
import { Flex, Card } from "../styles";
function Index(props) {
  
  const posts = useLoaderData();

  return (
    <div>
      <Form action="/create" method="post">
        <input type="text" name="name" required="true"/>
        <input type="checkbox" name="tasty" />
        <button>Create New post</button>
      </Form>
      <Flex>
        {posts.map((post) => (
          <Card key={post._id}>
            <Link to={`/${post._id}`}>
              <h1>{post.name}</h1>
            </Link>
            <h2>{post.tasty ? "It's Tasty" : "Not Tasty"}</h2>
            <Form action={`/delete/${post._id}`} method="post">
            <button>Delete post</button>
        </Form>
          </Card>
        ))}
      </Flex>
    </div>
  );
}

export default Index;
