# my-first-app
Será um aplicativo baseado em Angular como aula da Udemy

AULA 37 - Understanding Directives

OBS.: rodar o git no próprio projeto mesmo

Finalidade da aula:
Entender o que são diretivas.

Directives são instruções no DOM.
Nós já até usamos Directives sem saber, pois no caso os componentes são essas instruções de DOM. Uma vez que colocamos um selector de nosso componente em algum lugar nos nossos templates, neste momento estamos instruindo o Angular para adicionar o conteúdo do nosso template de componente e a lógica de negócios em nosso código TypeScript neste lugar onde usamos o seletor. Esta foi a nossa instrução: "Angular, adicione o nosso componente neste lugar", e na verdade, os componentes são diretivas, mas diretivas com um template, mas saiba que também há diretivas sem um template.

Portanto, um exemplo seria a diretiva appTurnGreen (exibido em aula), que seria uma diretiva personalizada que poderíamos criar.
Normalmente, adicionamos diretivas com um seletor de atributos, mas tecnicamente o seletor de uma diretiva pode ser configurado como o seletor de um componente, portanto você também pode usar classes CSS ou o estilo de elementos, mas normalmente usa o estilo de atributo e neste parágrafo, diretiva pode simplesmente colorir o texto verde que você poderia dizer. Então, Angular encontraria essa instrução, aqui teríamos definido nossa diretiva com o decorador de diretivas para informar Angular que essa classe contém uma diretiva e, lá, poderíamos ter a lógica de transformar esse verde.

Agora aprenderemos a escrever nossas próprias diretrizes na seção focada em diretrizes neste curso, mas há algumas diretivas internas que são realmente úteis.

Vamos dar uma olhada mais de perto em como os usamos e o que eles fazem por nós nas próximas aulas.
--------------------------------------------------------------

AULA 38 - Using ngIf to Output Data Conditionally

Finalidade da aula:
Aprender a usar a diretiva *ngIf

O ngIf precisa ser adicionado com um asterisco antes dele. O asterisco é necessário porque o ngIf é uma diretiva estrutural, o que significa que ela altera a estrutura do nosso DOM, ou adiciona esse elemento ou não o adiciona. Veja que no nosso caso o *ngIf ele vai receber um true ou um false, e dependendo do que ele receber, ele vai mostrar na tela ou não aquela mensagem que foi criada no próprio HTML.

Após termos posto o *ngIf, podemos configurar nossas condições no que ficar entre aspas.

Reforçando, a estrela no início do ngIf indica que esta é uma diretiva estrutural, realmente mudando o DOM como acabamos de ver.
