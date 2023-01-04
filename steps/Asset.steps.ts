import { Then,Given,When } from "@cucumber/cucumber";
import { Asset } from "../pages/Asset.page";
import { testConfig } from "../testConfig";
import { Utils } from "../Utils/Utils";
import { page } from "./setup";

const utils = new Utils()
const asset = new Asset()

Then('Techsupport Employee Creates Category',async () => {
 await asset.asset()
 await asset.ManageCategory()
 await asset.addcategory()
 await asset.categorytext()
 await asset.category(testConfig.Categoryname)
 await asset.code(testConfig.Categorycode)
 await page.waitForTimeout(3000)
 await asset.addbutton()
 await utils.assertSucessMsg(testConfig.updatedtoastmessage)
 await asset.close()
 })
Then('Techsupport Employee Creates Subcategory',async () => {
 await asset.asset()
 await asset.managesubcategory()
 await asset.addcategory()
 await asset.selectclick()
 await asset.searchcategory(testConfig.Categoryname)
 await asset.selectcategory()
 await asset.subcategory(testConfig.subcategory)
 await asset.code(testConfig.Subcategorycode)
 await page.waitForTimeout(3000)
 await asset.addbutton()
 await utils.assertSucessMsg(testConfig.updatedtoastmessage)
 await asset.close()
 })
Then('Techsupport Employee Creates Item',async () => {
 await asset.asset()
 await asset.manageitem()
 await asset.additem()
 await asset.selectcategoryitemclick()
 await asset.searchcategoryitem(testConfig.Categoryname)
 await asset.selectcategoryitem()
 await asset.selectsubcategoryitemclick()
 await asset.searchsubcategoryitem(testConfig.subcategory)
 await asset.selectsubcategotyitem()
 await asset.item(testConfig.Item)
 await asset.code(testConfig.Itemcode)
 await asset.addbutton()
 await utils.assertSucessMsg(testConfig.updatedtoastmessage)
 await asset.close()
 })
Then('Techsupport Employee Creates Asset', async () => {
 await asset.asset()
 await asset.manageasset()
 await asset.assetbutton()
 await asset.assetcategoryclick()
 await asset.searchassetcategory(testConfig.Categoryname)
 await asset.assetselectcategory()
 await asset.assetsubcategoryclick()
 await asset.searchassetsubcategory(testConfig.subcategory)
 await asset.assetselectsubcategory()
 await asset.assetitemclick()
 await asset.searchassetitem(testConfig.Item)
 await asset.assetselectitem()
 await asset.clicklocation(testConfig.location)
 await asset.specification1(testConfig.Specification1)
 await asset.specification2(testConfig.Specification2)
 await asset.serial(testConfig.serial)
 await asset.saveasset()
 await asset.closebtn()
 await page.waitForTimeout(3000)
 await utils.assertsucessMsg(testConfig.Assettoastmessage)
})
Then('Techsupport HOD Approve Asset', async () => {
 await asset.asset()
 await asset.manageasset()
 await asset.pendingclick(testConfig.pendingstatus)
 await page.waitForTimeout(3000)
 await asset.categoryselect(testConfig.Categoryname)
 await asset.selectlocationhyd(testConfig.location)
 await asset.editbtn()
 await asset.approvalbutton()
 await asset.approve()
 await asset.approvalclose()
 await utils.assertapprovalsuccessmsg(testConfig.approvaltoastmessage)
 await page.waitForTimeout(2000)
})

