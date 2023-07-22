import URL from "./url"
import {redirect} from "react-router-dom"

export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newPost = {
        name: formData.get("name"),
        tasty: formData.get("tasty") === "on" ? true : false
    }

    await fetch(URL  + "/post", {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newPost)
    })

    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()

    const updatedPost = {
        name: formData.get("name"),
        tasty: formData.get("tasty") === "on" ? true : false
    }

    await fetch(URL  + `/post/${params.id}`, {
        method: "put",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedPost)
    })

    return redirect("/")
}

export const deleteAction = async ({params}) => {

    await fetch(URL  + `/post/${params.id}`, {
        method: "delete",
    })

    return redirect("/")
}

export const createCommentAction = async ({request, params}) => {

    
    const formData = await request.formData()

    const newComment = {
        comment: formData.get("comment"),
        post: params.id
    }
    console.log(newComment)

    await fetch(URL  + `/comment/${params.id}`, {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newComment)
    })

    return redirect(`/${params.id}`)
}