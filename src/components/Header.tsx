import React, { useState } from 'react';
import '../App.css';
import { ProfileList } from './ProfileList';
import { ProfileData } from '../models/ProfileData';
import { Form } from './Form';


export const Header = () => {
    const [boop, setBoop] = useState(false);
    const [profileList, setProfileList] = useState<ProfileData[]>([]);

    const addNewProfile = async (profileData: ProfileData) => {
        const newProfile: ProfileData = {
            username: profileData.username, 
            company: profileData.company, 
            avatar_url: profileData.avatar_url
        };
        setProfileList([...profileList, newProfile]);
    }

    return (
        <>
            <header className="App-header">
                <h3>GitHub Card List!!!</h3>
                <Form  onSubmit={addNewProfile}/>
                <ProfileList data={profileList} />
                <button onClick={() => setBoop(!boop)}>{boop ? "Boop" : "Click Me!"}</button>
            </header>
        </>
    );
};
    
