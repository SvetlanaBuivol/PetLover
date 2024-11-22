import { AxiosResponse } from "axios";
import $api from "../http";
import { FriendsResponse } from "../models/response/FriendsResponse";

export default class FriendsService {
  static async getFriends(): Promise<AxiosResponse<FriendsResponse[]>> {
    return $api.get<FriendsResponse[]>("/friends");
  }
}
