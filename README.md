# my-first-app
Será um aplicativo baseado em Angular como aula da Udemy

AULA 33 - Important: FormsModule is Required for Two-Way-Binding!

OBS.: rodar o git no próprio projeto mesmo

Finalidade da aula:
Leitura do artigo

Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

import { FormsModule } from '@angular/forms';