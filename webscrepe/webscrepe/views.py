from django.http import JsonResponse, HttpResponse
from bs4 import BeautifulSoup
from django.shortcuts import render
import requests
from urllib.parse import urlparse
import datetime
import os

def save_html_to_file(html_content, filename):
    print(f"Filename: {filename}")  # Debugging print statement
    if not os.path.exists('downloaded_files'):
        os.makedirs('downloaded_files')
    
    # Join the directory and filename
    filepath = os.path.join('downloaded_files', filename)
    
    # Check if a directory already exists with the same name
    if os.path.isdir(filepath):
        print(f"Error: '{filepath}' is a directory, not a file.")
        return
    
    # Proceed to open the file only if it's not a directory
    try:
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(html_content)
        print(f"File saved at {filepath}")
    except Exception as e:
        print(f"Error saving file: {e}")

def fetch_css_from_urls(request):
    url_list = ['https://cdn.trustindex.io/loader.js', 'https://looklush.in/wp-content/plugins/contact-form-7/includes/js/index.js?ver=6.0.5', 'https://looklush.in/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=6.0.5', 'https://looklush.in/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.28.0', 'https://looklush.in/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.28.0', 'https://looklush.in/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js?ver=3.28.0', 'https://looklush.in/wp-content/plugins/elementor-pro/assets/lib/sticky/jquery.sticky.min.js?ver=3.28.0', 'https://looklush.in/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.28.0', 'https://looklush.in/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.28.0', 'https://looklush.in/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.28.0', 'https://looklush.in/wp-content/plugins/elementor/assets/lib/e-gallery/js/e-gallery.min.js?ver=1.2.0', 'https://looklush.in/wp-content/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min.js?ver=0.2.1', 'https://looklush.in/wp-content/plugins/elementor/assets/lib/swiper/v8/swiper.min.js?ver=8.4.5', 'https://looklush.in/wp-content/plugins/elementskit-lite/libs/framework/assets/js/frontend-script.js?ver=3.4.6', 'https://looklush.in/wp-content/plugins/elementskit-lite/widgets/init/assets/js/animate-circle.min.js?ver=3.4.6', 'https://looklush.in/wp-content/plugins/elementskit-lite/widgets/init/assets/js/elementor.js?ver=3.4.6', 'https://looklush.in/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widget-scripts.js?ver=3.4.6', 'https://looklush.in/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/js/view/general.min.js?ver=6.1.5', 'https://looklush.in/wp-content/plugins/essential-blocks/assets/js/eb-blocks-localize.js?ver=31d6cfe0d16ae931b73c', 'https://looklush.in/wp-content/plugins/google-site-kit/dist/assets/js/googlesitekit-consent-mode-3d6495dceaebc28bcca3.js', 'https://looklush.in/wp-content/plugins/google-site-kit/dist/assets/js/googlesitekit-events-provider-contact-form-7-21cf1c445673c649970d.js', 'https://looklush.in/wp-content/plugins/mystickymenu/js/morphext/morphext.min.js?ver=2.7.7', 'https://looklush.in/wp-content/plugins/mystickymenu/js/welcomebar-front.js?ver=2.7.7', 'https://looklush.in/wp-content/plugins/premium-addons-for-elementor/assets/frontend/min-js/TweenMax.min.js?ver=4.10.89', 'https://looklush.in/wp-content/plugins/premium-addons-for-elementor/assets/frontend/min-js/lottie.min.js?ver=4.10.89', 'https://looklush.in/wp-content/plugins/premium-addons-for-elementor/assets/frontend/min-js/motionpath.min.js?ver=4.10.89', 'https://looklush.in/wp-content/plugins/premium-addons-for-elementor/assets/frontend/min-js/pa-scrolldir.min.js?ver=4.10.89', 'https://looklush.in/wp-content/plugins/premium-addons-for-elementor/assets/frontend/min-js/prettyPhoto.min.js?ver=4.10.89', 'https://looklush.in/wp-content/plugins/revslider/public/assets/js/rbtools.min.js?ver=6.5.9', 'https://looklush.in/wp-content/plugins/revslider/public/assets/js/rs6.min.js?ver=6.5.9', 'https://looklush.in/wp-content/plugins/sticky-header-effects-for-elementor/assets/js/she-header.js?ver=1.7.7', 'https://looklush.in/wp-content/plugins/wp-whatsapp-chat/build/frontend/js/index.js?ver=050b65b6ccb82df6ae3c', 'https://looklush.in/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js?ver=3.3.0', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-12.js?ver=1727739748', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1709557375', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1710334997', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1712060263', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1713312186', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1713364155', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1713373490', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1713391594', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1713391720', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1713395861', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1713783216', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1716398229', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1727739748', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3059.js?ver=1738941398', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1709557375', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1710334997', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1712060263', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1713312186', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1713364155', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1713373490', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1713391594', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1713391720', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1713395861', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1713783216', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1716398229', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1727739748', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3132.js?ver=1738941398', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1709557375', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1710334997', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1712060263', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1713312186', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1713364155', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1713373490', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1713391594', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1713391720', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1713395861', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1713783216', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1716398229', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1727739748', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-3137.js?ver=1738941398', 'https://looklush.in/wp-content/uploads/essential-addons-elementor/eael-96.js?ver=1712060263', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-1baf46b73.min.js?ver=1749205842', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-4d5a6ebdd.min.js?ver=1749205839', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-4fc313adf.min.js?ver=1749205847', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-4fdc97dcb.min.js?ver=1749205842', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-5e372a225.min.js?ver=1749205846', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-8bc428786.min.js?ver=1749205843', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-9732121d3.min.js?ver=1749205840', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-9781348f1.min.js?ver=1749205844', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-9b111cfb3.min.js?ver=1749205251', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-9b111cfb3.min.js?ver=1749205848', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-aa4eb7f0e.min.js?ver=1749205845', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-cfb583f73.min.js?ver=1749205845', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-dbdcddf11.min.js?ver=1749205841', 'https://looklush.in/wp-content/uploads/premium-addons-elementor/pa-frontend-f035eb9b2.min.js?ver=1749205848', 'https://looklush.in/wp-includes/js/dist/hooks.min.js?ver=4d63a3d491d11ffd8ac6', 'https://looklush.in/wp-includes/js/dist/i18n.min.js?ver=5e580eb46a90c2b997e6', 'https://looklush.in/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1', 'https://looklush.in/wp-includes/js/jquery/jquery.min.js?ver=3.7.1', 'https://looklush.in/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3', 'https://looklush.in/wp-includes/js/jquery/ui/draggable.min.js?ver=1.13.3', 'https://looklush.in/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.3', 'https://www.googletagmanager.com/gtag/js?id=GT-5R3QW43']

    
    all_extracted_data = []

    for url in url_list:
        response = requests.get(url)
        
        if response.status_code == 200:
            file_name = os.path.basename(url)
            
            timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"{file_name}"
            save_html_to_file(response.text, filename)
            
            extracted_data = {
                'url': url,
                'css_content': response.text[:100]
            }
            all_extracted_data.append(extracted_data)
        
        else:
            all_extracted_data.append({
                'url': url,
                'error': 'Failed to fetch data'
            })
    
    return JsonResponse(data=all_extracted_data, safe=False)


def get_safe_filename(url):
    path = urlparse(url).path
    filename = os.path.basename(path.strip("/"))
    return filename.strip() if filename.strip() else "baseurl"
def fetch_data_from_urls(request):
    url_list = ['https://looklush.in/derma-roller/#', 'https://looklush.in/why-looklush/', 'https://looklush.in/derma-roller/#', 'https://looklush.in/acne-cleanup/', 'https://looklush.in/acne-scars/', 'https://looklush.in/acne-treatment/', 'https://looklush.in/bridal-skin-treatment/', 'https://looklush.in/cabin-crew-makeover/', 'https://looklush.in/carbon-laser/', 'https://looklush.in/charcoal-treatment/', 'https://looklush.in/chemical-peels/', 'https://looklush.in/dark-circle-treatment/', 'https://looklush.in/derma-roller/', 'https://looklush.in/double-chin/', 'https://looklush.in/dull-lifeless-skin/', 'https://looklush.in/face-thread-lifts/', 'https://looklush.in/facial-filler/', 'https://looklush.in/full-body-lightening/', 'https://looklush.in/hifu-treatment/', 'https://looklush.in/hydra-facial/', 'https://looklush.in/influencer-makeover/', 'https://looklush.in/instant-glow-peel/', 'https://looklush.in/led-facial/', 'https://looklush.in/lip-filler/', 'https://looklush.in/lip-lightening/', 'https://looklush.in/looklush-glow-cleanup/', 'https://looklush.in/microblading/', 'https://looklush.in/microdermabrasion/', 'https://looklush.in/mnrf/', 'https://looklush.in/oxygen-facial/', 'https://looklush.in/pigmentation/', 'https://looklush.in/pimple-treatment/', 'https://looklush.in/prp-for-hair-and-skin/', 'https://looklush.in/q-switch-laser/', 'https://looklush.in/red-carpet-glow/', 'https://looklush.in/skin-booster/', 'https://looklush.in/skin-lightening/', 'https://looklush.in/skin-polishing/', 'https://looklush.in/tattoo-removal/', 'https://looklush.in/underarm-lightening/', 'https://looklush.in/vit-c-peel/', 'https://looklush.in/derma-roller/#', 'https://looklush.in/anti-dandruff/', 'https://looklush.in/bridal-skin-treatment/', 'https://looklush.in/cabin-crew-makeover/', 'https://looklush.in/hair-fall-treatment/', 'https://looklush.in/hair-loss/', 'https://looklush.in/hair-prp/', 'https://looklush.in/mesotherapy/', 'https://looklush.in/androgenic-alopecia/', 'https://looklush.in/prp-for-hair-and-skin/', 'https://looklush.in/seborrheic-dermatitis-scalp/', 'https://looklush.in/derma-roller/#', 'https://looklush.in/accidental-scar/', 'https://looklush.in/birthmark-removal/', 'https://looklush.in/hair-removal-lasers/', 'https://looklush.in/influencer-makeover/', 'https://looklush.in/melasma/', 'https://looklush.in/stretch-mark-removal/', 'https://looklush.in/tattoo-removal/', 'https://looklush.in/lip-lightening/', 'https://looklush.in/freckles/', 'https://looklush.in/burn-scar/', 'https://looklush.in/derma-roller/#', 'https://looklush.in/clinic/', 'https://looklush.in/celebrity-clients/', 'https://looklush.in/derma-roller/#', 'https://looklush.in/blogs/', 'https://looklush.in/contact-us/']
    
    all_extracted_data = []

    # Get today's and yesterday's date in the required format (e.g., Feb 28, 2025)
    today = datetime.datetime.now().date()
    yesterday = today - datetime.timedelta(days=1)

    for url in url_list:
        response = requests.get(url)
        
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            file_name = get_safe_filename(url)
            save_html_to_file(response.text,f"{file_name}.html")
            # return HttpResponse(response.text)
            game_results = soup.find_all('div', class_='body-post')
            extracted_data = []
            
            for result in game_results:
                news_link = result.find('a', class_='story-link').get('href')
                news_time = result.find('span', class_='h-datetime').text.strip()
                clean_date_string = news_time.strip('\ue802')
                date_obj = datetime.datetime.strptime(clean_date_string, "%b %d, %Y").date()
                print(date_obj==yesterday)
                # print(yesterday)
                
                # Check if the blog is from today or yesterday
                if date_obj==today or date_obj==yesterday:
                    extracted_data.append({
                        'link': news_link,
                        'time': news_time,
                    })
            
            all_extracted_data.append({
                'url': url,
                'data': extracted_data
            })
        
        else:
            all_extracted_data.append({
                'url': url,
                'error': 'Failed to fetch data'
            })
    
    blog_extracted_data = []
    for i in range(len(all_extracted_data[0]['data'])):
        blog_extracted_data.append(fetch_blogs(all_extracted_data[0]['data'][i]['link']))
    
    # Return the extracted data as a JSON response
    return JsonResponse(data=blog_extracted_data, safe=False)

def fetch_blogs(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    blogpage = soup.find('div', id='articlebody')
    blog_content = []
    for tag in blogpage.find_all(['p', 'li']):
        if tag.name == 'li':
            blog_content.append({
                'type': 'list_item',
                'content': tag.text.strip()
            })
        else:
            blog_content.append({
                'type': 'paragraph',
                'content': tag.text.strip()
            })
    return blog_content
def home(request):
    return render(request,"index2.html")