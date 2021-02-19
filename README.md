## Para testar:

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png"/>
</p>
<p align="center">
  <a href="https://docs.cypress.io/api/api/table-of-contents.html">Documentação</a>
</p>

<h3 align="center">
  A web evoluiu. Finalmente, o teste também.
</h3>

<p align="center">
  Teste rápido, fácil e confiável para qualquer coisa executada em um navegador.
</p>

1. Instale o nodejs
```bash
================================================================
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
ou
baixe direto do site
https://nodejs.org/en/download/
================================================================
```

2. Para abrir o dashboad dos testes
```bash
npx cypress open
```
3. Ou execute o teste em linha de comando
```bash
npx cypress run
```
![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)

================================================================
<p>Caso queria visualizar o relatório já gerado no dashboard do cypress, acessar com a conta do google o link:
</p>

https://dashboard.cypress.io/projects/gfnnn9/runs/1/

<p>email: testqualitydeliverymuch.alvaro@gmail.com </p>
<p>senha: delivery123456</p>

ou

link direto do projeto:
https://dashboard.cypress.io/projects/gfnnn9/runs/1/test-results/instance/97b32b67-1b4d-4e16-9945-0036a0cf44af/stdout?utm_source=Dashboard&utm_medium=Share+URL&utm_campaign=Output

email: testqualitydeliverymuch.alvaro@gmail.com
senha: delivery123456

================================================================

Para gerar novo relatório, rodar comando abaixo no terminal:

cypress run --record --key 3ad65668-3bfa-49b2-935d-98c0a4f93f94


 
