import { Book } from "./Book";

export class Copy {
  private book: Book;
  private isAvailable: boolean = true;

  constructor(book: Book) {
    this.book = book;
  }

  public getBook(): Book {
    return this.book;
  }

  public isCopyAvailable(): boolean {
    return this.isAvailable;
  }

  public markAsBorrowed(): void {
    this.isAvailable = false;
  }

  public markAsAvailable(): void {
    this.isAvailable = true;
  }
}
