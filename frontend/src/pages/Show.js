import { useLoaderData, Form } from "react-router-dom"
import { Heading } from "../styles"

function Show(props){

    const result = useLoaderData()

    console.log(result.post)

    return <section style={{width: "70%", margin: "auto"}}>
        <Heading>{result.post.name}</Heading>
        <h2>{result.post.tasty ? "It's Tasty" : "Not Tasty"}</h2>
        <Form action={`/update/${result.post._id}`} method="post">
            <input type="text" name="name" defaultValue={result.post.name}/>
            <input type="checkbox" name="tasty" defaultChecked={result.post.tasty}/>
            <button>Update post</button>
        </Form>
        <Form action={`/delete/${result.post._id}`} method="post">
            <button>Delete post</button>
        </Form>
        <Form action={`/comment/${result.post._id}`} method="post">
        <input type="text" name="comment" required/>
        <button>Add Comment</button>
      </Form>
      <ul>
        {result.comments.map(comment => <li key={comment._id}>{comment.comment}</li>)}
      </ul>
    </section>
}

export default Show