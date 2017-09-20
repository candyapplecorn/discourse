class ChangeEmailColumnUser < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :email, :string, default: "default@email.com"
  end
end
