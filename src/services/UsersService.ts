import { AxiosResponse } from "axios";
import $api from "../http";
import { UsersResponse } from "../models/response/UsersResponse";

export default class UsersService {
  static async currentUser(): Promise<AxiosResponse<UsersResponse>> {
    return $api.get("/users/current");
  }

  static async fullUserInfo(): Promise<AxiosResponse<UsersResponse>> {
    return $api.get("/users/current/full");
  }

  static async editCurrentUser(
    name: string,
    email: string,
    phone: string,
    avatar: string
  ): Promise<AxiosResponse<UsersResponse>> {
    return $api.patch<UsersResponse>("/users/current/edit", {
      name,
      email,
      phone,
      avatar,
    });
  }
}
