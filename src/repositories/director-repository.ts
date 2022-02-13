import { getManager } from "typeorm";
import { Director } from "../models/director-models";

const getAllDirectors = () => {
    return getManager().query('select * from directors');
}

const getDirectorByID = (id: number) => {
    return getManager().query(`select * from directors where id = ?`,[id]);
}

const insertDirector = (director: Director) => {
    return getManager().query(`insert into directors ( name, about) values (?,?)`,[director.name,director.about]);
}

const updateDirector = (director: Director) => {
    return getManager().query(`update directors set name = ?, about = ?
                                                where id = ?`,[director.name, director.about, director.id]);
}

const deleteDirector = (id: number) => {
    return getManager().query(`delete from directors where id = ?`,[id]);
}

export default { getAllDirectors, getDirectorByID, insertDirector,updateDirector,deleteDirector}