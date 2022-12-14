interface User {
    userName: string,
    avatar: string
}
export interface IPhoto {
    id: string,
    user: User,
    file: string,
    caption: string,
    likes: number,
    isMyPhoto: boolean,
    createdAt: string,
    commentCount: number,
    comments: IComment[],
    isLiked: boolean
}

export interface IComment {
    id: string,
    user: User,
    isMyComment: boolean,
    payload: string,
    createdAt: string,
}

export interface IComments {
    photoId: string,
    user: User,
    caption: string, 
    comments: IComment[],
    commentCount: number
}

export interface ICommentComponent {
    id?: string,
    photoId?: string,
    user: User,
    caption: string
    isMyComment?: boolean
}