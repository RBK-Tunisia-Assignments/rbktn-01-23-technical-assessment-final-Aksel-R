const {getAll, postRecepie, Delete, updateRecepie}=require("../model/recipiesModel")


const getrecepie = (req, res) => {
  getAll(function(err,result){
    if(err) console.log(err)
    else res.json(result)
  })
};
const addRecepie=(req,res)=>{
  postRecepie(req.body,function(err,result){
    if(err) console.log(err)
    else res.json(result)
  })
}
const deleteRecepie=(req,res)=>{
  Delete(req.params.id,function(err,result){
    if(err) console.log(err)
    else res.json(result)
  })
}
const update=(req,res)=>{
  updateRecepie(req,function(err,result){
    if(err) console.log(err)
    else res.json(result)
  })

}
module.exports = {
  getrecepie,
  addRecepie,
  deleteRecepie,
  update
};
