import { Shift } from "./shift.enum";
import { User } from "./user.model";

export interface DriversShifts {

  id?: number,
  publiclinesId?: number,
  driverId?: number,
  shift?: Shift,
  user?: User

}
