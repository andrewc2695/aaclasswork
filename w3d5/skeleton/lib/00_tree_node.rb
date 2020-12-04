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
        
        if @parent != nil
            old_parent = @parent
            @parent = node_instance
            if !@parent.children.include?(self)
                node_instance.children << self 
            end
        end
    end

end

