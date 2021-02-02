json.partial! @guest, as: :guest

json.gifts do 
    json.array! @guest.gifts do |gift|
        json.extract! gift, :title, :description
    end
end

#syntactic sugar way
# json.gifts do 
#     json.array! @guest.gifts, :title, :description
# end
