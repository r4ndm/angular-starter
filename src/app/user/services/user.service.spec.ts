import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  it('should create user service', () => {
    expect(userService).toBeTruthy();
  });

  it('has users', () => {
    const users = userService.getUsers();
    expect(users.length).toBeGreaterThan(0);
  });

  it('has user', () => {
    const users = userService.getUsers();
    const userCount = users.length;

    for (let userId = 1; userId <= userCount; userId++) {
      const user = userService.getUser(userId);
      expect(user).toBeTruthy();
      expect(user.id).toBe(userId);
    }
  });
});
