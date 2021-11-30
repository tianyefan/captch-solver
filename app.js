import puppeteer from "puppeteer-extra";
import RecaptchaPlugin from "puppeteer-extra-plugin-recaptcha";
import bypass from "./bypass/captchaBypasser.js";


puppeteer.use(
    RecaptchaPlugin({
        provider: {
            fn: bypass,
        },
    })
);

const urls = 
[
    'https://www.indeed.com/jobs?q=Machine+Learning+Engineer&l=San+Francisco&limit=1&sort=date&fromage=last',
    'https://www.indeed.com/jobs?q=Analyst&l=Los+Angeles&limit=1&sort=date&fromage=last',
    'https://www.indeed.com/jobs?q=Designer&l=Los+Angeles&limit=1&sort=date&fromage=last',
    'https://www.indeed.com/jobs?q=Data+Scientist&l=Los+Angeles&limit=1&sort=date&fromage=last',
    'https://www.indeed.com/jobs?q=Machine+Learning+Engineer&l=Los+Angeles&limit=1&sort=date&fromage=last',
    'https://www.indeed.com/jobs?q=Software+Engineer&l=Los+Angeles&limit=1&sort=date&fromage=last',
    'https://www.indeed.com/jobs?q=Analyst&l=San+Francisco&limit=1&sort=date&fromage=last',
    'https://www.indeed.com/jobs?q=Designer&l=San+Francisco&limit=1&sort=date&fromage=last',
    'https://www.indeed.com/jobs?q=Data+Scientist&l=San+Francisco&limit=1&sort=date&fromage=last',
    'https://www.indeed.com/jobs?q=Software+Engineer&l=San+Francisco&limit=1&sort=date&fromage=last'
]

puppeteer.launch({headless: false}).then(async (browser) => {
    const page = await browser.newPage();
    var example = 'https://www.tokyobitcoiner.com/hcaptcha';
    console.log("Solving captcha...");
    await page.goto(example);
    await page.solveRecaptchas();
    console.log("Captcha Solved!");
    //var url = 'https://www.indeed.com/jobs?q=Machine+Learning+Engineer&l=San+Francisco&limit=1&sort=date&fromage=last';
    
    /*while(true){
        for(let i =0; i < urls.length; i++){
            //const page = await browser.newPage();
            await page.goto(urls[i]);
            console.log("This is index " + i);
            console.log("Solving captcha...");
            await page.solveRecaptchas();
            console.log("Captcha Solved!");
            await page.$eval('input[type=submit]', el => el.click());
            await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });     
            await page.waitForTimeout(1000);
        }
    }*/

    //await page.goto(url);
    //console.log("Solving captcha...");
    //await page.solveRecaptchas();
    //console.log("Captcha Solved!");
})