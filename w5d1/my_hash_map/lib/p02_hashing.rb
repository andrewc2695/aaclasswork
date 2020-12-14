class Integer
  # Integer#hash already implemented for you
end
# index = num
# [1,2,3] => 011223
class Array
  def hash
  end
end
# convert every letter to its alphabet index.
# cat = [3, 1, 20].join => "3120"
class String
  def hash
    alph = ("a".."z").to_a
    num_str = ""
    self.each_char do |char|
      index = alph.index(char)
      num_str += index.to_s
    end
    num_str.to_i.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
