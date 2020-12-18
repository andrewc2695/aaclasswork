class ShortenedURL < ApplicationRecord
    validates :long_url, presence: true, uniqueness: true

    def self.random_code(:long_url)
        SecureRandom.urlsafe_base64(:long_url)
    end
end