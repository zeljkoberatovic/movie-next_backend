export class Movie {
    id: number;
    title: string;
    year: number;
    image_url: string;
    certificate: number;
    runtime: number;
    imdb_rating: number;
    description: string;
    metascore: number;
    votes: number;
    gross: number;

    constructor(id: number,title: string,year: number,image_url: string,certificate: number,runtime: number,
        imdb_rating: number,description: string,metascore: number,votes: number,gross: number){
            this.id = id;
            this.title = title;
            this.year = year;
            this.image_url = image_url;
            this.certificate = certificate;
            this.runtime;
            this.imdb_rating = imdb_rating;
            this.description = description;
            this.metascore = metascore;
            this.votes = votes;
            this.gross = gross;
        }
}