const USERS = 'users';
const ADMIN = 'admin@admin.com';
const ADMIN_PASSWORD = 'admin123';
const TEST_USER = 'test@test.com';
const TEST_USER_PASSWORD = 'test1234';

export default class Authentication {
  constructor() {
    this.users = JSON.parse(localStorage.getItem(USERS)) ?? [];
    this.admin = this.getUser(ADMIN) ?? this.createAdmin();
    this.activeUser = this.users.find((user) => user.isLoggedIn) ?? { username: '', password: '' };

    if (!this.getUser(TEST_USER)) this.createTestUser();
  }

  createAdmin = () => {
    const admin = { username: ADMIN, password: ADMIN_PASSWORD, isLoggedIn: false };
    this.saveUser(admin);
    return admin;
  };

  createTestUser = () => {
    const testUser = { username: TEST_USER, password: TEST_USER_PASSWORD, isLoggedIn: false };
    this.saveUser(testUser);
    return testUser;
  };

  getUser = (username) => this.users.find((user) => user.username === username);

  saveUser = (user) => {
    const updatedUsers = [...this.users, user];
    this.users = updatedUsers;
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  logInUser = (username) => {
    this.users.forEach((user) => {
      if (user.username === username) {
        user.isLoggedIn = true;
        this.activeUser = user;
        return;
      }
    });
    localStorage.setItem(USERS, JSON.stringify(this.users));
  };

  logOutUser = () => {
    this.users.forEach((user) => {
      if (user.username === this.activeUser.username) {
        user.isLoggedIn = false;
        this.activeUser = { username: '', password: '' };
        return;
      }
    });
    localStorage.setItem(USERS, JSON.stringify(this.users));
  };

  doesUserExist = (username) => {
    console.log(username);
    const userExists = this.users.find((user) => user.username === username);

    return userExists ? true : false;
  };

  isValidLogin = ({ username, password }) => {
    const userFound = this.users.find((user) => user.username === username && user.password === password);
    return userFound ? true : false;
  };

  isAdmin = ({ username, password }) => username === this.admin.username && password === this.admin.password;
}
