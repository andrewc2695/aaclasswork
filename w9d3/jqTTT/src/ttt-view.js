class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", ( e => {
      const $square = $(e.currentTarget);
      this.makeMove($square);
    }))
  }

  makeMove($square) {
    // debugger;
    const pos = $square.data('pos')
    const currentPlayer = this.game.currentPlayer;
    try{
      this.game.playMove(pos);
    }catch(err){
      alert("Invalid move");
      return
    }

    if (currentPlayer === "x") {
      $square.addClass("x");
    } else {
      $square.addClass("o");
    }

  }

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
