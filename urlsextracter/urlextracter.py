import os
from bs4 import BeautifulSoup

def extract_unique_links_and_scripts(folder_path, output_file='extracted_urls.py'):
    link_urls = set()
    script_urls = set()

    # Get all .html files in the folder
    html_files = [f for f in os.listdir(folder_path) if f.endswith('.html')]

    for filename in html_files:
        filepath = os.path.join(folder_path, filename)
        with open(filepath, 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')

            # Extract <link> tag hrefs
            for link_tag in soup.find_all('link'):
                href = link_tag.get('href')
                if href:
                    link_urls.add(href)

            # Extract <script> tag srcs
            for script_tag in soup.find_all('script'):
                src = script_tag.get('src')
                if src:
                    script_urls.add(src)

    # Convert sets to sorted lists for consistency
    link_urls = sorted(link_urls)
    script_urls = sorted(script_urls)

    # Write output as Python-style lists
    output_path = os.path.join(folder_path, output_file)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(str(link_urls) + '\n')
        f.write(str(script_urls) + '\n')

    print(f"Unique URLs saved to: {output_path}")

path = "html"
extract_unique_links_and_scripts(path)