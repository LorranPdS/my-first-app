# my-first-app
Será um aplicativo baseado em Angular como aula da Udemy

AULA 26 - What is Databinding?

OBS.: rodar o git no próprio projeto mesmo

Finalidade da aula:
Entender o que é o Databinding.

1) a tradução de "data binding" seria o mesmo que "ligação de dados". Se trata então de uma ligação (comunicação) entre o typescript (onde está a lógica do negócio) e o template (HTML).

2) Vejamos abaixo alguns exemplos de databinding que atuam com saída de dados (output data):

a) interpolação (interpolation):
{{ data }}

b) property binding:
[property]="data"

3) A seguir, exemplos de databinding que reagem conforme ocorrem eventos:
a) event binding:
(event)="expression"

4) Temos também um que contém ambas as situações (são usadas em saída de dados como também ao reagir a eventos), seria two-way-binding:
a) [(ngModel)]="data"

Obs.: note que os colchetes do item 2) letra b) é relativo a saída de dados enquanto o item 3) letra a) os parênteses reagem a eventos, ou seja, no item 4) letra a) temos tanto os colchetes (output) quanto os parênteses (react to events)