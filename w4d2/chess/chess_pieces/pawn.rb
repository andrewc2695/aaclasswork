require_relative "../modules"
require_relative "../piece"

class Pawn < Piece
    include Slideable
    def symbol
        return ♙
    end

    def moves

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
            [(@pos[0] + (1 * forward_dir)), @pos[1]]
            [(@pos[0] + (2 * forward_dir)), @pos[1]]
            ]
        end
        [(@pos[0] + (1 * forward_dir)), @pos[1]]
    end

    def side_attacks
        sides = [[1,1], [1,-1]]
    end
end