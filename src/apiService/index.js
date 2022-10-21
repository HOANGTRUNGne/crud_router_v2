
export const create = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const update = () => {
}


export const get = (key) => {
    const items = localStorage.getItem(key)
    return JSON.parse(items)
}


export const remove = (key) => {

}


// create("MemberList", 'hello' )
//
// useEffect(() => {
//     const member = get("MemberList")
//     console.log(member)
// },[])
