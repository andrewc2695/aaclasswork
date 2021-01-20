class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();

  }

  bindEvents() {
    .on("click", "li", ( e => {
      this.game.playMove();
    }))
  }

  makeMove($square) {}

  setupBoard() {
    const $ul = $('<ul>');
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        let $li = $('<li>');
        $li.data("pos", [i, j]);
        
        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }

}



module.exports = View;
