# PowerApp Weather Component
## Running the app
1. Clone this repository
2. Run `npm install`
3. Run `npm start`. See package.json for more scripts, such as `npm run start:watch`

## Deployment
1. Have [Power Platform CLI installed](https://github.com/MicrosoftDocs/power-platform/blob/main/power-platform/developer/cli/introduction.md#install-microsoft-power-platform-cli)
2. Run `pac auth create --url https://yourenvirovnment.dynamics.com` to setup authentication to your environment. You can find your environment URL at [Environments](https://admin.powerplatform.microsoft.com/environments) in Details.
3. Run `pac pcf push`. If you get an error like `failed to import with error: Principal user...is missing prvCreateCustomControl privilege` you have to either make your user an administrator of your environment, or grant him the specific privilege required.

## Adding to canvas app
You need to enable code components, by following [this guide](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/component-framework-for-canvas-apps)

## To-do
- Make the number of forecasts configurable from PowerApps
- Localization
- Determine user location and make him able to pick a different one
- Get real data from MSN or OpenMeteo
- Do not redraw the component on each mutation 
