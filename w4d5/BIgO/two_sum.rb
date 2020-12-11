def bad_two_sum?(array, target)
    (0...array.length - 1).each do |i|
        (i + 1..array.length - 1).each do |j|
            return true if array[i] + array[j] == target
        end
    end
    false
end
#O(n^2)

# arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 6) 
# p bad_two_sum?(arr, 10)

def okay_two_sum?(array, target)
    sorted = array.sort #O(nlogn)
    # sorted.each do | |
    i = 0
    j = array.length - 1
    while i < j #O(n) or O(2n)
        case array[i] + array[j] <=> target
        when 0
            return true
        when -1
            i += 1
        when 1
            j -= 1
        end
    end
    false
end

arr = [1, 0, 7, 5]
p okay_two_sum?(arr, 6) 
p okay_two_sum?(arr, 10)

