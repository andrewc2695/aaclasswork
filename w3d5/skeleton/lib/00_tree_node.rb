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
        return self if self.value == target_value
        return nil if @children.empty?
        @children.each do |child|
            memo = child.dfs(target_value)
            
        end
    end

end

