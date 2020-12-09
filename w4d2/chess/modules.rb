module Slideable
    CARDINAL_DIRS = [[0,1],[1,0],[0,-1], [-1,0]]
    INTERCARDINAL_DIRS = [[1,1],[1,-1],[-1,-1],[-1,1]

    def horizontal_dirs
        CARDINAL_DIRS
    end

    def diagonal_dirs
        INTERCARDINAL_DIRS
    end
    
    def moves
        moves_array = []
        grow_unblocked_moves_in_dir(dx, dy)
    end

    private
=begin
  - make a current_position = current_x, current,y
  - while current_position != the end position that we want
    - increment/decrement the current_position x/y values until either:
      - we hit the end position
      - we hit a blocked space, in which case, we #break
  - final_position = current_position
=end
    def grow_unblocked_moves_in_dir(dx, dy)
        #piece_move_dirs should return array
        unblocked_moves = []
        position = @pos
        loop do 
            position = [(position[0] + dx, position[1] + dy)]
            break if Board.valid_moves?(position) == false
            if empty?(@board[position]
                unblocked_moves << position
            else
                if @board[position].color != @color 
                    unblocked_moves << position
                end
                break
            end
        end
        return unblocked_moves
    end
end

# if position[0] + dx < 7 && position[0] + dx > 0
#     if position[1] + dy < 7 && position[1] + dx > 0

module Stepable

end