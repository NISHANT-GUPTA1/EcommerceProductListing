Set Up Instructions

install node -v 
git clone <repository-url>
cd <project-directory>
npm install
npm install --save-dev cross-env

npm run dev
Building for Production


npm run build:web  # For web deployment
Deployment Notes
Web Deployment

Build the web version:

npm run build:web
Deploy the web-build directory to your hosting service
Ensure proper environment variables are set
Mobile Deployment

For Expo Go:

expo publish
For standalone apps:

expo build:android
expo build:ios
Environment Setup

Create .env file with required variables
Set up proper API endpoints
