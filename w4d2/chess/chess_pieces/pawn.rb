require_relative "../modules"
require_relative "../piece"

class Pawn < Piece
    include Slideable
    def symbol
        return :♙
    end

    def moves
        movement = []
        movement += forward_steps + side_attacks
        movement = movement.select { |elem| @board.valid_moves?(elem) }
    end

    private
    
    def at_start_row?
        if @color == 'white'
            return true if @pos[0] == 1
        else
            return true if @pos[0] == 6
        end
        false
    end

    def forward_dir
        # if @color == 'white'
        #     return 1
        # else
        #     return -1
        # end
        color == 'white' ? 1 : -1
    end

    def forward_steps
        if at_start_row?
            return [
            [(@pos[0] + (1 * forward_dir)), @pos[1]],
            [(@pos[0] + (2 * forward_dir)), @pos[1]]
            ]
        end
        [(@pos[0] + (1 * forward_dir)), @pos[1]]
    end

    def side_attacks
        move_array = []
        move_1 = @pos[0] + 1, @pos[1] + forward_dir
        move_2 = @pos[0] -1, @pos[1] + forward_dir
        attk_moves = [move_1, move_2]

        attk_moves.each do |diag_pos|
            next if !@board.valid_moves?(diag_pos) || empty?(diag_pos)
            if @board.chess_board[diag_pos[0]][diag_pos[1]].color != @color
                move_array << diag_pos
            end
        end

        move_array
    end
end