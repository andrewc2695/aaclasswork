require_relative "../modules"

class Bishop < Piece
    include Slideable
    def symbol
        return :B
    end

    private
    def move_dirs
        return INTERCARDINAL_DIRS
    end
end