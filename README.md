# **Jogo Snake em JavaScript com Canvas**

Este jogo de Snake foi criado utilizando JavaScript e Canvas. O objetivo do jogo é controlar a cobra e comer a maior quantidade possível de comida sem colidir com as paredes ou com o próprio corpo da cobra.

## **Classes**

O jogo possui as seguintes classes:

- **`Snake`**: representa a cobra e suas propriedades, como tamanho e direção;
- **`Food`**: representa a comida que a cobra deve comer para crescer;
- **`GraphicServices`**: contém métodos para desenhar elementos gráficos na tela.

## **Controles**

Para movimentar a cobra, utilize as seguintes teclas:

- **ArrowUp**: a cobra se move para cima;
- **ArrowDown**: a cobra se move para baixo;
- **ArrowLeft**: a cobra se move para a esquerda;
- **ArrowRight**: a cobra se move para a direita.

## **Execução**

Para executar o jogo, basta buildar o projeto com o seguinte comando:

**`npm run build`**

Em seguida, abra o arquivo **`index.html`** no seu navegador.

## **Funcionamento**

No arquivo **`index.js`**, há a instanciação das classes **`Snake e`** **`Food.`**

A função **`animate`** é responsável por atualizar a posição da cobra, verificar colisões com a parede ou com a comida, e desenhar todos os elementos na tela. Essa função é chamada repetidamente pelo loop do jogo.

Os eventos de teclado são tratados ouvindo o eventi **`keydown`**, que atualiza a direção da cobra de acordo com a tecla pressionada.

Divirta-se jogando Snake em JavaScript