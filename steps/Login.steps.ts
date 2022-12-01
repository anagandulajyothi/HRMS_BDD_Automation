import { Given,When,Then } from "@cucumber/cucumber";
import { Login } from '../pages/Login.page'

const login = new Login()
Given('Login to HRMS',async()=>{
    await login.fillUsername('dotnetemployee@intonenetworks.com')
    await login.fillPassword("Password1!")
    await login.clickLogin()
    await login.Addskill_cancel()
});