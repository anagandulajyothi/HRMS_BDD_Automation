import { page } from '../steps/setup'

export class Asset {

    async asset() {
     await page.locator('//a[@href="javascript:;"]//i[@class="icon-docs"]').click()
    }
    async ManageCategory() {
     await page.locator('//span[normalize-space()="Manage Category"]').click()
    }
    async addcategory() {
     await page.locator('#btnaddCategory').click()
    }
    async categorytext() {
     await page.locator('//input[@id="txtDescription"]').click()
    }
    async category(categoryname: string) {
     await page.locator('//input[@id="txtDescription"]').type(categoryname)
    }
    async code(code: string) {
     await page.locator('//input[@id="txtCategoryCode"]').type(code)
    }
    async addbutton() {
     await page.locator('#btnSaveCategory').click()
    }
    async close() {
     await page.locator('//div[@id="tab_CompanyDetails"]//button[@type="button"][normalize-space()="Close"]').click()
    }
    async managesubcategory() {
     await page.locator('//span[normalize-space()="Manage Sub Category"]').click()
    }
    async selectclick() {
     await page.locator('(//a[@class="select2-choice"])[2]').click()
    }
    async searchcategory(categoryname: string) {
     await page.locator('//input[@id="s2id_autogen2_search"]').type(categoryname)
    }
    async selectcategory() {
     await page.locator('(//div[@class="select2-result-label"])[1]').click()
    }
    async subcategory(subcategory: string) {
     await page.locator('//input[@id="txtDescription"]').type(subcategory)
    }
    async manageitem() {
     await page.locator('//span[normalize-space()="Manage Item"]').click()
    }
    async additem() {
     await page.locator('#btnaddCategory').click()
    }
    async selectcategoryitemclick() {
     await page.locator('//div[@id="s2id_ddlCategoryType1"]//a[@class="select2-choice"]').click()
    }
    async searchcategoryitem(categoryname: string) {
     await page.locator('//input[@id="s2id_autogen2_search"]').type(categoryname)
    }
    async selectcategoryitem() {
     await page.locator('//div[@class="select2-result-label"][1]').click()
    }
    async selectsubcategoryitemclick() {
     await page.locator('//div[@class="select2-container form-control select2me"]').click()
    }
    async searchsubcategoryitem(subcategory: string) {
     await page.locator('//input[@id="s2id_autogen4_search"]').type(subcategory)
    }
    async selectsubcategotyitem() {
     await page.locator('(//div[@class="select2-result-label"])[1]').click()
    }
    async item(item: string) {
     await page.locator('//input[@id="txtDescription"]').type(item)
    }
    async manageasset() {
     await page.locator('//span[normalize-space()="Manage Assets"]').click()
    }
    async assetbutton() {
     await page.locator('#btnaddNewManageAsset').click()
    }
    async assetcategoryclick() {
     await page.locator('//div[@id="s2id_ddlCategory"]//a[@class="select2-choice"]').click()
    }
    async searchassetcategory(categoryname: string) {
     await page.locator('//input[@id="s2id_autogen15_search"]').type(categoryname)
    }
    async assetselectcategory() {
     await page.locator('(//div[@class="select2-result-label"])[1]').click()
    }
    async assetsubcategoryclick() {
     await page.locator('//div[@id="s2id_ddlSubCategory"]//a[@class="select2-choice"]').click()
    }
    async searchassetsubcategory(subcategory: string) {
     await page.locator('(//input[@type="text"][contains(@id,"search")])[11]').type(subcategory)
    }
    async assetselectsubcategory() {
     await page.locator('(//div[@class="select2-result-label"])[1]').click()
    }
    async assetitemclick() {
     await page.locator('//div[@id="s2id_ddlItem"]//a[@class="select2-choice"]').click()
    }
    async searchassetitem(item: string) {
     await page.locator('(//input[@type="text"][contains(@id,"search")])[11]').type(item)
    }
    async assetselectitem() {
     await page.locator('(//div[@class="select2-result-label"])[1]').click()
    }
    async clicklocation(location: string) {
     await page.locator('//select[@id="ddlLocation"]').selectOption(({ label: location }))
    }
    async specification1(specification1: string) {
     await page.locator('//input[@id="txtSpec1"]').type(specification1)
    }
    async specification2(specification2: string) {
     await page.locator('//input[@id="txtSpec2"]').type(specification2)
    }
    async serial(serial: string) {
     await page.locator('//input[@id="txtSerial"]').type(serial)
    }
    async saveasset() {
     await page.locator('//button[@id="btnSaveOrUpdateAsset"]').click()
    }
    async closebtn() {
     await page.locator('//button[@id="btnCancel"]').click()
    }
    async edit() {
     await page.locator('(//a[@value="Edit"])[1]').click()
    }
    async issueasset() {
     await page.locator('//a[@id="btnaddAllocateAsset"]').click()
    }
    async selectemp() {
     await page.locator('(//span[@class="filter-option pull-left"])[1]').click()
    }
    async allocateemp() {
     await page.locator('//button[@id="btnGetAllocateEmployeesList"]').click()
    }
    async selectempp() {
     await page.locator('//span[@class="text"][contains(.,"Dot Net Employee (Dot Net Team)")]').click()
    }
    async empcheckbox() {
     await page.locator('//input[@id="chkrowIndex0"]').click()
    }
    async issueassetbtn() {
     await page.locator('#btnAllocateAsset').click()
    }
    async sendmail() {
     await page.locator('//button[@id="btnSendAssetIssuedMail"]').click()
    }
    async pendingclick(status: string) {
     await page.locator('//select[@id="ddlassetapproveorpending"]').selectOption({ label: status })
    }
    async pending() {
     await page.locator('//option[@value="RequestForApproval"]').click()
    }
    async categoryselect(categoryname: string) {
     await page.locator('//select[@id="ddlFltrCategorys"]').selectOption({ label: categoryname })
    }
    async selectlocationhyd(location: string) {
     await page.locator('//select[@id="ddlAssetLocation"]').selectOption({ label: location })
    }
    async editbtn() {
     await page.locator('(//a[@value="Edit"])[1]').click()
    }
    async approvalbutton() {
     await page.locator('//a[@id="btnassetApprove"]').click()
    }
    async approve() {
     await page.locator('//button[@id="btnAssetApprove"]').click()
    }
    async approvalclose() {
     await page.locator('#btnCancel').click()
    }
    async returnasset() {
     await page.locator('(//a[normalize-space()="Return Asset"])[1]').click()
    }
    async returnassetcheckbox() {
     await page.locator('(//input[@id="chkrowIndex0"])[1]').click()
    }
    async returnassetbtn() {
     await page.locator('//button[@id="btnRetunAsset"]').click()
    }
    async sendemail() {
     await page.locator('//button[contains(@id,"btnReturnAsset")]').click()
    }
}
 











