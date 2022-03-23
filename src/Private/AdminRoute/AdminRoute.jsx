import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

const AdminRoute = ({children, ...rest}) => {
    // const [admin, setAdmin] = useState([])
    const {user, admin} = useAuth()
    // useEffect(()=>{
    //     fetch(`https://sleepy-peak-11374.herokuapp.com/api/getAdmin/${user.email}`)
    //     .then(res=> res.json())
    //     .then(data => setAdmin(data.isAdmin[0]))
    // },[user.email])
  return (
   <Route  
   {...rest}
   render={({ location }) =>
     user.email && admin ? (
       children
     ) : (
       <Redirect
         to={{
           pathname: "/",
           state: { from: location },
         }}
       />
     )
   }
   />
  )
}

export default AdminRoute