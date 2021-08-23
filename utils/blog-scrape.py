import requests, re

def get_blog_posts(url='https://www.reachforthestarss.com/blog'):
    r = requests.get(url)
    m = re.findall(r'"https://www.reachforthestarss.com/post/.*?"', r.text)
    return m

def get_blog_pages(url='https://www.reachforthestarss.com/blog'):
    r = requests.get(url)
    n = re.findall(r'"https://www.reachforthestarss.com/blog/page/.*?"', r.text)
    n.append('"https://www.reachforthestarss.com/blog/page/1"')
    return list(set(n))

def main():
    pages = get_blog_pages()
    blog_posts = []
    for page in pages:
        blog_posts += (get_blog_posts(page[1:len(page)-1]))

    print(blog_posts)
    
if __name__ == "__main__":
    main()