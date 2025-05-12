const jwt = require('jsonwebtoken');

exports.required = async (req,res,next) => {

try{

    res.locals.idUsuario = 0

    const token = req.headers.authorization.spllit(""[1]);
    const decode = jwt.decode(token,"senhajwt");

    if (decode.id) {

        res.locals.idUsuario
    }
}
catch(error){

}

}