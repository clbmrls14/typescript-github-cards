import React from 'react';
import { FC } from 'react';
import { ProfileData } from '../models/ProfileData';

interface Props {
    data: ProfileData;
}

export const Profile: FC<Props> = ({data}) => {
    return (
        <div className="github-profile">
            <img src={data.avatar_url} />
            <div className="info">
                <div className="name" key={data.username}>{data.username}</div>
                <div className="company" key={data.company}>{data.company}</div>
            </div>
        </div>
    );
}