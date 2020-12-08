require_relative "piece"

class Board
    attr_reader :chess_board
    
    def initialize(chess_board)
        @chess_board = Array.new(8){Array.new(8, nil)}
        @chess_board.each.with_index do |row, idx1|
            if idx1 < 2 || idx1 > 5
                row.each.with_index do |square, idx2|
                    row[idx2] = Piece.new
                end
            end
        end
        render
    end
        #move_piece([0,4], [2,4])
    def move_piece(start_pos, end_pos)
        current_piece = @board[start_pos]

        raise StandardError.new "Start position empty" if !current_piece
        raise "Out of bounds" if end_pos[0] > 7 || end_pos[1] > 7 
        raise "Out of bounds" if end_pos[0] < 0 || end_pos[1] < 0 

        @chess_board[end_pos] = current_piece
        @chess_board[start_pos] = nil
        render
    end

    def render
        @chess_board.each do |rows|
            p rows
        end
    end

    def [](pos)
        @chess_board[pos[0], pos[1]]
    end

    def []=(pos, piece)
        @chess_board[pos[0], pos[1]] = piece
    end
end