class CreateEventMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :event_messages do |t|
      t.text :content
      t.integer :user_id
      t.integer :event_id

      t.timestamps
    end
  end
end
