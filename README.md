# Sorteio de amigo secreto

Um projeto simples de front-end desenvolvido para gerenciar uma lista de amigos e realizar um sorteio aleatório entre eles. É uma ferramenta ideal para organizar o "Amigo Secreto" (ou "Amigo Oculto") de forma rápida e fácil.

O principal objetivo é aplicar conceitos de lógica de programação, manipulação do DOM e interatividade com o usuário usando HTML, CSS e JavaScript puro (Vanilla JS).

## 🚀 Funcionalidades

-   **Adicionar Amigos**: Permite inserir nomes numa lista.
-   **Validação de Entrada**: Impede que nomes vazios ou contendo apenas espaços sejam adicionados.
-   **Exibição em Tempo Real**: A lista de amigos na tela é atualizada instantaneamente a cada adição.
-   **Sorteio Aleatório**: Seleciona aleatoriamente um nome da lista de participantes.
-   **Validação de Sorteio**: Garante que o sorteio só possa ser realizado se houver pelo menos um nome na lista.

## 🛠️ Tecnologias e dependências

Construído com tecnologias web padrão, não possui dependências externas.

-   **HTML5**: Para a estrutura da página.
-   **CSS3**: Para estilização básica.
-   **JavaScript (ES6+)**: Para a lógica de programação e interatividade.

A única "dependência" é um **navegador web moderno** (como Google Chrome, Firefox, Microsoft Edge, etc.) que suporte JavaScript ES6.

## 📦 Instalação e execução

Como o projeto não requer um servidor, apenas:

1.  **Obtenha os arquivos**: Faça o download ou clone todos os arquivos do projeto (`index.html`, `script.js`, `style.css`, etc.).
2.  **Mantenha a estrutura**: Certifique-se de que todos os arquivos estejam na mesma pasta/diretório.
3.  **Abra no Navegador**: Abra o arquivo `index.html` diretamente no seu navegador de preferência.

E pronto!.

## ❓ Solução de problemas (FAQ)

Encontrou algum problema? Veja as perguntas mais comuns abaixo.

**P: Cliquei em "Adicionar" sem digitar um nome e um alerta apareceu.**
**R:** Este é o comportamento esperado. A aplicação valida se o campo de nome não está vazio para garantir que apenas nomes válidos sejam adicionados à lista.

**P: A lista de amigos some quando eu recarrego a página.**
**R:** Sim, isso é esperado. O projeto, em sua versão atual, armazena os nomes em uma variável JavaScript que é reiniciada toda vez que a página é recarregada. Não há persistência de dados (como `localStorage` ou um banco de dados).

**P: O amigo que foi sorteado continua na lista para os próximos sorteios?**
**R:** Sim. A funcionalidade de sorteio atual apenas **seleciona e exibe** um nome aleatório, mas não o remove da lista de participantes.

**P: A lista de amigos não está aparecendo ou atualizando na tela.**
**R:** Isso geralmente indica um erro no JavaScript.
    1.  Abra as **Ferramentas de Desenvolvedor** do seu navegador (geralmente pressionando a tecla `F12`).
    2.  Vá para a aba **"Console"**.
    3.  Verifique se há alguma mensagem de erro em vermelho. Ela geralmente indica a linha e o arquivo onde o problema ocorreu.
    4.  Certifique-se de que os IDs dos elementos no `script.js` (`getElementById`) correspondem exatamente aos IDs no `index.html`.
