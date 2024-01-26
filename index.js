function obterUsuario(callback){
    setTimeout(function(){
        return callback(null, {
            id:1,
            nome:"Miguel Doido",
            dataNascimento:new Date()
        })
    },1000)
}

function obterTelefone(idUsurio, callback){
    setTimeout(function(){
        return callback(null,{
            numero: "123456"
        })
    },2000)
}

function obterEndereco(idUsurio, callback){
    setTimeout(function(){
        return callback(null,{
            rua: "Lote 05",
            casa: "casa 06"
        })
    },2000)
}


obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error("Erro no usuário!", error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error("Erro no telefone!", error)
            return;
        }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
        if(error2){
            console.error("Erro no endereco!", error)
            return;
        }
        console.log(`
        Nome:${usuario.nome}, 
        ID: ${usuario.id},
        Endereco: ${endereco.casa},
        Rua: ${endereco.rua}
        Telefone: ${telefone.numero}
            `
        )
    })
})
})
