class Post < ApplicationRecord
  before_save :default_values
  def default_values
    self.upvote_count ||= 0 # note self.status = 'P' if self.status.nil? might be safer (per @frontendbeauty)
  end

  # def increment(attribute, by = 1)
  #   self[attribute] ||= 0
  #   self[attribute] += by
  #   self
  # end
end
