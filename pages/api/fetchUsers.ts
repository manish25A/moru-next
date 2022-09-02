export const fetchUsers = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`)
    const data = await response.json()
    return data;
    
}