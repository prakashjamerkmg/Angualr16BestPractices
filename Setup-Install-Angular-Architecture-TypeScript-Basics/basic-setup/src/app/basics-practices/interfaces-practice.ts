import { Injectable } from '@angular/core';
import { User } from './interfaces/user';
import { UserProfile } from './interfaces/userProfile';



  const bob: User = {
      id: 1,
      name: "Bob",
      status: "active"
    };

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(){
        console.log("blob1", bob);
        bob.name = "John";
        bob.status = "inactive";
        bob.id = 2;
        console.log("blob 2", bob);
        this.fetchUserById(1)
    }

  
  async fetchUserById(id: number): Promise<UserProfile> {
    console.log("blob1", bob);
    bob.name = "John 1";
    bob.status = "inactive";
    bob.id = 3;
    console.log("blob 3", bob);
    // Simulate async API call
    return new Promise(resolve =>
      setTimeout(() => resolve({ id, username: 'demo_user' }), 500)
      
    );
  }
}