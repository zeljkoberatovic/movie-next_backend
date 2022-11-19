import { getManager } from "typeorm";
import { Genre } from "../models/genre-model";

const getAllGenres = () => {
    return getManager().query(`select *from genres`);
}

const getGenresByID = (id: number) => {
    return getManager().query(`select *from genres where id = ?`,[id]);
}

const insertGenre = (genre: Genre) => {
    return getManager().query(`insert into genres ( name, about) values (?, ?)`,[genre.name, genre.about ]);
}

const updateGenre = (genre: Genre) => {
    return getManager().query(`update genres set name = ?, about = ?
                                              where id = ?`, [genre.name, genre.about, genre.id]);
}

const deleteGenre = (id: number) => {
    return getManager().query(`delete from genres where id = ?`,[id])
}

export default {getAllGenres, getGenresByID, insertGenre, updateGenre, deleteGenre }