class CreateShortendUrls < ActiveRecord::Migration[5.2]
  def change
    create_table :shortend_urls do |t|
      t.text :long_url, null: false
      t.text :short_url
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :short_url, :long_url, unique: true
  end
end
