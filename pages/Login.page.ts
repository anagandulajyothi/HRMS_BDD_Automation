
import { page } from '../steps/setup'

 export class Login  {

    async fillUsername(username:string) {
      await page.locator('#Email').type(username)
    }
    async fillPassword(password:string) {
      await page.locator('#Password').type(password)
    }
    async clickLogin() {
      await page.locator('#btnSubmitlogin').click()
    }
    async Addskill_cancel(){
      await page.locator('input:has-text("No")').click()
    }
 }
  




 









