import React from "react";
import { FC } from "react";
import { ProfileData } from "../models/ProfileData";
import { Profile } from "./Profile";


interface Props {
    data: ProfileData[];
}

export const ProfileList: FC<Props> = ({data}) => {
    return (
        <div>
            {data.map(profile => (
                <div>
                    <Profile data={profile} />
                </div>
            ))}
        </div>
    );
}