import { iTodo } from "./itodo";

export class Todo implements iTodo {

  constructor(
  public title: string,
  public completed: boolean|string, public id?:number){}
}
