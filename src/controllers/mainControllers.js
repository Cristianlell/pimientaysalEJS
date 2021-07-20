let platos = require('../data/platosDB')


module.exports={
    index : (req,res)=>{
        return res.render('index',{platos:platos})

    },
    detail : (req,res) =>{
       let plato =platos.find(e => e.id === +req.params.id)
        res.render('detalleMenu',{plato})
    }
}