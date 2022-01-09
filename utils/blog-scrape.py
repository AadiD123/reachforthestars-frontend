import requests, re
from bs4 import BeautifulSoup
import firebase_admin, requests, time, random
from firebase_admin import credentials, firestore

def get_blog_posts(url='https://reachforthestarss.wixsite.com/reachforthestars/blog'):
    r = requests.get(url)
    m = re.findall(r'"https://reachforthestarss.wixsite.com/reachforthestars/post/.*?"', r.text)
    return m

def get_blog_pages(url='https://reachforthestarss.wixsite.com/reachforthestars/blog'):
    r = requests.get(url)
    n = re.findall(r'"https://reachforthestarss.wixsite.com/reachforthestars/blog/page/.*?"', r.text)
    n.append('"https://reachforthestarss.wixsite.com/reachforthestars/blog/page/1"')
    return list(set(n))

def get_blog_imgs(url):
    r = requests.get(url)
    # print(re.findall(r'<img (.+?) src=(.+?).png\" (.+?)\>', r.text)[0])
    url = re.findall(r'https://static.wixstatic.com/media/(.+?).png', r.text)
    # url = url[:url.index('\"')]
    print(url)

def get_blog_content(url):
    r = requests.get(url)
    soup = BeautifulSoup(r.text, features="html.parser")
    res = ''
    author = ''
    editor = ''
    date = ''
    title = soup.find_all('span', {'class': 'blog-post-title-font blog-post-title-color'})[0].getText().strip()
    for c in soup.find_all('li', {'class': '_3py2c'}):
        if '202' in c.getText():
            date = c.getText()
            break
        
    for i, s in enumerate(soup.find_all('div', {'class': '_1hN1O _2S8BH _3EPBy'})[0]):
        if s is None or s.getText() == '' or s.getText().isspace() or 'date:' in s.getText().lower():
            continue
        if i != 0 and len(res) != 0:
            res += '</br>'
        if 'written by: ' in s.getText().lower():
            author = s.getText()[12:].strip()
        elif 'edited by: ' in s.getText().lower():
            editor = s.getText()[11:].strip()
        else:
            res += f'<p> {s.getText()} </p>'
    return (author.strip(), editor, date, title, res)


def main():
    cred = credentials.Certificate('./rfts-backend-1f453-firebase-adminsdk-9nq0j-a8065bd511.json')
    firebase_admin.initialize_app(cred)
    db = firestore.client()

    pages = get_blog_pages()
    blog_posts = []
    for page in pages:
        blog_posts += (get_blog_posts(page[1:len(page)-1]))

    for bp in blog_posts:
        author, editor, date, title, content = get_blog_content(bp[1:len(bp)-1])
        insert_blogs(db, author, content, date, editor, '', title)

def insert_blogs(db, author, content, date, editor, img, title):
    print(f'inserting blog: {title}')
    data = {
        u'author': author,
        u'content': content,
        u'date': date,
        u'editor': editor,
        u'img': img,
        u'title': title
    }
    db.collection(u'blogs').add(data)

    
if __name__ == "__main__":
    main()
