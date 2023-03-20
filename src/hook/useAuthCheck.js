import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

const useAuthCheck = () => {
    const dispatch = useDispatch();
    const [checkAuth , setCheckAuth] = useState(false);
  useEffect(()=>{
    const authCheck = localStorage?.getItem('auth');
    
    if(authCheck){
        const auth = JSON.parse(authCheck);
        if(auth?.accessToken && auth?.user){
            dispatch(userLoggedIn({
                accessToken : auth.accessToken ,
                user : auth.user
            }))
        }
    }
    setCheckAuth(true);
  },[dispatch, setCheckAuth]);
  return checkAuth ;
};

export default useAuthCheck;