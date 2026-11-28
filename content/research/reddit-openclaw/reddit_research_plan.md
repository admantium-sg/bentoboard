# Reddit Script Research Plan

## Main Task
Create a Reddit script that fetches top 10 posts from r/openclaw, shows heading, 70-word summary, and link.

## Implementation Steps
1. Create Reddit fetcher script using Python + praw library
2. Format output with heading, 70-word summary, and link for each post
3. Set up daily cron job at 12:30 am (Berlin time)
4. Configure delivery to Telegram "researcher" bot

## Requirements
- Python script with praw library dependency
- Proper error handling for API failures
- Text summarization to 70 words max
- Cron job configuration
- Telegram delivery configuration