class Piece
    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end
    def to_s
        return "p"
    end

    def empty?
        return false
    end

    def valid_moves
        #do later
    end

    def pos=(val)
        pos = val
    end

    def symbol

    end

end