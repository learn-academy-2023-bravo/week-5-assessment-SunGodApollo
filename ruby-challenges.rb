# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# PSEUDOCODE 
    # create a method named new_array
    # input: array, letter
    # Process: 
    # use .select block to filter the words array and return words that include the letter
    # output a new array with the words containing letter argument

def new_array(array, letter)
    array.select do |value|
        value.include?(letter)
    end
end

p new_array(beverages_array, letter_t)




# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

#PSEUDOCODE 
# create a method named no_nested_array
# input: hash
# Process: use .values to access the values of the hash, then use flatten to get rid of nested arrays, then use sort to sort them in alphabetical order.
# output: an array with no nested arrays, in alphabetical order. 

def no_nested_array(hash)
    hash.values.flatten.sort
end

p no_nested_array(us_states)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
 # PSEDUOCODE:
 # creating a class called Bike, use attr_accessor, use model, wheels, and current speed.
 # create bike_info method that interpolates movel, wheels, and current_speed into a sentence.
class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster(amount)
        @current_speed += amount
    end

    def brake(amount)
        if amount < 0
            @current_speed = 0
        else 
            @current_speed -= amount
        end
    end

end
my_bike = Bike.new('Mongoose', 0, 0)
p my_bike.bike_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# PSEUDOCODE:
# see above for 3b part of problem. 
# created methods pedal_faster and brake
# pedal faster takes in parameter amount which is the amount by how much faster the user wants to go, it then adds it to the @currentspeed
# brake method is the same but instead of adding it subtracts the speed from the @current_speed. 


# Expected output example: my_bike.pedal_faster(10) => 10
p my_bike.pedal_faster(10)
# Expected output example: my_bike.pedal_faster(18) => 28
p my_bike.pedal_faster(18)
# Expected output example: my_bike.brake(5) => 23
p my_bike.brake(5)
# Expected output example: my_bike.brake(25) => 0
p my_bike.brake(25)
