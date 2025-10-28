import { Status } from "./enum/userStatus-enum";

export interface User {
    id: number;
    name: string;
    status: Status;
  }