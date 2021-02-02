json.array! @guests do |guest|
  json.partial! guest, as: :guest
end