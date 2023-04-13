export class Task {
  id: number | undefined;

  title: string = '';

  completed: boolean = false;

  constructor(title: string, completed: boolean = false) {
    this.title = title;
    this.completed = completed;
    this.id = Math.floor(Math.random() * 10);
  }
}
