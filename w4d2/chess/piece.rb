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
        #array of all possible moves uses empty? to check if squares are empty
        #if square isnt empty what color is the piece?
    end

    def pos=(val)
        pos = val
    end

    def symbol
        #color
    end

    def move_into_checl
        #use vaild if opponets king location in valid moves array
    end

end