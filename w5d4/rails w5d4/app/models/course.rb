class Course < ApplicationRecord
    belongs_to :enrollment.
        primary_ley: :id,
        foreign_key: :prereq_id,
        class_name: :Enrollment

    belongs_to :instructor,
        primary_ley: :id,
        foreign_key: :instructor_id,
        class_name: :User

     belongs_to :student,
        primary_ley: :id,
        foreign_key: :student_id,
        class_name: :User
end
