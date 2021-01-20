class Board {
    constructor() {
        this.board = new Array()
        for (let i = 0; i <3; i++) {
            this.board.push(["_", "_", "_"])
        }
    }
    print() {
        this.board.forEach (row => {
            console.log(row)
        } )
    }
} 
// const b = new Board()
// b.print()