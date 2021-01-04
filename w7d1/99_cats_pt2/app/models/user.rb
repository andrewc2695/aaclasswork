class User < ApplicationRecord
    validates :username, :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    after_initialize :ensure_session_token

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||=SecureRandom::urlsafe_base64
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def find_by_credentials(username, pw)
        user = User.find_by(username: username)
        if user && user.is_password?(pw)
            user
        else
            nil
        end
    end
end
