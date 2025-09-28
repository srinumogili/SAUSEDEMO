import { BaseMethods } from "../Pages/BaseMethods";
const basemethod= new BaseMethods();
import { Login } from "../Pages/Login";
const login= new Login()

describe('Verify the end to end Sause demo order', () => {
beforeEach(() => {
  login.Login()
});

  it('Verify the user is able to place the Sauce order', () => {
  
  basemethod.endtoendorder();

})
})