# ThoughtWorks Contacts

### Pré requisitos

Você precisará clonar este repositório git. Para isso, precisará fazer o download e instalar o Git [http://git-scm.com/](http://git-scm.com/) em sua máquina.

Diversos pacotes nodejs são utilizados para suportar a construção e teste dessa aplicação. Portanto, você também precisar fazer o download e instalar o nodejs [http://nodejs.org/](http://nodejs.org/)

### Clonando este repositório

Para clonar este repositório utilizando o [git][git]:

```
git clone https://github.com/renanmartins/thoughtworks-contacts-una.git
cd thoughtworks-contacts-una
```

### Instalando as dependências

Há dois tipos distintos de dependências:

* Aquelas necessárias para construir e testar a aplicação, tais como karma, protractor, jasmine, http-server, entre outras; Essas dependências são gerenciadas via `npm`, the [node package manager][npm].

* Aquelas necessárias para executar a aplicação, tais como o framework AngularJS, underscorejs, entre outros. Essas dependências são gerenciadas via `bower`, a [client-side code package manager][bower].

Tudo já estará pré-configurado para que o `npm` utilize o `bower` automaticamente, bastando executar:

```
npm install
```

Se você estiver usando o Windows, pode ser que encontre o seguinte erro:

`nodejs/windows Error: ENOENT, stat 'C:\Users\<seu_usuario>\AppData\Roaming\npm'`

Se isso acontecer, basta criar o diretório no path especificado e tentar novamente. Veja [o erro no StackOverflow][windows-error]

```
mkdir "C:\Users\<seu_usuario>\AppData\Roaming\npm"
```

`npm install` fará com que `bower install` também seja executado. Após o término da execução, você poderá reparar que existem dois novos diretórios em seu projeto.

* `node_modules` - contém os pacotes npm necessários
* `app/bower_components` - contém o código das dependencias javascript (angularjs, underscorejs, jquery, etc)

### Executando/Servindo a aplicação

O projeto está pré-configurado com um simples servidor web. A maneira mais simples de iniciá-lo é executando o seguinte comando:

```
npm start
```

Agora você pode acessar a aplicação através da seguinte URL no seu navegador: `http://localhost:8000/app/index.html`.



## Estrutura de diretórios

    app/                --> todos os arquivos que efetivamente fazem parte da aplicação
      css/              --> arquivos css
        app.css         --> default stylesheet
      img/              --> imagens
      index.html        --> arquivo HTML (template) principal da app
      js/               --> arquivos javascript
        app.js
        controllers.js
        directives.js
        filters.js
        services.js
      partials/         --> html templates que são incluidos na aplicação (partials)
        partial1.html
        partial2.html

    test/               --> arquivos e configurações de testes
      protractor-conf.js    --> arquivo de configuração do Protractor
      e2e/                  --> testes de aceitação
        ...js
      karma.conf.js         --> arquivo de configuração do karma, usado para executar os testes unitários
      unit/                 --> testes unitários
        ...js

## Testes

Criamos dois tipos de testes: Unitários e de Aceitação (UAT)

### Executando os testes unitários

Os testes unitários foram escritros utilizando o framework [Jasmine][jasmine] e são executados utilizando o [Karma Test Runner][karma].

* O arquivo de configuração do karma está localizado em `test/karma.conf.js`
* Os testes unitários estão localizados em `test/unit/`.

A maneira mais fácil de executar os testes unitários é através do comando pré-configurado:

```
npm test
```

O script irá iniciar o karma test runner e rodar os testes unitários. Após o término da execução, o Karma ficará aguardando mudanças tanto em arquivos da aplicação quanto em arquivos de testes. Sempre que uma mudança ocorrer, os testes serão re-executados automaticamente. Dessa forma, o desenvolvedor recebe um feedbadk instantâneo caso alguma funcionalidade tenha sido quebrada.

Caso você queira executar os testes apenas uma vez e terminar o processo, o seguinte comando deve ser executado:

```
npm run test-single-run
```


### Testes de Aceitação

Os testes de aceitação também são escritos utilizando o framework [Jasmine][jasmine]. Tais testes são executados através do Protractor, um framework para execução de testes ponta a ponta para aplicativos desenvolvidos em AngularJS.

* O arquivo de configuração do protractor está localizado em `test/protractor-conf.js`
* Os testes de aceitação estão localizados em `test/e2e/`

Protractor simula a interação que um usuário final teria com a aplicação através de um navegador. Portanto, para que os testes possam ser executados, a aplicação deve estar rodando:

```
npm start
```

O protactor depende do WebDriver. Portanto, antes de ser capaz de executar os testes de aceitação, terá que instalar essa dependência atrvés do seguinte comando:

```
npm run update-webdriver
```

Agora que a aplicação já está sendo servida e pode ser acessada através da URL `http://localhost:8000/app/index.html`, os testes de aceitação podem finalmente ser executados através do seguinte comando:

```
npm run protractor
```


##Para continuar os estudos

http://docs.angularjs.org/guide : Angular official documentation, it used to be very poor with very simples examples but is getting better in content although still using the same basics examples.

https://github.com/angular/angular.js/wiki : Very good “articles" to understand better what angular is doing under the hood, like managing scopes and directives.

http://www.thinkster.io/pick/GtaQ0oMGIl: "A Better Way to Learn AngularJS” : Very nice website that puts together a lot of good resources to learn AngularJs from scratch.

http://www.youtube.com/angularjs: AngularJs official youtube channel where they share and live-stream their presentations.

https://egghead.io/ : Videos with very simple explanation of the angular world such as directives, scope, controllers, very simple to start to understand what angular can do for you but no how it does it.

http://joelhooks.com/ :  Blog where you can find some very interesting articles about AngularJs such as "Modeling Data and State in Your AngularJs Application”

AngularJs (O'Reilly, Brad Green & Shyam Seshadri): Nice book to go deeper into the AngularJs concepts and what it has to offer.

Javascript: the good parts (O'Reilly, Douglas Crockford)

## Contato
rmartins@thoughtworks.com

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: http://karma-runner.github.io
[http-server]: https://github.com/nodeapps/http-server
[windows-error]: http://stackoverflow.com/questions/25093276/nodejs-windows-error-enoent-stat-c-users-rt-appdata-roaming-npm