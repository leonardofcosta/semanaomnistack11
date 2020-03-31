const generateUniqueId = require("../utils/genereteUniqueId");

// importa o arquivo para comunicar com banco de dados
const connection = require("../database/connection");

// importa o pacote crypto, para gerar uma string aleatória
const crypto = require("crypto");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select('*');
  
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, cidade, uf } = request.body;

    // vai gerar 4 Bytes, aleatórios, de caracteres hexadecimais
    const id = generateUniqueId();

    // utilizando o connection passo a tabela como parametro e chamo o método insert
    // O método insert pode demorar um pouco para retornar, dessa forma utilizamos o async
    // (assincrono) na função e await na frente do connection, para assim antes do return
    // ser executado, aguardar a finalização da execução do método insert
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      cidade,
      uf,
    });

    return response.json({ id });
  }
}