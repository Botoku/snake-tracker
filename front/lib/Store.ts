import {create} from 'zustand'


interface User {
    id: string
    name: string
    email: string
}

interface AuthState {
    user: null | User 
    isAuthenticated: boolean
    setUser: (user: User) => void
    clearUser: () => void
}


export const useUserInfoStore = create<AuthState>()((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    setUser: (user) => set({user, isAuthenticated: true}),
    clearUser: () => set({user: null, isAuthenticated: false})



}))