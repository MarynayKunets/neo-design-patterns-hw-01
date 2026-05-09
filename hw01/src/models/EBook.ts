import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class EBook extends AbstractBook {
  private url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year, author);
    this.url = url;
    author.addBook(this);
  }

  public getUrl(): string {
    return this.url;
  }

  public getDescription(): string {
    return `E-book "${this.getTitle()}" by ${this.getAuthor().getName()} (${this.getYear()}) - Available at: ${this.url}`;
  }
}
