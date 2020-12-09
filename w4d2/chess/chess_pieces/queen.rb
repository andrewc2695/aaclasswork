require_relative "../modules"

class Queen < Piece
    include Slideable
    def symbol
        return :Q
    end

    private
    def move_dirs
        return CARDINAL_DIRS + INTERCARDINAL_DIRS
    end
end