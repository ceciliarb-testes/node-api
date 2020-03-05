'use strict';

const AppError = require('../utils/error');
const logger = require('../utils/logger');
const systemMessages = require('../utils/messages');
const enderecoModel = require('../models/endereco-model');

async function get(req, res) {
    try {
        const cep = req.params.cep;
        const num = req.params.num;

        const data = await enderecoModel.getByCepNum(cep, num);
        if(!data) {
            return res.status(404).send(new AppError(404, systemMessages.CrudErrors.ID_NOT_FOUND(this.entityName, id)));
        }
        return res.status(200).send(data);
    }catch(err) {
        logger.error(err);
        if(err instanceof AppError){
            return res.status(err.code).send(err);
        }
        return res.status(500).send(new AppError(500, err));
    }
}

module.exports = {
    get
};
