class Board
   def initialize(pos)
        @grid = Array.new(8) {Array.new(8)} 
    end

    def grid
        @grid
    end

    def [](pos)
        row, col = pos
        @grid[pos]
    end

    def []=(pos, move) 
        row, col = pos
        @grid[pos] = move
    end

end