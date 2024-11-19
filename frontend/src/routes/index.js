import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import SignIn from '../pages/SingIn';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            }
            ,
            {
                path: "login",
                element: <Login />
            }
            ,
            {
                path: "forgotPassword",
                element: <ForgotPassword />
            }
            ,
            {
                path: "SignIn",
                element: <SignIn />
            }
        ]
    }
])

export default router;