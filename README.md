Install Vercel CLI:

bashnpm install -g vercel

Deploy:

bashvercel --prod

Or deploy via GitHub:

Push your code to GitHub
Connect your repository to Vercel
Automatic deployments on every push



Option 2: Netlify

Build the project:

bashnpm run build

Deploy via Netlify CLI:

bashnpm install -g netlify-cli
netlify deploy --prod --dir=.next

Or drag & drop:

Build the project locally
Drag the .next folder to Netlify dashboard
