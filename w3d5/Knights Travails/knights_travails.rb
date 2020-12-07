require_relative "../skeleton/lib/00_tree_node.rb"
require "byebug"

class Knight
    def self.root_node(starting_pos)
        starting_node = PolyTreeNode.new(starting_pos) #might need "@"
    end

    def self.valid_moves(pos)
        possible_positions = []
        moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]]
         moves.each do |move|
            possible_positions << [(pos[0] + move[0]), (pos[1] + move[1])]
        end
        possible_positions.select {|move| Knight.valid_move?(move)} 
    end

     def self.valid_move?(move)
        return true if ((move[0] <= 7)  &&  (move[1]  <= 7)) && ((move[0] >= 0)  &&  (move[1] >= 0))
        false
    end

    def initialize(starting_pos)
        @knight = "knight"
        @starting_pos = starting_pos
        @considered_pos = [starting_pos]
        @root = Knight.root_node(@starting_pos)
        self.build_move_tree
    end

    
    def knight
        @knight
    end

    def starting_pos
        @starting_pos
    end

    def considered_pos
        @considered_pos
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
        move_q = [@root]
        while move_q.length > 0
            children = new_move_positions(move_q[0].value)
            children.each do |kid|
                move_q[0].add_child(PolyTreeNode.new(kid))
            end
            move_q += move_q[0].children
            move_q.shift
        end
        nil
    end

    def find_path(end_position)
        move_q = [@root]
        while move_q.length > 0
            if move_q[0].value != end_position
                move_q += move_q[0].children
                move_q.shift
            else
                return trace_path_back(move_q[0])
            end
        end
        nil
    end

    def trace_path_back(node_instance)
        winning_arr = []
        winning_arr.unshift(node_instance)
        until winning_arr[0] == @root
            winning_arr.unshift(winning_arr[0].parent)
        end
        return winning_arr.map {|ele| ele.value}
    end
end
  

k = Knight.new([0,0])
p k.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
p k.find_path([6, 2])  # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]
# k.build_move_tree
# p k.considered_pos.length
# Knight.valid_moves([0,0])








  # def build_move_tree
    #     move_q = [@root]
    #     while move_q.length > 0
    #         if move_q[0].value != target_position ##pseudo
    #             children = new_move_positions(move_q[0].value)
    #             children.each do |kid|
    #                 move_q[0].add_child(PolyTreeNode.new(kid))
    #                 move_q[0].children[-1].parent = move_q[0]
    #             end
    #             move_q += move_q[0].children
    #             move_q.shift
    #         else
    #             winning_arr = []
    #             winning_arr.unshift(move_q)
    #             until winning_arr[0] == @root
    #                 winning_arr.unshift(winning_arr[0].parent)
    #             end
    #             return winning_arr.map {|ele| ele.value}
    #             #whatever it is when we win, the array that gets there. Look at its value, then its parent, then its value, then its parent, etc. to root.
    #         end
    #     end
    #     nil
    # end

    #PHASE 3 #########!!!!!