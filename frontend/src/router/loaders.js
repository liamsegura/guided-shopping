import URL from "./url"

export const indexLoader = async () => {
 const response = await fetch(URL + "/phone")
 const phones = await response.json()
 return phones
}
