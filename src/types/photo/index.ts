export interface IPhoto {
    id: string,
    user: {
        userName: string,
        avatar: string
    },
    file: string,
    caption: string,
    likes: number,
    isMyPhoto: boolean,
    createdAt: string,
    comments: number,
    isLiked: boolean
}