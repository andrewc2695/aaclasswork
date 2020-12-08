 
class Employee
    attr_reader :salary
    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end
 
    def bonus(multiplier)
        return bonus = @salary * multiplier
    end
end
 
class Manager < Employee
    attr_reader :employees
    
    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
        @employees = []
    end
 
    def new_employee(new_worker)
        @employees << new_worker
    end
 
    def bonus(multiplier)
        return multiplier * subordinate_salary
    end
 
    def subordinate_salary
        sub_salary = 0
 
        @employees.each do |worker|
            if worker.is_a?(Manager)
                sub_salary += worker.subordinate_salary
            else
                sub_salary += worker.salary
            end
        end
        sub_salary
    end
end
 
ned = Manager.new('Ned', 'Founder', 1000000, nil)
darren = Manager.new('Darren', 'TA Manager', 78000, ned)
shawna = Employee.new('Shawna', 'TA', 12000, darren)
david = Employee.new('David', 'TA', 10000, darren)
 
ned.new_employee(darren)
darren.new_employee(shawna)
darren.new_employee(david)
 
p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000

