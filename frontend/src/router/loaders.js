import URL from "./url"

export const indexLoader = async () => {
 const response = await fetch(URL + "/post")
 const posts = await response.json()
 return posts
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/post/${params.id}`)
    const post = await response.json()
    return post
   }

