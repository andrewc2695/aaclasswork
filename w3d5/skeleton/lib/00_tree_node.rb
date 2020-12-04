require "byebug"

class PolyTreeNode

    def initialize(value)
        @parent = nil
        @children = []
        @value = value
    end

    def parent
        @parent
    end

    def children
        @children
    end

    def value
        @value
    end

    def parent=(node_instance)
        if @parent == nil
            @parent = node_instance
             if !@parent.children.include?(self)
                node_instance.children << self 
             end
        else
            old_parent = @parent.dup
            old_parent.children.delete(self)
            if !@parent.children.include?(self) && node_instance != nil
                @parent = node_instance
                node_instance.children << self 
            elsif node_instance == nil
                @parent = node_instance
            end
        end
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        child_node.parent = nil
    end

    def dfs(target_value)
        # debugger
        return self if self.value == target_value
        @children.each do |child|
            memo = child.dfs(target_value)
            return memo if memo != nil 
        end
        nil#if @children.empty?
    end

    def bfs(target_value)
        arr = []
        arr << self
        while arr.length > 0
            if arr[0].value == target_value
                return arr[0]
            else
                arr += arr[0].children
                arr.shift
            end
        end
        nil
    end

end

