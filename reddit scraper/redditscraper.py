import requests
import json
import time

# Constants
REDDIT_API_URL = "https://www.reddit.com/subreddits.json"
HEADERS = {"User-Agent": "Reddit-Subreddit-Scraper"}
OUTPUT_FILE = "subreddits.json"

def fetch_subreddits():
    after = "t5_jyc32"
    all_subreddits = []

    while True:
        url = f"{REDDIT_API_URL}?count=25"
        if after:
            url += f"&after={after}"

        response = requests.get(url, headers=HEADERS)

        if response.status_code != 200:
            print(f"Error: {response.status_code}, {response.text} currently at {after}")
            break

        data = response.json()
        
        for item in data.get("data", {}).get("children", []):
            sub = item.get("data", {})
            subreddit_info = {
                "id": sub.get("id"),
                "name": sub.get("name"),
                "display_name": sub.get("display_name"),
                "display_name_prefixed": sub.get("display_name_prefixed"),
                "url": sub.get("url"),
                "title": sub.get("title"),
                "public_description": sub.get("public_description"),
                "description": sub.get("description"),
                "subscribers": sub.get("subscribers"),
                "active_user_count": sub.get("active_user_count"),
                "over18": sub.get("over18")
            }
            all_subreddits.append(subreddit_info)

        after = data.get("data", {}).get("after")
        if not after:
            break

        print(f"Fetched {len(all_subreddits)} subreddits so far...")
        time.sleep(1)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump({"subreddits": all_subreddits}, f, indent=4)

    print(f"Saved {len(all_subreddits)} subreddits to {OUTPUT_FILE}")

fetch_subreddits()
