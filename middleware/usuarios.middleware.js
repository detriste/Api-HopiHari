const jwt = require('jsonwebtoken');

exports.required = async (req,res,next) => {

try{

    res.locals.idUsuario = 0

    const token = req.headers.authorization.spllit(""[1]);
    const decode = jwt.decode(token,"senhajwt");

    if (decode.id) {

        res.locals.idUsuario = id;
        next(); 
    } else {

        return res.status(401).send({"error":error});
    }

}
catch(error){
    return res.status(500).send({"error":error});
}

}