require_relative "piece"
require_relative "piece_require"
require "byebug"

class Board
    attr_reader :chess_board
    
    def initialize(chess_board)
        @chess_board = Array.new(8){Array.new(8, nil)}
        @chess_board.each.with_index do |row, idx1|
            if idx1 < 2 || idx1 > 5
                row.each.with_index do |square, idx2|
                    row[idx2] = Pawn.new('white', self, [idx1, idx2])
                end
            end
        end
        render
    end
        #move_piece([0,4], [2,4])
    def move_piece(start_pos, end_pos)
        # debugger
        current_piece = self.[](start_pos)
        
        raise StandardError.new "Start position empty" if !current_piece
        raise "Out of bounds" if !(valid_moves?(end_pos))

        self[end_pos] = current_piece
        self[start_pos] = nil
        render
    end
    
    def valid_moves?(pos)
        return false if pos[0] > 7 || pos[1] > 7 
        return false if pos[0] < 0 || pos[1] < 0 
        true
    end
    
    def render
        pretty_arr = []
        @chess_board.each do |rows|
            pretty_row = []
            rows.each do |square|
                if square != nil
                    pretty_row << square.to_s
                else
                    pretty_row << nil
                end
            end
            pretty_arr << pretty_row
        end
        pretty_arr.each do |p_rows|
            p p_rows
        end
    end

    def [](pos)
        row, col = pos[0], pos[1]
        @chess_board[row][col]
    end

    def []=(pos, piece)
        row, col = pos[0], pos[1]
        @chess_board[row][col] = piece
    end
end