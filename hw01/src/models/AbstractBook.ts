import { Author } from "./Author";

export abstract class AbstractBook {
  private title: string;
  private year: number;
  private author: Author;

  constructor(title: string, year: number, author: Author) {
    this.title = title;
    this.year = year;
    this.author = author;
  }

  public getTitle(): string {
    return this.title;
  }

  public getYear(): number {
    return this.year;
  }

  public getAuthor(): Author {
    return this.author;
  }

  public abstract getDescription(): string;
}
