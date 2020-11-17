export interface ProfileData {
    username: string;
    company: string;
    avatar_url: string;
}

const profiles: ProfileData[] = [
    {
        username: 'clbmrls14',
        company: 'Bright Bridge Web',
        avatar_url: 'https://avatars1.githubusercontent.com/u/43351767?s=460&u=0508e4dc5453b8aba6c8e1bebe4bd19c3011b9e0&v=4'
    },
    {
        username: 'snow-jallen',
        company: 'Snow College',
        avatar_url: 'https://avatars1.githubusercontent.com/u/42281341?s=460&u=a4f1e5105ef213a6496cc8248a78c6caf19507c9&v=4'
    },
    {
        username: 'ReissZachary',
        company: 'Micron',
        avatar_url: 'https://avatars0.githubusercontent.com/u/45380236?s=460&u=4c2455b34a096afcef18a2762bd4687da75316c1&v=4'
    }
]

export const getProfiles = (): ProfileData[] => {
    return profiles;
}