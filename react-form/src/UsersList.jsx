import {useEffect,useState} from 'react'
import axios from 'axios';
function UserList(){
    const[users,setUsers]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(null)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setUsers(res.data)
            setLoading(false)
        })
        .catch(()=>{
            setError("Something went wrong")
            setLoading(false)
        }

        )
    },[]) //run only when the component mounts 
    if(loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return(
        <>
        </>
    );
}
export default  UserList