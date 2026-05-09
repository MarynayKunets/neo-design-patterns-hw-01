import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class Book extends AbstractBook {
  constructor(title: string, year: number, author: Author) {
    super(title, year, author);
    author.addBook(this);
  }

  public getDescription(): string {
    return `Physical book "${this.getTitle()}" by ${this.getAuthor().getName()} (${this.getYear()})`;
  }
}
