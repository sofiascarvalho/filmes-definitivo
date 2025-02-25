/***************************************************************************************
 * objetivo: controller responsavel pela regra de negocio referente ao CRUD de filme
 * data: 11/02/2025
 * autor: sofia
 * versao: 1.0 
 ***************************************************************************************/

//import do arquivo de mensagem e status code do projeto
const message=require('../../modulo/config.js')

//import do aquivo para realizar o CRUD de dados no Banco de Dados
const filmeDAO=require('../../model/DAO/filme.js')

//funcao para tratar a insercao de um filme no DAO
const inserirFilme=async function(filme, contentType){
    
    try {

        if(String(contentType).toLowerCase()=='application/json')
        {
            if(filme.nome == ''                 ||filme.nome ==undefined            ||filme.nome==null              ||filme.nome.length>80      ||
                filme.duracao==''               ||filme.duracao==undefined          ||filme.duracao==null           ||filme.duracao.length>5    ||
                filme.sinopse==''               ||filme.sinopse==undefined          ||filme.sinopse==null           ||
                filme.data_lancamento==''       ||filme.data_lancamento==undefined  ||filme.data_lancamento==null   ||filme.data_lancamento>10  ||
                filme.foto_capa==undefined      ||filme.foto_capa>200               ||
                filme.link_trailer==undefined   ||filme.link_trailer>200 
            )
            {
                return message.ERROR_REQUIRED_FIELDS //400
            }else{
                //chama a funcao para inserir no banco de dados e aguarda o retorno da funcao
             let resultFilme=await filmeDAO.insertFilme(filme)
    
                if(resultFilme)
                    return message.SUCCESS_CREATED_ITEM //201
                else
                    return message.ERROR_INTERNAL_SERVER_MODEL //500
            }
        }else{
            return message.ERROR_CONTENT_tYPE //415
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
}
}

//funcao para tratar a atualizacao de um filme no DAO
const atualizarFilme=async function(){

}

//funcao para tratar a exclusao de um filme no DAO
const excluirFilme=async function(){

}

//funcao para tratar o retorno de uma lista de filmes do DAO
const listarFilme=async function(){
    try {
        //objeto do tipo JSON
        let dadosFilme={}
        //chama a funcao para retronar os filmes cadastrados 
        let resultFilme=await filmeDAO.selectAllFilme()

        if(resultFilme!=false){
            if(resultFilme.length>0){
                //ciando um JSON de retorno de dados para a API
                dadosFilme.status=true
                dadosFilme.status_code=200
                dadosFilme.items=resultFilme.length
                dadosFilme.films=resultFilme

                return dadosFilme
            }else{
                return message.ERROR_NOT_FOUND //404
            }
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL //500
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
        
    }
}

//funcao para tratar o retorno de um filme filtrado pelo id do DAO
const buscarFilme=async function(){

}


module.exports={
    inserirFilme,
    atualizarFilme,
    excluirFilme,
    listarFilme,
    buscarFilme
}