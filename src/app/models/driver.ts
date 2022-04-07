import { Category } from "./category";
import { Line } from "./line";
import { User } from "./user.model";

export interface Driver {

  id?: number;
  name?: string;
  dob?: Date;
  category?: Category;
  user?: User;
  lines?: Line[]; // MISLIM DA MI OVO NE TREBA
  //selectedCategory?: number;
  active?: Boolean;


}
