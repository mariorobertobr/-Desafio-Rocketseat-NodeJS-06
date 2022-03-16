import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    
    const newUser = new User();

    

    Object.assign(newUser, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

   

    this.users.push(newUser);

    return newUser;

  }

  findById(id: string): User | undefined {
    // Complete aqui
    const findbyId = UsersRepository.getInstance().users.find(user => user.id === id);
    return findbyId;


  }

  findByEmail(email: string): User | undefined {
      const findByEmail = UsersRepository.getInstance().users.find(user => user.email === email);
      return findByEmail;
      
  }

  turnAdmin(receivedUser: User): User {
    const turnAdmin = UsersRepository.getInstance().users.find(user => user.id === receivedUser.id);

    if (!turnAdmin) {
      throw new Error("User not found");
      

    }
    
    turnAdmin.admin = true;
    turnAdmin.updated_at = new Date();

    return turnAdmin;
  }

  list(): User[] {

    return this.users;
  
  }
}

export { UsersRepository };
