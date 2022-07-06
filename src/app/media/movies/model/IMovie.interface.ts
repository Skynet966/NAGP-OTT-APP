export interface IMovie {
  name: string;
  title: string;
  description: string;
  imdbRatings: number;
  language: string[];
  genre: string[];
  image: string;
  reviews: { name: string; email: string; message: string }[];
}
