const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
    const sql='select * from recepie'
    connection.query(sql,function(err,result){
        callback(err,result)
    })
};

const postRecepie=(recepie,callback)=>{
    const sql='insert into recepie (Cook_Time, Prep_Time,recepie_Name, Serves,categorie, recepie_Image,recepie_Description,recepie_Ingredients,users_user_Id)  values (?,?,?,?,?,?,?,?,?)'
    connection.query(sql,
        [ recepie.Cook_Time, recepie.Prep_Time, recepie.recepie_Name, recepie.Serves,  recepie.categorie, recepie.recepie_Image, recepie.recepie_Description, recepie.recepie_Ingredients, recepie.users_user_Id],
        function(err,result){
            callback(err,result)
        })
}

const Delete=(id,callback)=>{
    const sql =`delete from recepie where recepie_Id=${id}`
    connection.query(sql,function(err,result){
        callback(err,result)
    })
}

const updateRecepie=(recepie,callback)=>{
    const sql=`update recepie 
    set Cook_Time= ?, Prep_Time= ?, recepie_Name=? , Serves= ?, categorie= ?, recepie_Image= ?, recepie_Description=?, recepie_Ingredients=?
    where recepie_Id=?`
    connection.query(sql,
        [ recepie.body.Cook_Time, recepie.body.Prep_Time, recepie.body.recepie_Name, recepie.body.Serves,  recepie.body.categorie, recepie.body.recepie_Image, recepie.body.recepie_Description, recepie.body.recepie_Ingredients, recepie.params.id],
        function(err,result){
            callback(err,result)
        })
}

module.exports = { getAll, postRecepie, Delete, updateRecepie };

