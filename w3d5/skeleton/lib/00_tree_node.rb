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
        #value at node
    end

    def parent=(node_instance)
        @parent = node_instance
        node_instance.children << self
    end

end