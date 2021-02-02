# json.extract! @guest, :name, :age, :favorite_color 
json.partial! @guest, as: :guest
json.gifts do
    json.extract! :title, :description
end