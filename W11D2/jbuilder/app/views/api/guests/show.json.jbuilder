# json.extract! @guest, :name, :age, :favorite_color 
json.partial! @guest, as: :guest

# json.guests do |guest|
#     json.extract! guest.gifts  
# end

json.gifts do 
    json.title gift.title
    json.description gift.description
end
