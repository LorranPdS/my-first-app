# my-first-app
Será um aplicativo baseado em Angular como aula da Udemy

OBS.: o git precisa estar aberto dentro da pasta /src do projeto ao fazer os commits.

Finalidade da aula:
1) baixar o bootstrap 3
2) alterar o arquivo angular.json (estará um nível acima)

- vamos instalar o bootstrap 3 localmente no projeto, e para isso usaremos o seguinte comando dentro do projeto:
npm install --save bootstrap@3

- no arquivo angular.json, vá na linha 25 em que diz "styles" e declare o seguinte entre os colchetes (logo acima do "src/styles.css") de maneira que ele fique da seguinte forma:
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],

O professor mostra o caminho e explica na aula o motivo de ser esse caminho no próprio projeto