require_relative "../skeleton/lib/00_tree_node.rb"
require "byebug"

class Knight
    def self.root_node
        starting_node = PolyTreeNode.new(@starting_pos) #might need "@"
    end
    #class methond self.valid_moves

    def self.valid_moves(pos)
        #finds all postions from current
        # debugger
        possible_positions = []
        moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]]
         moves.each do |move|
            # if ((pos[0] + move[0] <= 7)  &&  (pos[1] + move[1] <= 7)) && ((pos[0] + move[0] >= 0)  &&  (pos[1] + move[1] >= 0))
            possible_positions << [(pos[0] + move[0]), (pos[1] + move[1])]
        end
        possible_positions.select {|move| Knight.valid_move?(move)} ##write valid move
    end

     def self.valid_move?(move)
        return true if ((move[0] <= 7)  &&  (move[1]  <= 7)) && ((move[0] >= 0)  &&  (move[1] >= 0))
        false
    end

    def initialize(starting_pos)
        @knight = knight
        @starting_pos = starting_pos
        @considered_pos = [starting_pos]
        Knight.root_node
    end

    
    def knight
        @knight
    end

    def starting_pos
        @starting_pos
    end

    def new_move_positions(current_pos)
        new_pos = Knight.valid_moves(current_pos).select do |move|
                !(@considered_pos.include?(move))
            end
        @considered_pos += new_pos
        new_pos
    end

    #part 1 phase 2

    def build_move_tree
        move_q = []
        #run thru new pos array,
        #instantiate new trees from each move
        #go thru bfs find new moves repeat

    end

end


# k = Knight.new([0,0])
Knight.valid_moves([0,0])