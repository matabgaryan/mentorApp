
export type IEmployeesState = {
    status: string,
    applications: IEmployee[],
}

export type IMentorsState = {
    status: string,
    mentors: any[],
}

export type IEmployee = {
    id: string,
    image?: string,
    firstName: string,
    lastName: string,
    location: string,
    department: string,
    jobTitle: string,
    bio: string
    email: string,
    gender: string,
    country: string,
    city: string
}

export interface IUser {
    id: string,
    image: string,
    firstName: string,
    lastName: string,
    location: string,
    department: string,
    jobTitle: string,
    bio: string,
    email: string,
    country?: string,
    groups: any[],
}

export interface IAuthInitialState {
    loading: boolean,
    userInfo: IUser | null,
    error: boolean,
    status: string,
    isAuthenticated: boolean,
    openLoginModal: boolean
}
