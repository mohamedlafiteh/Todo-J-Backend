# Part-1

> Requirements :-

- [x] Create a lambda function in nodejs, that echoes the text "HelloWorld"
- [x] Create an APIGateway via the console using the attached petstore swagger definition in the email.

# Task-1

# The steps I followed :-

    1. Navigated to services  > lambda function > created function
    2. Gave the function description name
    3. Created new role with the same prefix(segregate it from the rest of AWS)
    4. I didn't choose the template for the role
    5. In the code editor exports.handler = async (event) => {
    const response = { statusCode: 200,
        body: JSON.stringify('Hello world!'),    };
    return response;};
    6. Created new test event with an empty request object because the function did not depend on the event
    7.  I ran the new test event and obtained the following result Response:

{
"statusCode": 200,
"body": "\"Hello world!\""
}
Request ID:
"864746d2-159a-4a7f-b904-5b77969ce521"
Function Logs:
START RequestId: 864746d2-159a-4a7f-b904-5b77969ce521 Version: \$LATEST
END RequestId: 864746d2-159a-4a7f-b904-5b77969ce521

REPORT RequestId: 864746d2-159a-4a7f-b904-5b77969ce521 Duration: 9.31 ms Billed Duration: 100 ms Memory Size: 128 MB Max Memory Used: 75 MB Init Duration: 162.99 ms.```

**Because the duration was 9.31 ms, and the function does not depend on the input it safe to cap execution duration to 1 s instead of the default 3s
I did testing running the function many times and checked the results of the duration time, to make a decision about the right time that should be used to execute the function, limit the time that function could go on so we don't pay more than we should.**

---

# Task-2

# The steps I followed :-

1. Search for api getway
2. Create API
3. Then choose the third option  Import from Swagger or Open API 3
4. Post the swagger data in
5. The end point type regional
6. Then press import
7. In the integration request
8. Chose lambda function and region and myhellow world
9. Back to action in resources then choose the deploy api and give it name prod then deploy
10. I received url and when I paste it in the browser I get error “internal error”
11. Great resource from the action with name of the function
12. Create method from the action get
13. Deploy api to prod

---

# Part -2

> Language Requirements :-

- [x] NodeJS (express or any framework you like)
- [x] Tests in Jest
- [x] ESLint - airbnb style guide

> Project requirements :-

- [x] All your code must be your own
- [x] Your project will be hosted on Github
- [x] You will plan the project on Github Project Boards
- [x] Write a short page of requirements for the project.
- [x] Write each resource / endpoint as a feature, document these features on your project board
- [x] Create a branch for each feature, create a pull request / merge for each branch.
- [x] Consider writing each test cases ( or a group of test cases ) as a card on your project board.
- [x] You do not have to use a database - using json objects or files is acceptable.

---

# The steps I followed :-

1. Started the project by creating new folder command -mkdir
2. Initialized git repository, command- git int.

3. Then installed packages command- npm install.

4. Then installed all the dependencies, Express, nodemon, cors,body-parser.command- npm install express nodemon cors body-parser.

5. Then installed jest for testing command- npm install jest supertest.

6. Created three files app.js,task service and app.test.js

7. Created new branch for get end point command- git checkout -b get-end-point

8. Created jest test for get end point and add handler function and validation.

9. Added ,committed and pushed all the new changes to the origin repository and issue pull request to compare the changes.

10. Merged the branch and in the master branch terminal command- git pull.

11. Created new branch for post end point and repeat the same procedures.

12. Started refactoring the endpoints and testing.

13. Created a branch and extracted the update task and test into different folder.

14. Created a branch and extracted, created task and test into different folder.

15. Created a branch and extracted, updated task partially and test into different folder.

16. Created a branch and extracted, deleted task and test into different folder.

17. Created a branch and extracted get tasks and test into different folder.

18. Created a branch and extracted get task by ID and test into different folder.


    # Challenges :-

- Solve git conflict.

- Install eslint.

- Jet testing pure functions.

- Understanding the difference between Patch and Update.

- Create API GATEWAY.
