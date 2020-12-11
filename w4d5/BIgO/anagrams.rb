def first_anagrams?(str1, str2)
    all_anagrams(str1).include?(str2)
end

def all_anagrams(str)
    return [str] if str.length <= 1
    last_anagrams = all_anagrams(str[0...-1])
    new_anagrams = []
    last_anagrams.each do |anagram|
        (0..anagram.length).each do |i|
            new_anagrams << anagram.dup.insert(i, str[-1])
        end
    end
    new_anagrams
end
#O(n!)

# p first_anagrams?("gizmo", "sally")
# p first_anagrams?("elvis", "lives")