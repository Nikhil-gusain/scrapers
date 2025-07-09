import requests
from bs4 import BeautifulSoup

# Define the URL
url = "https://utconline.uk.gov.in/timetable.aspx"

# Set headers as seen from the original request
headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-GB,en;q=0.6",
    "Origin": "https://utconline.uk.gov.in",
    "Referer": "https://utconline.uk.gov.in/timetable.aspx",
    "Cookie": "ASP.NET_SessionId=lmok3d3al15nbmunrzwaydlm",
    "Sec-Ch-Ua": '"Not(A:Brand";v="99", "Brave";v="133", "Chromium";v="133"',
    "Sec-Ch-Ua-Mobile": "?1",
    "Sec-Ch-Ua-Platform": '"Android"',
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    # "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
}

# Define the payload (the form data you're sending with the POST request)
payload = {
    "__EVENTTARGET": "ctl00$ContentPlaceHolder1$lbtnSearchServices",
    # "__VIEWSTATE": "/wEPDwULLTExMTI0NTYwMjYzZGVhMww7G2OtEJknM0YXgrA1shU67kYzVeLPxW9eA0WjZ8glgxCTEJ2ZnJw==",  # Replace with actual __VIEWSTATE value
    # "__VIEWSTATEGENERATOR": "9E1E89C0",
    "ctl00$ContentPlaceHolder1$tbFrom": "DELHI ANANDVIHAR (DELHI)",
    "ctl00$ContentPlaceHolder1$tbTo": "HALDWANI (UTTARAKHAND)",
    "ctl00$ContentPlaceHolder1$ddlservices": "0",  # Select the service type (check the value in the form)
    # Add any other form fields if needed
}

# Send the POST request
response = requests.post(url, headers=headers, data=payload)

# Check the response
if response.status_code == 200:
    print("Request successful!")
    
    # Save the HTML response to a file
    with open("response.html", "w", encoding="utf-8") as file:
        file.write(response.text)
    print("HTML content saved to 'response.html'")
else:
    print(f"Request failed with status code {response.status_code}")
