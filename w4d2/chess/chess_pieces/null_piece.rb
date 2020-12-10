class NullPiece < Piece
    include Singleton
    attr_reader :symbol

    def initialize
        @symbol = " "
        @color = nil 
    end

    def moves
       return []
    end

end