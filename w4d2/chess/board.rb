require_relative "piece"
require_relative "piece_require"
require "byebug"

class Board
    attr_reader :chess_board
    
    def initialize(chess_board)
        @chess_board = Array.new(8){Array.new(8, NullPiece.instance)}
        starting_board
        render
    end

    def starting_board
        starting_pawns
        starting_others
    end

    def starting_pawns
        @chess_board.each_with_index do |row, idx1|
            if idx1 == 1
                row.each_with_index {|tile, idx2| row[idx2] = Pawn.new('white', self, [idx1, idx2])}
            elsif idx1 == 6
                row.each_with_index {|tile, idx2| row[idx2] = Pawn.new('black', self, [idx1, idx2])}
            end
        end
    end

    def starting_others
        @chess_board.each_with_index do |row, idx1|
            if idx1 == 0
                row.each_with_index do |tile, idx2|
                    if idx2 == 0 || idx2 == 7
                        row[idx2] = Rook.new('white', self, [idx1, idx2])
                    elsif idx2 == 1 || idx2 == 6
                        row[idx2] = Knight.new('white', self, [idx1, idx2])
                    elsif idx2 == 2 || idx2 == 5
                        row[idx2] = Bishop.new('white', self, [idx1, idx2])
                    elsif idx2 == 3
                      row[idx2] = King.new('white', self, [idx1, idx2])
                    else
                      row[idx2] = Queen.new('white', self, [idx1, idx2])
                    end
                end
            elsif idx1 == 7
                row.each_with_index do |tile, idx2|
                    if idx2 == 0 || idx2 == 7
                        row[idx2] = Rook.new('black', self, [idx1, idx2])
                    elsif idx2 == 1 || idx2 == 6
                        row[idx2] = Knight.new('black', self, [idx1, idx2])
                    elsif idx2 == 2 || idx2 == 5
                        row[idx2] = Bishop.new('black', self, [idx1, idx2])
                    elsif idx2 == 3
                      row[idx2] = King.new('black', self, [idx1, idx2])
                    else
                      row[idx2] = Queen.new('black', self, [idx1, idx2])
                    end
                end
            end
        end
    end

    def move_piece(start_pos, end_pos)
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