const database = require('../services/database.js');


module.exports = {
  getByCepNum: (cep, num) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await database.simpleExecute(`
SELECT DISTINCT tipo_lograd, sigla_lograd, logradouro, numero, bairro, cep, regional, cod_regional, posicao_x, posicao_y
FROM (
SELECT tipo_logradouro.descricao tipo_lograd,
tipo_logradouro.sigla sigla_lograd,
logradouro.nome_atual logradouro,
endereco.numero numero,
regional.codigo cod_regional,
endereco.cep cep, regional.descricao regional, bairro.nome bairro,
endereco.norte posicao_x, endereco.leste posicao_y,
endereco.id_endereco_basico_bh id_endereco_basico_bh
FROM siatuprd.logradouro@le_siatu_ender.pbh logradouro,
siatuprd.endereco_basico_bh@le_siatu_ender.pbh endereco,
siatuprd.regional@le_siatu_ender.pbh regional,
siatuprd.tipo_logradouro@le_siatu_ender.pbh tipo_logradouro,
siatuprd.bairro_popular@le_siatu_ender.pbh bairro
WHERE (logradouro.id_logradouro = endereco.id_logradouro)
AND (logradouro.id_tipo_logradouro = tipo_logradouro.id_tipo_logradouro)
AND (endereco.id_regional = regional.id_regional)
AND (bairro.id_bairro_popular = endereco.id_bairro_popular)
AND endereco.cep like '%'||:cep||'%'
AND endereco.numero = :num)`, {cep, num});
        
            resolve(result.rows);
        } catch(err) {
            reject(err);
        }
    });
  },

}