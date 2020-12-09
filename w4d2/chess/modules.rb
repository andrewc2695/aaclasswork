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
    end
    
end

module Stepable

end