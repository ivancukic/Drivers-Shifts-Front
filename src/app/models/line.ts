import { Time } from "@angular/common";
import { Driver } from "./driver";
import { User } from "./user.model";

export interface Line {

  // PROVERITI KOJE VREME DA SE UZME
  id?: number,
  name_of_line?: string,
  start_time?: Time,
  end_time?: Time,
  total_time?: Time,
  num_drivers?: number,
  shift_one?: Driver,
  shift_two?: Driver,
  shift_three?: Driver,
  user?: User,
  drivers?: Driver[]


}
