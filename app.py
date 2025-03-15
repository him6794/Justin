from flask import Flask, render_template

app = Flask(__name__)

# 模擬部落格資料
blog_posts = [
    {
        'id': 1,
        'title': '分布式系統設計心得',
        'content': '在開發hivemind過程中遇到的挑戰...',
        'date': '2024-03-15'
    },
    {
        'id': 2,
        'title': 'gRPC實戰經驗分享',
        'content': '如何用Python實現高效微服務通信...',
        'date': '2024-03-20'
    }
]

# 模擬作品集資料
projects = [
    {
        'title': 'hivemind',
        'description': '去中心化的分布式運算平台',
        'image': 'file.png',
        'url': 'https://github.com/him6794/hivemind'
    },
    {
        'title': '樂譜查詢平台',
        'description': '解決了樂譜太多無法快速找到的困難',
        'image': 'rick-roll-rick-ashley.gif',
        'url': 'https://github.com/him6794/-'
    }
]

@app.route('/')
def index():
    return render_template('index.html', projects=projects)

@app.route('/blog')
def blog():
    return render_template('blog.html', posts=blog_posts)

@app.route('/blog/<int:post_id>')
def post(post_id):
    post = next((p for p in blog_posts if p['id'] == post_id), None)
    return render_template('post.html', post=post)

if __name__ == '__main__':
    app.run(debug=True)