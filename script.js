let resumes = [
    { name: "宫崎英高", experience: "20年", skills: "Dark Souls系列, Sekiro, 游戏设计" },
    { name: "小岛秀夫", experience: "30年", skills: "Metal Gear系列, Death Stranding, 游戏制作" },
    { name: "铃木裕", experience: "35年", skills: "赛博朋克, Shenmue, 游戏设计" },
    { name: "岩田聪", experience: "20年", skills: "任天堂产品, 游戏硬件设计, 游戏开发" },
    { name: "田尻智", experience: "30年", skills: "宝可梦系列, 游戏创作" },
    { name: "渡边哲男", experience: "25年", skills: "最终幻想系列, 游戏制作" },
    { name: "坂口博信", experience: "30年", skills: "最终幻想系列, 游戏设计, 制作" },
    { name: "松野泰己", experience: "25年", skills: "传送门, 战争机器, 游戏制作" },
    { name: "高桥名人", experience: "40年", skills: "街机游戏, 视频游戏营销, 制作" },
    { name: "堀井雄二", experience: "30年", skills: "勇者斗恶龙系列, RPG设计, 游戏编程" }
];

let resumeIndex = 0;
let approvedCount = 0;
let rejectedCount = 0;
const totalResumes = resumes.length;
const approvedList = [];
const rejectedList = [];

const resumeDetailsElement = document.getElementById('resume-details');
const statusElement = document.getElementById('status');
const countElement = document.getElementById('count');
const totalElement = document.getElementById('total');
const popupElement = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');
const resultsElement = document.getElementById('results'); // 用于显示筛选结果

function updateResume() {
    if (resumeIndex < totalResumes) {
        const currentResume = resumes[resumeIndex];
        resumeDetailsElement.innerHTML = `姓名: ${currentResume.name}<br>经验: ${currentResume.experience}<br>技能: ${currentResume.skills}`;
    } else {
        showPopup();
    }
}

function showPopup() {
    popupElement.style.display = 'flex';
    // 在弹窗中显示通过和未通过的人员名单
    let approvedNames = approvedList.map(person => person.name).join(', ');
    let rejectedNames = rejectedList.map(person => person.name).join(', ');
    resultsElement.innerHTML = `
        <h2>筛选结果</h2>
        <p><strong>通过初筛:</strong> ${approvedNames || '无'}</p>
        <p><strong>未通过初筛:</strong> ${rejectedNames || '无'}</p>
    `;
}

closePopupButton.addEventListener('click', () => {
    popupElement.style.display = 'none';
});

document.getElementById('approve-btn').addEventListener('click', () => {
    approvedCount++;
    approvedList.push(resumes[resumeIndex]);
    resumeIndex++;
    updateGameStatus();
    updateResume();
});

document.getElementById('reject-btn').addEventListener('click', () => {
    rejectedCount++;
    rejectedList.push(resumes[resumeIndex]);
    resumeIndex++;
    updateGameStatus();
    updateResume();
});

function updateGameStatus() {
    countElement.textContent = approvedCount + rejectedCount;
    if (approvedCount + rejectedCount >= totalResumes) {
        showPopup();
    }
}

updateResume();
