class Enrollment < ApplicationRecord
    has_many :courses,
        primary_key: :id,
        foreign_key: :prereq_id,
        class_name: :Course

    hash_many :students,
        primary_key: :id,
        foreign_key: :student_id,
        class_name: :User
end
