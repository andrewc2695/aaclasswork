
require_relative "../modules"
require_relative "../piece"
class King < Piece
    include Stepable
    def symbol
        return :♔
    end

    private
    def move_diffs
        return CARDINAL_DIRS + INTERCARDINAL_DIRS
    end
end