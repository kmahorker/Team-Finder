class Post < ApplicationRecord
  before_save :default_values
  def default_values
    self.upvote_count ||= 0 # note self.status = 'P' if self.status.nil? might be safer (per @frontendbeauty)
  end


  def self.search(term)
    if term
      where('title LIKE ?', "%#{term}%")
    else
      all
    end
  end


end
