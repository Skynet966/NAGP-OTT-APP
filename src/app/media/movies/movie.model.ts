export class Movie {
  constructor(
    public name: string,
    public title: string,
    public description: string,
    public imdbRatings: number,
    public language: string,
    public genre: string,
    public image?: string
  ) {
    this.name = name;
    this.title = title;
    this.description = description;
    this.imdbRatings = imdbRatings;
    this.language = language;
    this.genre = genre;
    this.image = image;
  }
}
