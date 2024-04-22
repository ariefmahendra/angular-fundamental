export interface Login {
    email: string
    password: string
}

export interface Register {
    email: string
    password: string
}

export interface LoginResponse {
    email: string
    accessToken: string
}

export interface RegisterResponse {
    email: string
}