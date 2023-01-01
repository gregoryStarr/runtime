const puppeteer = require('puppeteer');
const AWS = require('aws-sdk');
const fs = require('fs');

// Replace with your own Discord login credentials
const USERNAME = 'your-username';
const PASSWORD = 'your-password';

async function main() {
  // Set up AWS S3 client
  const s3 = new AWS.S3({
    accessKeyId: 'your-access-key-id',
    secretAccessKey: 'your-secret-access-key'
  });

  // Read prompts from JSON file
  const promptsFile = fs.readFileSync('prompts.json');
  const prompts = JSON.parse(promptsFile);

  // Launch Puppeteer and navigate to Discord login page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://discordapp.com/login');

  // Log in to Discord
  await page.type('#email', USERNAME);
  await page.type('#password', PASSWORD);
  await page.click('button[type="submit"]');

  // Navigate to Midjourney bot chat
  await 
page.goto('https://discordapp.com/channels/your-server-id/your-channel-id');

  // Process each prompt
  for (const prompt of prompts) {
    // Send prompt to Midjourney bot
    await page.type('.textArea-2Spzkt', prompt);
    await page.keyboard.press('Enter');

    // Wait for image to be generated
    await page.waitForSelector('img.image-33JSyf');

    // Download image and save to AWS S3 bucket
    const imgElement = await page.$('img.image-33JSyf');
    const imgUrl = await page.evaluate(imgElement => imgElement.src, 
imgElement);
    const imgData = await page.goto(imgUrl);
    const imgBuffer = await imgData.buffer();
    await s3.upload({
      Bucket: 'your-bucket-name',
      Key: `${prompt}.png`,
      Body: imgBuffer
    }).promise();
  }

  // Close the browser
  await browser.close();
}

main();
