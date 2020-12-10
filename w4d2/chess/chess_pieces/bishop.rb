require_relative "../modules"

class Bishop < Piece
    include Slideable
    def symbol
        return :♗
    end

    private
    def move_dirs
        return INTERCARDINAL_DIRS
    end
end