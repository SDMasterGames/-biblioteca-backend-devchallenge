/* const exemplo = {
  id: 1,
  title: "Harry Potter",
  publisher: "Rocco",
  cover_url: "https://i.imgur.com/UH3IPXw.jpg",
  authors: ["JK Rowling", "..."],
}; */

export class Book {
  public id: number;
  public title: string;
  public publisher: string;
  public cover_url: string;
  public authors: string[];
  constructor(props: Book) {
    Object.assign(this, props);
  }
}
