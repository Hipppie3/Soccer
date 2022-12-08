class User < ApplicationRecord
 has_secure_password
 validates :username, uniqueness: true
 validates :username, length: {minimum: 4}

end
