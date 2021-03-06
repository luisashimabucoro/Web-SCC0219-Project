# Projeto de Web - Loja de Plantas

- Luísa Balleroni Shimabucoro - 11832385
- Matheus Bermudes Viana - 11849797
- Wictor Dalbosco Silva - 11871027

Link para teste do website hospedado: https://plant-shop-matheusbviana.vercel.app

## Requerimentos
- O sistema deve ter dois tipos de usuário:
  - *Administradores*: São responsáveis por gerenciar administradores, clientes e podutos. Para utilizar a conta de administrador, utilize as credenciais admin@admin.com:admin123 no formato (email:senha)
  - *Clientes*: São usuários que acessam o sistema para comprar produtos

- Para armazenar os dados é preciso ter os seguintes registros:
  - *admin*: id, nome, telefone e email
  - *cliente*: id, nome, endereço, telefone e email
  - *produto*: id, nome, foto, descrição, preço, quantidade em estoque e quantidade vendida

- Venda de produtos (ou serviços): produtos são selecionados, suas quantidades definidas e por fim são colocados no carrinho. Produtos são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade do produto vendida é subtraída da quantidade do estoque e acrescida a quantidade de produtos vendidos. Carrinhos são esvaziados apenas após o pagamento ou por uma ação direta do usuário.

- Gerenciamento de produtos/serviços: administradores podem criar/atualizar/ler/deletar (CRUD) novos produtos e serviços. Por exemplo, eles podem alterar a quantidade de produtos no estoque.

- **Funcionalidade específica:** o cliente pode selecionar o tipo de residência (casa ou apartamento) e características como iluminação do cômodo, temperatura e tempo disponível para manutenção. Com isso, a aplicação oferece sugestões de plantas que cumprem pelo menos 3 dos 4 critérios.

- O sistema deve atender os requisitos de acessibilidade e prover boa usabilidade. Além disso, o sistema deve ser responsivo.


## Descrição do Projeto
Esse projeto consiste no desenvolvimento de uma aplicação online para uma loja de plantas, a qual terá as seguintes funcionalidades:
- Cadastro e Login
- Adicionar ou remover produtos do carrinho
- Processo de finalizar compra (checkout)
- Filtros de busca de produtos
- Opções para gerenciamento de clientes e produtos exclusivas para administradores do sistema
- **Funcionalidade específica:** o cliente pode selecionar o tipo de residência (casa ou apartamento) e características como iluminação do cômodo, temperatura e tempo disponível para manutenção. Com isso, a aplicação oferece sugestões de plantas que cumprem pelo menos 3 dos 4 critérios

Para que essas funcionalidades possuam um funcionamento adequado será necessário armazenar as seguintes informações:
  - *admin*: id, nome, telefone e email
  - *cliente*: id, nome, endereço, telefone e email
  - *produto geral*: id, nome, foto, descrição, preço, quantidade em estoque e quantidade vendida
    - *planta*: além dos atributos padrões, elas possuem tamanho, nível de iluminação, temperatura, manutenção ideais e categoria

### Diagrama de Navegação
<img src="Mockups/diagrama_navegacao.png" alt="navigation diagram" width="700"/>

<a href="https://www.figma.com/file/3dgTdFB6VzP9HX0n41i1g5/Plant-Shop-Website-(Practice-%23001)-(Community)-(Copy)?node-id=0%3A1">Projeto no Figma</a>
## Comentários Sobre o Código
## Plano de Testagem

Serão executados testes manuais para login e cadastro, inserções e gerenciamento de produtos, usuários e administradores, filtragem, busca e também simulação de compras em vários cenários.

Não serão utilizados frameworks adicionais para os testes.

Para criação de usuários admin, lembre-se de utilizar admin@admin.com:admin no formato (email:senha).

### Seguindo um roteiro de testagem

1. **Teste com cadastro**
	* Cadastro feito com e-mail inválido
 	* Cadastro em que o campo de senha não confere com o campo de confirmação da senha
 	* Cadastro em que a senha possua menos de 8 caracteres
 	* Cadastro preenchido corretamente com dados válidos
 	* Cadastro utilizando o mesmo email que o de um cadastro previamente realizado
2. **Teste com login**
    * Login feito com campos vazios
    * Login feito com campos inválidos (email sem “@”, senha com menos que 8 caracteres etc)
    * Login feito com campos corretamente preenchidos
    * Logout

3. **Teste com busca**
	* Busca no campo de busca do produto "computador"
	* Busca no campo de busca do produto "planta de interior"
	* Busca no campo de busca por "planta"

4. **Teste com funcionalidade específica de busca personalizada**
	* Realizar busca com menos que 4 campos preenchidos
	* Realizar busca preenchendo, respectivamente, os campos "Médio", "Médio", "Média" e "Pouco"

5. **Teste de navegação**
	* Navegação pelas páginas do cliente (Home, Loja, Busca Personalizada, Sobre, Carrinho e Meus Pedidos)
	* Navegação com admin (páginas do cliente + Clientes, Produtos, Compras, Editar Cliente, Editar Produto)
 
6. **Teste com escolha de produto**
	* Ir na sessão de loja, filtrar por produtos mais caros primeiro, clicar no produto, alterar a sua quantidade e adicionar ao carrinho

7. **Teste carrinho e check out**
	* Compra com carrinho vazio
	* Editar quantidade de um determinado produto dentro do carrinho
	* Remover um produto do carrinho

8. **Teste editar produto**
	* Alterar informações do produto que precisam ser mudadas e buscar pelo produto na barra de navegação.

9. **Teste inserir produto**
	* Inserir produto com campos vazios
	* Inserir produto com campos inválidos (ex: preço : "vinte"; url inválida)

10. **Teste remover produto**
	* Removendo um produto.

11. **Teste remover cliente**
	* Removendo um cliente.

12. **Teste visualizar pedidos (admin)**
	* Visualizando quais pedidos foram feitos.
		
13. **Teste visualizar compras (cliente)**
	* Cliente visualizando as compras feitas

14. **Teste visualizar produtos (admin)**
	* Administrador visualizando os produtos


## Resultado dos Testes

### Resultados esperados de acordo com o roteiro de testagem

1. **Teste com cadastro**
	* Alert avisando que o email é inválido e aviso do campo de texto do forms de cadastro
	* Alert avisando que as senhas não batem
	* Alert avisando que a senha deve possuir pelo menos 8 caracteres
	* Cadastro e login realizado com sucesso, dando acesso ao carrinho, aba de "Meus Pedidos" e botão de logout caso o cliente deseje sair de sua conta recém criada
	* Alert avisando que o email já foi cadastrado
2. **Teste com login**
	*  Alert de email ou senha incorretos
	*  Alert de email ou senha incorretos e aviso do campo de texto do forms de login
	*  Login realizado com sucesso, dando acesso ao carrinho, aba de "Meus Pedidos" e botão de logout caso o cliente deseje sair de sua conta recém criada
	*  Logout é realizado, fazendo com que abas de carrinho e "Meus Pedidos" sumam
3. **Teste com busca**
	* Nada é retornado na sessão de loja, uma vez que o produto não existe no catálogo da loja
	* As plantas de interior presentes no catálogo da loja são retornadas
	* Todos os produtos da categoria "Planta" são retornados
4. **Teste com funcionalidade específica de busca personalizada**
	* Alert pedindo para que o cliente preencha todos os campos
	* As plantas que possuem essas características são retornadas
5. **Teste de navegação**
	* Todas as páginas devem ser acessíveis e funcionais
	* Todas as páginas devem ser acessíveis e funcionais
6. **Teste com escolha de produto**
	* Os produtos mais caros da loja devem aparecer (equipamento), então quando clicados seus dados aparecem na página de produto e sua quantidade pode ser alterada entre os valores [1, estoque atual] e quando quando o botão de adicionar ao carrinho é clicado o produto é colocado na página de carrinho do cliente
7. **Teste carrinho e check out**
	* Alert avisando o cliente que ele não possui itens no carrinho
	* A quantidade deve poder ser alterada entre os valores [1, estoque atual]
	* Produto é removido do carrinho com sucesso
8. **Teste editar produto**
	* O produto editado deve ser encontrado ao buscar pelas novas características atualizadas
9. **Teste inserir produto**
	* Alert avisando o admin que todos os campos de dados do produto devem ser preenchidos
	* Alert avisando o admin que o link da imagem é inválido
10. **Teste remover produto**
	* Alert avisando que o produto foi removido, e o produto não deve ser mais encontrado na loja
11. **Teste remover cliente**
	* O cliente é removido, não sendo mais possível logar na conta dele
12. **Teste visualizar pedidos (admin)**
	* Caso existam compras, elas serão exibidas em uma lista, exibindo o comprador, o produto e o preço.
13. **Teste visualizar compras (cliente)**
	* As compras serão exibidas em lista, com informações da compra e os últimos 4 dígitos do cartão utilizado.
14. **Teste visualizar produtos (admin)**
	* Devem ser exibidos todos os produtos existentes na loja, com a possibilidade de edição por parte do admin.

## Procedimentos de Construção

Para poder testar o site é necessário ter o [Node](https://nodejs.org/en/download/) e seu gerenciador de pacotes [npm](https://nodejs.org/en/download/) instalados.

Depois de instalados, serão necessários os arquivos localizados no diretório Milestone3, e rodar os seguintes comandos:


Importante: A configuração de exibição do Windows deve estar em 100%, assim como o zoom do seu navegador :)
** A pasta é a "EntregaFinal", podem desconsiderar as outras

Dentro da pasta backend:

```
npm install
npm run server
```
Com o servidor rodando, rode dentro da pasta frontend:

```
npm install
npm start
```


Deve ser aberta uma aba no seu browser, caso não abra, basta acessar 'http://localhost:3000/'


## Problemas
Após a realização de diversos testes, não conseguimos detectar nenhum problema no funcionamento do site, inicialmente tivemos dificuldades para conectar com a base de dados MongoDB mas após assistir o tutorial com calma conseguimos integrar normalmente.


## Comentários
O projeto ajudou muito na consolidação de conhecimentos em WEB, especialmente na utilização de React e Node.js, foi extremamente produtivo e didático, com certeza irá nos ajudar futuramente quando formos lidar com desenvolvimento web novamente.


