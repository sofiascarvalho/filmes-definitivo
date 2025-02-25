/***********************************************************************************
 * objetivo: arquivo de configuracao para padronizar mensagens e status code da API
 * data: 18/02/2025
 * autor: sofia
 * versão: 1.0
 ***********************************************************************************/

/************************************STATUS CODE DE MENSAGENS DE ERRO**************************************/
const ERROR_REQUIRED_FIELDS={
    status: false,
    status_code: 400,
    message: 'Não foi possível realizar a requisição, pois existem campos obrigatórios que não foram preenchidos ou não atendem a quantidade de caracteres!!!'
}

const ERROR_INTERNAL_SERVER={
    status: false,
    status_code: 500,
    message: 'Devido a erros internos no servidor, não foi possível processar a requisição!!!'
}



/************************************STATUS CODE DE MNSAGENS DE SUCESSO************************************/
const SUCCESS_CREATED_ITEM={
    status: true,
    status_code:201,
    message: 'Item criado com sucesso!!!'
}








module.exports={
    ERROR_REQUIRED_FIELDS,
    ERROR_INTERNAL_SERVER,
    SUCCESS_CREATED_ITEM
}