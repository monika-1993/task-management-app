export class User {
  name: string;
  id: number;

  constructor(name: string, tasks: number[] = []) {
    this.name = name;
    this.id = Math.floor(Math.random() * 1000); // id to be set based on id received from database
  }

  // public setId(id: number) {
  //   this.id = id;
  // }
}
