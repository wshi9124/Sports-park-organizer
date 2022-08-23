class CreateUserEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :user_events do |t|
      t.integer :user_id
      t.integer :event_id
      t.boolean :admin
      t.string :status

      t.timestamps
    end
  end
end
