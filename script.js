const questions = [
    {
        q: "1. 周末不上班，你通常几点起床？",
        options: [
            { type: "A", text: "A. 7点自然醒，开始规划高效一天" },
            { type: "B", text: "B. 睡到中午，床以外都是外省" },
            { type: "C", text: "C. 随缘，取决于肚子什么时候饿" }
        ]
    },
    {
        q: "2. 突然被通知加班，你的第一反应？",
        options: [
            { type: "A", text: "A. 收到！立刻打开电脑干活" },
            { type: "B", text: "B. 表面答应，心里已经骂了千百遍" },
            { type: "C", text: "C. 直接消失，假装没看到消息" }
        ]
    },
    {
        q: "3. 朋友聚会选餐厅，你最看重什么？",
        options: [
            { type: "A", text: "A. 环境高大上，适合拍照发朋友圈" },
            { type: "B", text: "B. 味道绝辣绝香，破烂苍蝇馆子也行" },
            { type: "C", text: "C. 离家近，最好出门走两步就到" }
        ]
    },
    {
        q: "4. 路上遇到可爱的猫狗，你会？",
        options: [
            { type: "A", text: "A. 掏出手机狂拍，默默夹音打招呼" },
            { type: "B", text: "B. 直接上手摸，试图跟它聊天" },
            { type: "C", text: "C. 远远看一眼，不打扰它的清净" }
        ]
    },
    {
        q: "5. 压力大的时候，你最想怎么泄愤？",
        options: [
            { type: "A", text: "A. 去KTV飙高音或者疯狂做运动" },
            { type: "B", text: "B. 找个夜市/烧烤摊狂吃大喝一顿" },
            { type: "C", text: "C. 戴上耳机躲进房间，谁也别烦我" }
        ]
    },
    {
        q: "6. 你理想中的社交状态是？",
        options: [
            { type: "A", text: "A. 天天有局，到处都是我的好哥们" },
            { type: "B", text: "B. 三五知己，偶尔聚聚打麻将喝茶" },
            { type: "C", text: "C. 独来独往，保持礼貌的社交距离" }
        ]
    },
    {
        q: "7. 旅游时，你的行程风格是？",
        options: [
            { type: "A", text: "A. 精确到分钟，打卡所有热门景点" },
            { type: "B", text: "B. 毫无计划，走到哪算哪、睡醒再说" },
            { type: "C", text: "C. 钻进老街巷子，只找本地人吃的店" }
        ]
    },
    {
        q: "8. 假如手里有一笔闲钱，你会？",
        options: [
            { type: "A", text: "A. 理财投资，或者买心仪的高科技" },
            { type: "B", text: "B. 顿顿吃大餐，把生活质量拉满" },
            { type: "C", text: "C. 攒起来，给未来攒够退路资金" }
        ]
    }
];

const cityDatabase = {
    A: {
        city: "上海 / 深圳",
        title: "【极致卷王 · 现代都市野心家】",
        match: "99.2%",
        desc: "你的骨子里流动着高效与追求极致的基因！对于你来说，平庸就是最大的惩罚。你喜欢精致的生活、高品质的社交与清晰的边界感。这座城市的霓虹与繁华，就是你野心的最好载体。",
        radar: [40, 65, 90, 95, 60],
        spot: "陆家嘴夜景 / 深圳湾科技园",
        cure: "冰美式 + 账户里的投资收益",
        taboo: "在工作时间聊没有逻辑的闲话",
        bestPartner: "成都（帮你在高压下找回生活）",
        worstPartner: "大理（你会嫌弃它节奏太慢）"
    },
    B: {
        city: "成都 / 长沙",
        title: "【快乐大亨 · 终极生活享受家】",
        match: "98.7%",
        desc: "内卷是不可能内卷的，这辈子都不可能！你的灵魂自带麻辣鲜香的味道，快乐永远是你人生的第一指标。只要有美食、朋友与好酒，天塌下来你也能先吃完这顿烧烤再说。",
        radar: [95, 98, 85, 35, 50],
        spot: "五一广场夜市 / 玉林路苍蝇馆子",
        cure: "红油火锅 + 冰粉 + 朋友的龙门阵",
        taboo: "休假期间讨论工作 KPI",
        bestPartner: "重庆（一起吃遍大江南北）",
        worstPartner: "深圳（看到他还在加班你会窒息）"
    },
    C: {
        city: "大理 / 厦门",
        title: "【精神逃荒者 · 浪漫主义灵魂】",
        match: "97.9%",
        desc: "你有一种天生的避世感与艺术气质。比起人潮汹涌的网红景点，你更喜欢角落里的独立咖啡馆或者海边的晚风。你不崇拜强者，你只崇拜自由，你的精神籍贯早已扎根在这片风花雪月中。",
        radar: [90, 50, 40, 20, 95],
        spot: "洱海生态廊道 / 鼓浪屿无名小巷",
        cure: "落日晚风 + 戴上耳机听民谣",
        taboo: "逼你做强社交和打卡式旅游",
        bestPartner: "杭州（懂得你内心的小感伤）",
        worstPartner: "北京（空气中的焦虑会打碎你的梦）"
    },
    MIXED: {
        city: "广州 / 杭州",
        title: "【人间清醒 · 卷舒自如调和大师】",
        match: "98.5%",
        desc: "你兼具了工作时的拼劲与生活中的烟火气！既能在职场上独当一面，又能在下班后换上拖鞋去老街吃一碗早茶。你懂平衡、懂生活，是典型的‘人间清醒’。",
        radar: [75, 85, 70, 70, 75],
        spot: "西湖边喝茶 / 淘金老街吃老字号",
        cure: "广式老火靓汤 + 周末睡到自然醒",
        taboo: "没有好吃的东西还假装高端的餐厅",
        bestPartner: "上海（工作默契，生活互补）",
        worstPartner: "无（你和所有城市都能打成一片）"
    }
};

let currentQuestionIndex = 0;
let userAnswers = [];

const pageCover = document.getElementById("page-cover");
const pageQuiz = document.getElementById("page-quiz");
const pageResult = document.getElementById("page-result");

function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    pageCover.classList.add("hidden");
    pageResult.classList.add("hidden");
    pageQuiz.classList.remove("hidden");
    pageQuiz.classList.add("flex");
    renderQuestion();
}

function renderQuestion() {
    const qData = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById("quiz-progress-text").innerText = `问题 ${currentQuestionIndex + 1} / ${questions.length}`;
    document.getElementById("quiz-progress-percent").innerText = `${Math.round(progress)}%`;
    document.getElementById("quiz-progress-bar").style.width = `${progress}%`;

    document.getElementById("prev-btn").disabled = currentQuestionIndex === 0;
    document.getElementById("question-text").innerText = qData.q;

    const container = document.getElementById("options-container");
    container.innerHTML = "";

    qData.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn w-full p-4 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 text-left text-sm font-medium text-gray-100 flex items-center justify-between group transition-all";
        btn.onclick = () => selectOption(opt.type);

        btn.innerHTML = `
            <span>${opt.text}</span>
            <i class="fa-regular fa-circle text-gray-400 group-hover:text-cyan-400 transition-colors"></i>
        `;
        container.appendChild(btn);
    });
}

function selectOption(type) {
    userAnswers[currentQuestionIndex] = type;

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function showResult() {
    pageQuiz.classList.add("hidden");
    pageQuiz.classList.remove("flex");
    pageResult.classList.remove("hidden");
    pageResult.classList.add("flex");

    const counts = { A: 0, B: 0, C: 0 };
    userAnswers.forEach(ans => counts[ans] = (counts[ans] || 0) + 1);

    let resultData;
    if (counts.A >= 4) {
        resultData = cityDatabase.A;
    } else if (counts.B >= 4) {
        resultData = cityDatabase.B;
    } else if (counts.C >= 4) {
        resultData = cityDatabase.C;
    } else {
        resultData = cityDatabase.MIXED;
    }

    document.getElementById("result-city").innerText = resultData.city;
    document.getElementById("result-title").innerText = resultData.title;
    document.getElementById("match-score").innerText = resultData.match;
    document.getElementById("result-desc").innerText = resultData.desc;

    document.getElementById("guide-spot").innerText = resultData.spot;
    document.getElementById("guide-cure").innerText = resultData.cure;
    document.getElementById("guide-taboo").innerText = resultData.taboo;

    document.getElementById("partner-best").innerText = resultData.bestPartner;
    document.getElementById("partner-worst").innerText = resultData.worstPartner;

    setTimeout(() => {
        drawRadarChart(resultData.radar);
    }, 100);
}

function restartQuiz() {
    pageResult.classList.add("hidden");
    pageResult.classList.remove("flex");
    pageCover.classList.remove("hidden");
    pageCover.classList.add("flex");
}

function drawRadarChart(dataValues) {
    const canvas = document.getElementById("radarChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 35;

    const labels = ["松弛指数", "烟火气", "社交属性", "奋斗欲", "文艺感"];
    const numSides = labels.length;
    const angleStep = (Math.PI * 2) / numSides;

    ctx.clearRect(0, 0, width, height);

    const levels = 4;
    for (let level = 1; level <= levels; level++) {
        const currentRadius = (radius / levels) * level;
        ctx.beginPath();
        for (let i = 0; i < numSides; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = centerX + currentRadius * Math.cos(angle);
            const y = centerY + currentRadius * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    ctx.font = "11px sans-serif";
    ctx.fillStyle = "#cbd5e1";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < numSides; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        ctx.stroke();

        const labelX = centerX + (radius + 20) * Math.cos(angle);
        const labelY = centerY + (radius + 15) * Math.sin(angle);
        ctx.fillText(labels[i], labelX, labelY);
    }

    ctx.beginPath();
    for (let i = 0; i < numSides; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const valueRatio = dataValues[i] / 100;
        const x = centerX + radius * valueRatio * Math.cos(angle);
        const y = centerY + radius * valueRatio * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();

    const gradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, radius);
    gradient.addColorStop(0, "rgba(236,72,153,0.6)");
    gradient.addColorStop(1, "rgba(56,189,248,0.4)");
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.strokeStyle = "#f43f5e";
    ctx.lineWidth = 2;
    ctx.stroke();

    for (let i = 0; i < numSides; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const valueRatio = dataValues[i] / 100;
        const x = centerX + radius * valueRatio * Math.cos(angle);
        const y = centerY + radius * valueRatio * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.strokeStyle = "#f43f5e";
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
}

function shareOrSave() {
    showToast("测试结果已锁定！截图即可分享到朋友圈/小红书");
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.classList.remove("opacity-0", "pointer-events-none");
    setTimeout(() => {
        toast.classList.add("opacity-0", "pointer-events-none");
    }, 2500);
}