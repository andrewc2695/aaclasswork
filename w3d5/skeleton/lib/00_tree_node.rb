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

end

