import React, { useState } from 'react';
import axios from 'axios';
import { ProfileData } from '../models/ProfileData';

interface Props {
    onSubmit: (profileData: ProfileData) => void;
}

export const Form:React.FC<Props> = (props) => {
    const [username, setUsername] = useState('');

    const handleSubmit = async () => {
        const profileData = await axios.get(`https://api.github.com/users/${username}`).then(response => response.data);
        props.onSubmit(profileData);
        setUsername('');
    }

    return (
        <form>
            <input
                type="text"
                value={username}
                onChange={event => setUsername(event.target.value)}
                placeholder="GitHub Username"
                required
            />
            <button onClick={() => handleSubmit()}>Add Card</button>
        </form>
    );
}