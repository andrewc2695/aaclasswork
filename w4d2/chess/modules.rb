require "byebug"

module Slideable
    CARDINAL_DIRS = [[0,1],[1,0],[0,-1], [-1,0]]
    INTERCARDINAL_DIRS = [[1,1],[1,-1],[-1,-1],[-1,1]]

    def horizontal_dirs
        CARDINAL_DIRS
    end

    def diagonal_dirs
        INTERCARDINAL_DIRS
    end
    
    def moves
        moves_array = []
        debugger
        move_dirs.each do |dir|
          moves_array += grow_unblocked_moves_in_dir(dir[0], dir[1])
        end
        moves_array
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
            position = [(position[0] + dx), (position[1] + dy)]
            break if @board.valid_moves?(position) == false
            if empty?(position)
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
    CARDINAL_DIRS = [[0,1],[1,0],[0,-1], [-1,0]]
    INTERCARDINAL_DIRS = [[1,1],[1,-1],[-1,-1],[-1,1]]
    def moves
        unblocked_moves = []
        move_diffs.each do |dir|
            position = @pos[0], @pos[1]
            position = [(position[0] + dir[0]), (position[1] + dir[1])]
            if @board.valid_moves?(position) == true
                if empty?(position)
                    unblocked_moves << position
                else
                    if @board[position].color != @color 
                        unblocked_moves << position
                    end
                end
            end
        end
        unblocked_moves
    end

    private
    def move_diffs
        # king_moves = CARDINAL_DIRS + INTERCARDINAL_DIRS
        # knight_moves = [
        #     [1, 2],
        #     [2, 1],
        #     [1,-2],
        #     [2,-1],
        #     [-1, 2],
        #     [-2, 1],
        #     [-1, -2],
        #     [-2, -1]
        # ]
    end
end