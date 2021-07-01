import { useForm } from "./useForm";
import styles from "./Login.module.css";

export default function Form(){
    const initialState = {
        email: "",
        password: "",
    };
  
    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );
  
    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to database
        alert("hi")
    }
    return(
        <form onSubmit={onSubmit}>
        <input
              name='email'
              id='email'
              type='email'
              placeholder='Email'
              onChange={onChange}
              required
              className = {styles.typingInput}
              />

          <input
              name='password'
              id='password'
              type='password'
              placeholder='Password'
              onChange={onChange}
              required
              className = {styles.typingInput}
              />
            <input
              name = "rememberMe"
              id = "rememberMe"
              type = "checkbox"
              onChange={onChange}
              required
              className = {styles.checkingInput}
             /> 
          <span className = {styles.rememberMe}>Remember Me</span>
          <button className = {styles.submitButton} type='submit'>Login</button>
        </form>
    )
}