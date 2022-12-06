import { faker } from '@faker-js/faker';

export const testConfig = {

 url:`https://hrmsdev1.azurewebsites.net/`,
 techsupportemp: `techsupportemp@intonenetworks.com`,
 password: `Password1!`,
 techsupporthodusername:`techsupporthod@intonenetworks.com`,
 techsupportpassword:`Password1!`,
 invalidusername:`abc@gmail.com`,
 validpassword:`Password1!`,
 validusername:`dotnetemployee@intonenetworks.com`,
 invalidpassword:`abcd`,
 invalidusername1:`ghi@gmail.com`,
 invalidpassword1:`password`,
 dotnethod:`dotnethod@intonenetworks.com`,
 waitForElement: 120000,
 subcategory:'Auto'+faker.name.firstName(),
 Item:'Auto'+faker.name.firstName(),
 Categoryname:'Auto'+faker.name.firstName(),
 Categorycode:faker.random.numeric(3),
 Subcategorycode:'Auto'+faker.random.numeric(3),
 Itemcode:faker.random.numeric(3),
 Specification1:faker.name.firstName(),
 Specification2:faker.name.firstName(),
 serial:faker.name.firstName()
}