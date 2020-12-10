require_relative "../modules"

class Rook < Piece
    include Slideable
    def symbol
        return :♖
    end

    private
    def move_dirs
        return CARDINAL_DIRS
    end
end