import requests
import json
import os

# Define the URL
url = 'https://utconline.uk.gov.in/timetable.aspx/searchStations'

# Define the headers (from your network request)
headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Content-Type': 'application/json; charset=UTF-8',
    'Origin': 'https://utconline.uk.gov.in',
    'Referer': 'https://utconline.uk.gov.in/timetable.aspx',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36',
    'x-requested-with': 'XMLHttpRequest'
}

all_data = []

for letter in range(ord('a'), ord('z') + 1):
    payload = {
        'empName': chr(letter),
        'flag': 'F',
        'Othervalue': 'undefined'
    }

    response = requests.post(url, headers=headers, data=json.dumps(payload))

    if response.status_code == 200:
        print(f"Request{letter}------")
        
        try:
            response_data = response.json()

            if 'd' in response_data:
                all_data.extend(response_data['d'])
            else:
                print(f"Unexpected")
        
        except json.JSONDecodeError:
            print(f"Failed to parse JSON response for {chr(letter)}")

    else:
        print(f"Failed to make the request for {chr(letter)}. Status code: {response.status_code}")

file_name = "stations_data.json"

if os.path.exists(file_name):
    with open(file_name, "r") as file:
        existing_data = json.load(file)
        existing_data.extend(all_data)
else:
    existing_data = all_data

with open(file_name, "w") as file:
    json.dump(existing_data, file, indent=4)

print(f"Data has been written to {file_name}.")
