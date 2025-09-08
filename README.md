# Example Test Automation Framework

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Manishkapoor2002/web-testing-automation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd web-testing-automation
   ```

3. Install dependencies:
   ```bash
   mvn install
   ```

4. Run tests:
   ```bash
   mvn test
   ```

## Branch Naming Conventions
- Feature branches: `feature/<description>`
- Bugfix branches: `bugfix/<description>`
- Hotfix branches: `hotfix/<description>`

## PR Checklist
- [ ] Code compiles without errors
- [ ] Tests pass successfully
- [ ] Code follows SOLID principles
- [ ] No duplicate code
- [ ] Meaningful commit messages

## Extending the Framework
To add new test cases:
1. Create new Page classes for UI interactions.
2. Create new API classes for API interactions.
3. Add new Test classes in `src/test/java/com/example/tests`.
4. Update `testng.xml` to include new test classes.

For detailed documentation, refer to [TestNG Documentation](https://testng.org/doc/).

## Allure Reporting
To generate Allure reports:
```bash
mvn allure:serve
```
