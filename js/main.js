// 仓库数据
const repositories = [
    {
        name: "我的博客",
        fullName: "huidoudour/huidoudour.github.io/blog",
        description: "分享技术心得、生活感悟和学习笔记。",
        icon: "fas fa-blog",
        url: "./blog.html"
    },
    {
        name: "Installer",
        fullName: "huidoudour/Installer",
        description: "一个安装工具项目，提供简单易用的软件安装解决方案。",
        icon: "fas fa-download",
        url: "https://app.ccrh-cmit.uno"
    },
    {
        name: "QRCode Scan",
        fullName: "huidoudour/CodeScan",
        description: "一个二维码和条形码扫描记录小工具。",
        icon: "fas fa-qrcode",
        url: "https://www.ccrh-cmit.uno/CodeScan/"
    },
    {
        name: "Learn-of-all",
        fullName: "huidoudour/Learn-of-all",
        description: "综合性学习项目，涵盖多种技术和知识领域的学习资料和示例。",
        icon: "fas fa-graduation-cap",
        url: "https://learn.ccrh-cmit.uno"
    },
    {
        name: "huidoudour",
        fullName: "huidoudour/huidoudour",
        description: "个人仓库，包含配置文件、个人项目和工具集合。",
        icon: "fas fa-user",
        url: "https://me.ccrh-cmit.uno"
    },
    {
        name: "LearnEuler",
        fullName: "huidoudour/LearnEuler",
        description: "欧拉计划(Project Euler)学习项目，包含多种编程语言的解题方案。",
        icon: "fas fa-code",
        url: "https://euler.ccrh-cmit.uno"
    }
];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    const repoGrid = document.getElementById('repoGrid');
    
    // 生成仓库卡片
    repositories.forEach((repo, index) => {
        const repoCard = document.createElement('div');
        repoCard.className = 'repo-card';
        
        repoCard.innerHTML = `
            <div class="repo-icon">
                <i class="${repo.icon}"></i>
            </div>
            <h3 class="repo-name">${repo.name}</h3>
            <p class="repo-desc">${repo.description}</p>
            <a href="${repo.url}" target="_blank" class="repo-link">
                <i class="fab fa-github"></i> 访问页面 
            </a>
        `;
        
        repoGrid.appendChild(repoCard);
    });
    
    // 设置当前日期
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('zh-CN', options);
    
    // 可选：使用GitHub API获取更多仓库信息
    // fetchGitHubRepos();
});

// 可选：使用GitHub API获取仓库详细信息
async function fetchGitHubRepos() {
    try {
        // 注意：GitHub API有速率限制，这里仅作为示例
        const response = await fetch('https://api.github.com/users/huidoudour/repos');
        const repos = await response.json();
        
        // 可以在这里更新仓库信息，如星标数、最后更新时间等
        console.log('GitHub仓库数据:', repos);
    } catch (error) {
        console.log('GitHub API请求失败，使用静态数据:', error);
    }
}

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
            document.title = "huidoudour|GitHub项目导航";
        }, 2200);
    }
});

// 添加控制台欢迎信息
console.log("🌟 欢迎来到 huidoudour 的 GitHub 项目导航！\n📝 探索我的开源项目，发现更多可能性\n💡 希望这些项目能对你有所帮助！\n☕ 感谢访问，记得常来哦~");

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