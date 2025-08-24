# Sorteio de amigo secreto

Projeto simples de front-end para gerenciar lista de amigos e realizar um sorteio entre eles. Um "Amigo Secreto" (ou "Amigo Oculto") rápido e fácil.

O objetivo é aplicar conceitos de lógica de programação, manipulação do DOM e interatividade com o usuário usando HTML, CSS e JavaScript puro (Vanilla JS).

## Funcionalidades

-   **Adicionar amigos**: inserir nomes numa lista.
-   **Validação de entrada**: impede que nomes vazios ou contendo apenas espaços sejam adicionados.
-   **Exibição em tempo real**: lista atualizada instantaneamente a cada adição.
-   **Sorteio aleatório**: sorteia um nome da lista de participantes.
-   **Validação de sorteio**: sorteio apenas se houver pelo menos um nome na lista.

## Tecnologias e dependências

Tecnologias web padrão, não possui dependências externas.

-   **HTML5**: estrutura da página.
-   **CSS3**: estilização básica.
-   **JavaScript (ES6+)**: lógica de programação e interatividade.

A única "dependência" é um **navegador web moderno** com suporte JavaScript ES6.

## Instalação e execução

Não requer um servidor, apenas:

1.  **Obtenha os arquivos**: baixe ou clone todos os arquivos do projeto (`index.html`, `script.js`, `style.css`, etc.).
2.  **Mantenha a estrutura**: certifique-se de que todos os arquivos estejam na mesma pasta/diretório.
3.  **Abra no Navegador**: abra o arquivo `index.html` diretamente no seu navegador de preferência.

E pronto!

## Solução de problemas 

**P: Cliquei em "Adicionar" sem digitar um nome e um alerta apareceu.**
**R:** É o comportamento esperado. A aplicação valida se o campo de nome não está vazio para garantir que apenas nomes válidos sejam adicionados à lista.

**P: A lista de amigos some quando eu recarrego a página.**
**R:** Sim, isso é esperado. O projeto armazena os nomes em uma variável JavaScript que é reiniciada toda vez que a página é recarregada. Não há persistência de dados (como `localStorage` ou um banco de dados).

**P: O amigo que foi sorteado continua na lista para os próximos sorteios?**
**R:** Sim. O sorteio atual apenas **seleciona e exibe** um nome aleatório, mas não o remove da lista de participantes.

**P: A lista de amigos não está aparecendo ou atualizando na tela.**
**R:** Isso geralmente indica um erro no JavaScript.
    1.  Abra as **Ferramentas de Desenvolvedor** do seu navegador (geralmente pressionando a tecla `F12`).
    2.  Vá para a aba **"Console"**.
    3.  Verifique se há alguma mensagem de erro em vermelho. Ela geralmente indica a linha e o arquivo onde o problema ocorreu.
    4.  Certifique-se de que os IDs dos elementos no `script.js` (`getElementById`) correspondem exatamente aos IDs no `index.html`.
