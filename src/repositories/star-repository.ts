import { getManager } from "typeorm";
import { Star } from "../models/star-model";

const getAllStars = () => {
    return getManager().query(`select * from stars`);
}

const getStarByID = (id: number) => {
    return getManager().query(`select * from stars where id = ?`, [id]);
}

const insertStar = ( star: Star) => {
    return getManager().query(`insert into stars ( name, about) values (?,?)`,
                              [star.name, star.about]);
}

const updateStar = (star: Star) => {
    return getManager().query(`update stars set name = ?, about = ?
                                             where id = ?`, [star.name, star.about, star.id]);
}

const deleteStar = ( id: number) => {
    return getManager().query(`delete from stars where id = ?`,[id]);
}



export default {getAllStars, getStarByID, insertStar, updateStar, deleteStar}