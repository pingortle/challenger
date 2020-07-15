class CreateChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :challenges do |t|
      t.string :title
      t.timestamp :started_at

      t.timestamps
    end
  end
end
