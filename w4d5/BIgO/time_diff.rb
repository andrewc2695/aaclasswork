
def my_min(list)
    min_num = nil
    list.each do |ele|
        temp_num = ele
        list.each do |ele2|
            if ele2 < temp_num
                min_num = ele2
            end
        end
    end
    min_num
end
#O(n^2) time

def my_min2(list)
    min_num = list.first
    list.each do |ele|
        min_num = ele if ele < min_num
    end
    min_num
end
#O(n) time

def largest_contiguous_subsum(array)
    subs = []
    (0...array.length - 1).each do |i|
        (i..array.length - 1).each do |i2|
            subs << array[i..i2]
        end
    end #(n^2)
    subs.map {|sub| sub.inject(:+)}.sort[-1] #(3n?)
end

# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum(list)
#O(n^3) or O(n^2)
