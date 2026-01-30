// 页面可见性变化时的标题变化效果（类似你提供的main.js功能）
document.addEventListener('visibilitychange', function () {
    var isHidden = document.hidden;
    if (isHidden) {
        document.title = "huidoudour|不要走嘛(*´д`*)";
    } else {
        setTimeout(() => {
            document.title = "huidoudour|好耶,回来了(づ￣3￣)づ╭❤～";
        }, 1000);
        setTimeout(() => {
            document.title = "huidoudour|我的博客";
        }, 2200);
    }
});

// 添加控制台欢迎信息
console.log("🌟 欢迎来到 huidoudour 的博客！\n📝 这里分享技术心得、生活感悟和学习笔记\n💡 希望我的文章能对你有所帮助！\n☕ 感谢访问，记得常来哦~");

// 添加鼠标点击特效
document.addEventListener('click', function(e) {
    if (e.target.tagName !== 'A') {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.left = (e.clientX - 10) + 'px';
        heart.style.top = (e.clientY - 20) + 'px';
        heart.style.fontSize = '20px';
        heart.style.color = '#ff6b6b';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.userSelect = 'none';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.transition = 'all 1s ease-out';
            heart.style.opacity = '0';
            heart.style.transform = 'translateY(-30px)';
            setTimeout(() => {
                document.body.removeChild(heart);
            }, 1000);
        }, 10);
    }
});

// 一言API功能（类似你原项目中的功能）
function fetchHitokoto() {
    fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
        const hitokotoElement = document.getElementById('hitokoto_text');
        if (hitokotoElement) {
            hitokotoElement.href = 'https://hitokoto.cn/?uuid=' + data.uuid;
            hitokotoElement.innerText = "“" + data.hitokoto + "”";
        }
    })
    .catch(console.error);
}

// 如果页面中有id为hitokoto_text的元素，则调用一言API
if (document.getElementById('hitokoto_text')) {
    fetchHitokoto();
}

// 时间问候功能
function timeGreeting() {
    var date = new Date();
    var hours = date.getHours();
    var day = date.getDay();
    var str = "";
    if (hours >= 0 && hours <= 10)
        str += "早上好";
    else if (hours > 10 && hours <= 14)
        str += "中午好";
    else if (hours > 14 && hours <= 18)
        str += "下午好";
    else if (hours > 18 && hours <= 24)
        str += "晚上好";
    str += " ~ 今天是";
    switch (day) {
        case 0:
            str += "星期天，明天又是周一啦TAT";break;
        case 1:
            str += "星期一，怨气冲天！";break;
        case 2:
            str += "星期二";break;
        case 3:
            str += "星期三，加油，再撑两天就周末了！";break;
        case 4:
            str += "星期四，加油，再撑一天就周末了！";break;
        case 5:
            str += "星期五，明天是周末! qwq";break;
        case 6:
            str += "星期六";break;
    }
    var timeElement = document.getElementById("time");
    if (timeElement) {
        timeElement.innerHTML = str;
    }
}

// 网站运行时间统计
function calculateRuntime() {
    // 初始时间，可以根据实际情况修改
    var startDate = new Date("1/1/2025 00:00:00");
    var currentDate = new Date();
    var timeDiff = currentDate.getTime() - startDate.getTime();
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var secondsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    var runtimeElement = document.getElementById('runtime');
    if (runtimeElement) {
        runtimeElement.innerHTML = "本站已运行: " + daysDiff + "天" + hoursDiff + "小时" + minutesDiff + "分" + secondsDiff + "秒";
    }
}

// 如果页面中有相关元素，则启用时间功能
if (document.getElementById('time') || document.getElementById('runtime')) {
    timeGreeting();
    setInterval(function() {
        timeGreeting();
        calculateRuntime();
    }, 1000);
}

// 处理评论表单提交（如果在文章页）
const commentForm = document.getElementById('commentForm');
if(commentForm) {
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢您的评论！由于这是一个静态页面，评论功能暂未实现。');
        this.reset();
    });
}

// 文章数据集中管理
const articlesData = [
    {
        title: "前端开发中的最佳实践",
        date: "2026-01-15",
        excerpt: "分享我在前端开发过程中积累的一些最佳实践和经验，包括代码组织、性能优化和用户体验等方面。良好的代码组织、性能优化策略和用户体验设计是构建高质量应用的关键要素。",
        tags: ["前端开发", "最佳实践", "性能优化"],
        url: "./articles/frontend-best-practices.html",
        category: "技术分享"
    },
    {
        title: "学习新技术的心路历程",
        date: "2026-01-10",
        excerpt: "记录我学习某项新技术的过程，从入门到实践，遇到的问题和解决方法，以及心得体会。学习新技术需要循序渐进，理论与实践相结合，不断总结和反思才能真正掌握。",
        tags: ["学习方法", "技术成长", "心得体会"],
        url: "./articles/learning-new-tech.html",
        category: "学习笔记"
    },
    {
        title: "项目开发中的架构设计",
        date: "2025-12-28",
        excerpt: "探讨在实际项目中如何进行合理的架构设计，保证项目的可维护性和扩展性。良好的架构设计是项目成功的基石，需要考虑多方面的因素。",
        tags: ["架构设计", "项目经验", "可维护性"],
        url: "#",
        category: "项目经验"
    },
    {
        title: "Git 使用技巧与工作流",
        date: "2025-12-15",
        excerpt: "介绍一些实用的 Git 技巧和高效的工作流程，提高团队协作效率。掌握 Git 不仅是版本控制的需要，更是团队协作的基础。",
        tags: ["Git", "工作流", "团队协作"],
        url: "#",
        category: "技术分享"
    },
    {
        title: "性能优化实战案例",
        date: "2025-12-01",
        excerpt: "通过实际案例分析网站性能问题，分享优化策略和具体实施步骤。性能优化需要从多个维度入手，包括网络、渲染、计算等方面。",
        tags: ["性能优化", "实战案例", "Web性能"],
        url: "#",
        category: "技术分享"
    }
];

// 获取指定数量的最新文章
function getLatestArticles(count) {
    return articlesData.slice(0, count);
}

// 获取指定类别的文章
function getArticlesByCategory(category) {
    return articlesData.filter(article => article.category === category);
}

// 如果是博客首页，加载博客文章列表
const blogPostsContainer = document.getElementById('blogPosts');
if(blogPostsContainer) {
    // 生成博客文章
    articlesData.forEach((post, index) => {
        const blogPost = document.createElement('article');
        blogPost.className = 'blog-post';
        
        // 构建标签HTML
        let tagsHtml = '';
        if (post.tags && post.tags.length > 0) {
            tagsHtml = '<div class="post-tags">';
            post.tags.forEach(tag => {
                tagsHtml += `<a href="#" class="tag">${tag}</a>`;
            });
            tagsHtml += '</div>';
        }
        
        blogPost.innerHTML = `
            <header class="post-header">
                <h2 class="post-title"><a href="${post.url}">${post.title}</a></h2>
                <div class="post-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                </div>
            </header>
            <div class="post-excerpt">
                ${post.excerpt}
            </div>
            ${tagsHtml}
            <a href="${post.url}" class="read-more">阅读更多</a>
        `;
        
        blogPostsContainer.appendChild(blogPost);
    });
}

// 如果侧边栏存在，动态填充最新文章和分类
window.addEventListener('DOMContentLoaded', function() {
    // 填充最新文章列表
    const recentPostsList = document.querySelector('.recent-posts');
    if(recentPostsList) {
        // 清空现有内容
        recentPostsList.innerHTML = '';
        
        // 添加最新文章
        const recentArticles = getLatestArticles(4);
        recentArticles.forEach(article => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${article.url}" class="recent-post-link">${article.title}</a>`;
            recentPostsList.appendChild(listItem);
        });
    }
    
    // 填充分类列表
    const categoriesList = document.querySelector('.categories');
    if(categoriesList) {
        // 获取所有唯一类别
        const allCategories = [...new Set(articlesData.map(article => article.category))];
        
        // 清空现有内容
        categoriesList.innerHTML = '';
        
        // 添加分类
        allCategories.forEach(category => {
            const listItem = document.createElement('li');
            let linkUrl = './blog.html'; // 默认链接到博客首页
            
            listItem.innerHTML = `<a href="${linkUrl}" class="category-link">${category}</a>`;
            categoriesList.appendChild(listItem);
        });
    }
    
    // 初始化返回顶部按钮
    initBackToTopButton();
});

// 初始化返回顶部按钮
function initBackToTopButton() {
    // 创建返回顶部按钮
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.title = '返回顶部';
    document.body.appendChild(backToTopBtn);
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // 点击返回顶部
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 添加页面加载完成后的动画效果
window.addEventListener('load', function() {
    // 触发所有卡片的动画
    const cards = document.querySelectorAll('.blog-post');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.style.opacity = '1';
        }, 100);
    });
});

// 添加搜索功能
function initSearch() {
    const searchContainer = document.querySelector('.search-box');
    if(searchContainer) {
        // 创建搜索输入框
        const searchInput = document.createElement('div');
        searchInput.className = 'search-box';
        searchInput.innerHTML = `
            <i class="fas fa-search"></i>
            <input type="text" id="searchInput" placeholder="搜索文章...">
        `;
        searchContainer.parentNode.insertBefore(searchInput, searchContainer.nextSibling);
        
        // 添加搜索功能
        document.getElementById('searchInput').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const posts = document.querySelectorAll('.blog-post');
            
            posts.forEach(post => {
                const title = post.querySelector('.post-title a').textContent.toLowerCase();
                const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
                const tags = Array.from(post.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
                
                if(title.includes(searchTerm) || excerpt.includes(searchTerm) || tags.some(tag => tag.includes(searchTerm))) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }
}

// 初始化搜索功能
document.addEventListener('DOMContentLoaded', initSearch);