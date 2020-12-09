require_relative "../modules"
require_relative "../piece"
class Knight < Piece
    include Stepable
    def symbol
        return :♘
        #colorize call cololr
    end

    private
    def move_diffs
       return knight_moves = [
            [1, 2],
            [2, 1],
            [1,-2],
            [2,-1],
            [-1, 2],
            [-2, 1],
            [-1, -2],
            [-2, -1]
        ]
    end
end