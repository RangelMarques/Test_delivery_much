
//Validar end points - Teste valido onde é inserido um valor entre -10000 e 10000
describe('validar end points', function () {
    it('Teste Valido', function () {
        let Teste = "1099"                                         // declarando variavel com valor setado
        cy.request('GET',`http://challengeqa.staging.devmuch.io/${Teste}`).then((Response)=>{ //acessando url
        
        expect(Response.status).to.eq(200);                        // validando retorno de sucesso
        expect(Response.body).to.be.not.null;                      // validando corpo da resposta


        });
    });   
    // validando end points - Teste invalido onde é passado um valor fora do permitido sendo -10001
    it ('Teste - Invalido', function(){
        let Teste = "-10001"

        cy.request({
            method: 'GET',
            url: `http://challengeqa.staging.devmuch.io/${Teste}`, // acessando url
            failOnStatusCode: false                                // informando que mesmo que o retorno seja 400 dar continuidade no teste e validar esse erro.
        }).then((resp)=>{ 
          expect(resp.status).to.eq(400);                          // validando retorno 400
          expect(resp.statusText).to.equal('Bad Request');         // validando status do retorno
        
        });
    })
    //Teste Valido em inglês - Teste valido onde é passado um valor dentro do permitido sendo ele: -10000 e 10000
    describe('validate end poins in english', function(){
        it('Test - Validated', function (){
            let Test = "500"
            cy.request('GET',`http://challengeqa.staging.devmuch.io/en/${Test}`).then((Response)=>{ // acessando url

                expect(Response.status).to.eq(200);                // validando retorno de sucesso
                expect(Response.body).to.be.not.null;              // validando corpo da resposta
            })
        })
        // Teste invalido em ingles - Teste onde foi passado um valor fora dos valores permitidos.
        it ('Test - Invalid', function(){
            let Test = "-10002"
    
            cy.request({
                method: 'GET',
                url: `http://challengeqa.staging.devmuch.io/en/${Test}`, // acessando url
                failOnStatusCode: false                                  // informando que mesmo que o retorno seja 400 dar continuidade no teste e validar esse erro.
            }).then((resp)=>{
              expect(resp.status).to.eq(401);                            // validando retonro 401
              expect(resp.statusText).to.equal('Unauthorized');          // validando status do retorno.
            
            });
        })
    })
});