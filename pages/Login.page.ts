
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
    async  Profile(){
      await page.locator('//div[@id="divUserName"]').click()
    }
    async Logout(){
      await page.locator(`//a[normalize-space()="Log Out"]`).click()
  }
}
  




 









