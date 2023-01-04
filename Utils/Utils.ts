import { expect } from "@playwright/test";
import { page } from "../steps/setup";

export class Utils {

    async assertSucessMsg(message: string) {
     expect(page.locator('//div[@id="SucessMsg"]')).toContainText(message)
    }
    async assertapprovalsuccessmsg(message: string) {
     expect(page.locator('//div[@id="toast-container"]')).toContainText(message)
    }
    async assertsuccessmsg(message: string) {
     expect(page.locator('//div[@id="toast-container"]')).toContainText(message)
    }
    async assertsucessMsg(message: string) {
     expect(page.locator('//div[@id="AssetSucceMsg"]')).toContainText(message)
    }

}