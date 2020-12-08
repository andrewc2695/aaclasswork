
class Employee
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
        return bonus = @employees.flatten.sum * multiplier
    end
end

ned = Manager.new('Ned', 'Founder', 1000000, nil)
darren = Manager.new('Darren', 'TA Manager', 78000, ned)
shawna = Employee.new('Shawna', 'TA', 12000, darren)
