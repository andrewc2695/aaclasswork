require_relative "piece"

class Board
    def initialize(chess_board)
        @chess_board = Array.new(8){Array.new(8)}
        @chess_board[]
    end
        #move_piece([0,4], [2,4])
    def move_piece(start_pos, end_pos)
        current_piece = self[start_pos]
        raise StandardError.new "Start position empty" if !current_piece
        raise "Out of bounds" if end_pos[0] > 7 || end_pos[1] > 7 
        raise "Out of bounds" if end_pos[0] < 0 || end_pos[1] < 0 
    end
end