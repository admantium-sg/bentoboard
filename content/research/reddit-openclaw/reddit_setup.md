# Reddit Script Setup Instructions

## Installation
1. Install required dependencies:
```bash
pip install -r requirements.txt
```

## Reddit API Configuration
1. Go to https://www.reddit.com/prefs/apps
2. Click "are you a developer? create app"
3. Fill in:
   - Name: OpenClaw Research Script
   - Choose script
   - About URL: (optional)
   - Redirect URI: http://localhost:8080
4. Click create app
5. Note down:
   - Client ID
   - Client Secret

## Environment Variables
Set these environment variables for the script to work:
```bash
export REDDIT_CLIENT_ID="your_client_id_here"
export REDDIT_CLIENT_SECRET="your_client_secret_here"
```

## Testing
Run the script manually to test:
```bash
python3 reddit_fetcher.py
```

## Cron Job
The daily cron job is set to run at 12:30 AM Berlin time (30 0 * * *) and deliver results to the Telegram researcher bot.