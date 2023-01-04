import { Given,Then} from "@cucumber/cucumber";
import { Login } from '../pages/Login.page'
const login = new Login()

Given('Login to HRMS {string} username and password {string}',async(username:string,password:string)=>{
await login.fillUsername(username)
await login.fillPassword(password)
await login.clickLogin()
});
Then('Clear Username and Password',async()=>{
await login.clearusername()
await login.clearpassword()
})
Then('Add skill',async()=>{
await login.Addskill_cancel()
})
Then('Relogin {string} username and password {string}',async(username:string,password:string)=>{
await login.Profile()
await login.Logout()
await login.fillUsername(username)
await login.fillPassword(password)
await login.clickLogin()
})
