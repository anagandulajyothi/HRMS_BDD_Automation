import { Given,When,Then } from "@cucumber/cucumber";
import { Login } from '../pages/Login.page'
import { testConfig } from "../testConfig";

const login = new Login()
Given('Login to HRMS',async()=>{
 await login.fillUsername(testConfig.techsupportemp)
 await login.fillPassword(testConfig.password)
 await login.clickLogin()
 await login.Addskill_cancel()
});
Given('Relogin',async()=>{
 await login.Profile()
 await login.Logout()
 await login.fillUsername(testConfig.techsupporthodusername)
 await login.fillPassword(testConfig.password)
 await login.clickLogin()
   
})