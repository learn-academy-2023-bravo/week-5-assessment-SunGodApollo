# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: calling super is done in a child class. The child class calls super (parent class) to borrow its parameters, the child class can then use its own paramenters, and the borrowed parameters from its parent class by calling super() in the initializer method

Researched answer: we can call super in two ways. We can use super with no parameters passed, this results in the child class passing up only the parameters that the parent class already has. Then we can use super with arguments, such as super(arg1, arg2). This is then passing those args from the child to the parent class, not just the default args that were already included in the parent class.


2. What is a gem?

Your answer: a gem is an extension of sorts for the ruby coding language. It is a package that contains code that can then be executed and used by the user if they desire to use it or need it.

Researched answer: a gem is a library of data and code that can be used by a developer in their own program. One example of a gem is RSpec. This gem allows developers to test their ruby program's code to make sure that it is working properly.



3. What is a relational database? Are there other kinds of databases?

Your answer: a relational database is a database that is organized into a table of sorts and can be accessed by the user by using certain keywords to access specific data within that table. One example of a relational database is PostgreSQL.

Researched answer: A relational database is a collection of information with predefined relationships. This information is made easier to be ready by a human becaused it's organized in a table and it is organized in a column-row format. All tables in a relational database have an attribute known as the primary key. The primary key is a unique identifier of the row being referenced.



4. What are primary keys? Why are they important?

Your answer: Primary keys are the unique identifiers of rows in a relational database. Users can access these rows by referencing the primary keys. If a user wishes to, one can then create a different talbe by referencing a foreign key.

Researched answer: Primary keys are important because they are the unique identifier of items in a table inside of a relational database. It is important because we can access specific data in a databse by referencing these primary keys. For example, a customer ID in an ordering website can be the primary key; no other customer is going to have the same primary ID.



5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: I do not exactly recall what the verbs are without referring to my notes because there are quitea few of them. However, I do remember that they all correspond similarly to each of their correspoing CRUD actions. 

Researched answer: Get is used for retrieving data from a server. It corresponds to the Read action in CRUD. Post is used for sending data to a server to create a new resource. This goes with the Create action in crud. Put is used to send data to a server to update an existing resource. This corresponds with the Update action in crud. Delete is used for requesting the deletion of something in a server. This corresponds to the Delete in CRUD. Finally, there's Patch. Patch sends partial updates, unlike Put, which replaces an entire resource. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: validations ensure that only valid data is saved into database. Users can create their own validation methods as well. 

2. RESTful routes: an attempt to bring operations that cannot be applied and turns them into HTTP requests

3. ERB: erb stands for embedded ruby. AKA templated ruby; this is a file structure that allows coding in HTML and drop Ruby code into the view file. 

4. Params:  method that returns an action controller object. Behaves like a has. Params access form and URL query data. 

5. API: API stands for application programming interface. It is a set of definitions and protocls for building the software for an application. 
