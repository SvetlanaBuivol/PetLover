import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    static async signup(email: string, password: string, name: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/users/signup', {email, password, name})
    }

    static async signin(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/users/signin', {email, password})
    }

    static async signout(): Promise<void> {
        return $api.post('/users/signout')
    }
}