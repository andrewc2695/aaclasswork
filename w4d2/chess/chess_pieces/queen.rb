require_relative "../modules"
require_relative "../piece"
class Queen < Piece
    include Slideable
    def symbol
        return :♕
    end

    private
    def move_dirs
        return CARDINAL_DIRS + INTERCARDINAL_DIRS
    end
end