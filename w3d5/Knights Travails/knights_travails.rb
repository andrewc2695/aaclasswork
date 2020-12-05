require_relative "../skeleton/lib/00_tree_node.rb"

class Knight
    def self.root_node
        starting_node = PolyTreeNode.new(@starting_pos) #might need "@"
    end
    #class methond self.valid_moves
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

    def new_move_positions(pos)

    end


end


# k = Knight.new([0,0])