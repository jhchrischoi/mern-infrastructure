import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from "../../components/LoginForm/LoginForm"
import {useState} from 'react'

export default function AuthPage({setUser}) {
  const [userWantsLogin, setUserWantsLogin] = useState(true)
  return (
    <main>
      <h1>AuthPage</h1>
      {userWantsLogin ?
      <>
        <LoginForm  />
        <button onClick={(e)=>setUserWantsLogin(false)}>Sign Up</button>
        </>
        :
        <>
        <SignUpForm setUser={setUser}></SignUpForm>
        <button onClick={(e)=>setUserWantsLogin(false)}>Sign Up</button>
        </>
    }

    </main>
  );
}