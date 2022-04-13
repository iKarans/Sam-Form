import React, { useState } from 'react';
import { IUser } from '../../modals/modals';
import "./Form.scss";

interface FormProps {

}

export const Form: React.FC<FormProps> = ({}) => {
    const [user, setUser] = useState<IUser>({username: "", password: ""});
    const [isValidUser, setIsValidUser] = useState<boolean>(false)

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(user.username.length > 8 && user.password.length > 8) {
            setIsValidUser(true);
        }
    }
    return (
        <>
            {isValidUser ? <h1>User is valid</h1> :             <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Username" required onInput={(e: React.ChangeEvent<HTMLInputElement>) => {setUser({...user, username: e.target.value})}} />
                <input type="password" placeholder="Password" required onInput={(e: React.ChangeEvent<HTMLInputElement>) => {setUser({...user, password: e.target.value})}} />
                <button type="submit">Login</button>
            </form>}
        </>
        );
}