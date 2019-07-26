import IImdbInfo  from './IImdbInfo' ;

export default interface IMovie {
  name: string;
  sinopsis: string;
  genre: string;
  year: number;
  lenghtInMinutes: number;
  imdbInfo: IImdbInfo;
};
