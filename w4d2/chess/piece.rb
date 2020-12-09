require "byebug"

class Piece
    attr_reader :color
    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end
    
    def to_s
        return symbol.to_s
    end

    def empty?(pos)
        #check if different color piece
        row, col = pos[0], pos[1]
        # debugger
        return false if @board.chess_board[row][col] != nil
        #board.chess_board
        true

        # @board[pos].empty?
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