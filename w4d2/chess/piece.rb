class Piece
    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end
    
    def to_s
        return "p"
    end

    def empty?(pos)
        row, col = pos[0], pos[1]
        return false if @board[row][col] != nil
        true
    end

    def valid_moves
        #do later
        #array of all possible moves uses empty? to check if squares are empty
        #if square isnt empty what color is the piece?
        #check move directions from piece class
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