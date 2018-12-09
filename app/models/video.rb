class Video < ApplicationRecord
  validates :code, presence: true
  default_scope -> { order(created_at: :desc) }
end
