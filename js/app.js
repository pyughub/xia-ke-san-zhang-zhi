(function () {
  'use strict';

  var STORAGE_KEY = 'notes_three_papers';

  var SAMPLES = [
    {
      id: 'calc',
      label: '高数 · 导数',
      title: '高数 · 导数',
      source: [
        '今天讲导数。导数描述的是函数在某一点的瞬时变化率。',
        '定义：f\'(x0) = lim(Δx→0) [f(x0+Δx)-f(x0)]/Δx',
        '几何意义：导数是曲线在该点处切线的斜率。',
        '物理意义：位移对时间的导数是瞬时速度。',
        '可导一定连续，连续不一定可导。',
        '为什么左导数和右导数都存在，函数还可能不可导？',
        '课上那个 |x| 在 0 点的例子没太听懂。'
      ].join('\n'),
      pack: {
        knowledge: [
          '导数描述函数在某一点的瞬时变化率。',
          '可导一定连续，连续不一定可导。',
          '几何上，导数是该点切线的斜率。'
        ],
        formulas: [
          'f\'(x0) = lim(Δx→0) [f(x0+Δx)-f(x0)]/Δx',
          '位移对时间求导 = 瞬时速度'
        ],
        doubts: [
          '为什么左右导数都存在，函数还可能不可导？',
          '|x| 在 0 点为什么不可导？'
        ],
        quiz: [
          {
            q: '下面哪句是对的？',
            choices: ['连续一定可导', '可导一定连续', '不可导就一定不连续'],
            answer: 1,
            why: '可导能推出连续；反过来不成立，|x| 在 0 点就是反例。'
          },
          {
            q: '导数的几何意义是？',
            choices: ['曲线与 x 轴围成的面积', '该点处切线的斜率', '函数的平均值'],
            answer: 1,
            why: '切线斜率就是导数的几何读法。'
          },
          {
            q: '位移 s(t) 对时间求导，得到的是？',
            choices: ['瞬时速度', '加速度', '路程'],
            answer: 0,
            why: 'v = s\'，再导一次才是加速度。'
          }
        ],
        script: {
          kicker: '这节课其实就三句话。',
          lines: [
            '导数不是平均变化，是某一点的瞬时变化率。',
            '图像上看，它就是那条切线有多陡。',
            '能求导，曲线在这一点一定连着；连着，却不一定能求导。'
          ],
          close: '如果室友只让你留一句：记住 |x| 在原点。'
        }
      }
    },
    {
      id: 'linalg',
      label: '线代 · 线性相关',
      title: '线代 · 线性相关',
      source: [
        '一组向量线性相关，是说存在不全为零的系数，让它们的线性组合等于零向量。',
        '如果只有零组合才能得到零向量，这组向量就线性无关。',
        '二维平面里，两个共线的向量一定线性相关。',
        '定理：n 个 n 维向量线性无关，当且仅当它们排成的方阵行列式不为 0。',
        'det(A) ≠ 0 ⇔ 列向量组线性无关。',
        '三个二维向量为什么一定线性相关？课堂上那个维数的说法有点乱。'
      ].join('\n'),
      pack: {
        knowledge: [
          '线性相关：存在不全为零的系数，使线性组合为零向量。',
          '只有平凡组合才得到零向量时，称为线性无关。',
          '向量个数超过空间维数时，一定线性相关。'
        ],
        formulas: [
          'c1 v1 + … + ck vk = 0，且 ci 不全为 0 ⇒ 线性相关',
          'det(A) ≠ 0 ⇔ 方阵的列向量线性无关'
        ],
        doubts: [
          '三个二维向量为什么一定线性相关？'
        ],
        quiz: [
          {
            q: '线性相关的意思是？',
            choices: [
              '每个向量都是零向量',
              '存在不全为零的系数，组合结果为零向量',
              '任意两个向量都垂直'
            ],
            answer: 1,
            why: '关键是「不全为零」——有非平凡关系。'
          },
          {
            q: '2 维空间里，3 个向量会怎样？',
            choices: ['一定线性无关', '一定线性相关', '可能无关也可能相关'],
            answer: 1,
            why: '个数大于维数，一定能写出非零组合。'
          },
          {
            q: '方阵 A 的列向量线性无关，等价于？',
            choices: ['det(A) = 0', 'det(A) ≠ 0', 'A 是零矩阵'],
            answer: 1,
            why: '行列式非零就是列满秩。'
          }
        ],
        script: {
          kicker: '线性相关听着吓人，其实是一句话。',
          lines: [
            '有一组合法但不全是零的系数，能把这组向量凑成零，它们就相关。',
            '凑不出来，才叫无关。',
            '人比空间的维数多，一定相关，这就是三个二维向量的秘密。'
          ],
          close: '记行列式：不为零，列向量就站得住。'
        }
      }
    },
    {
      id: 'ai',
      label: '人工智能导论 · 感知机',
      title: '人工智能导论 · 感知机',
      source: [
        '机器学习三要素：模型、策略、算法。',
        '感知机是一个线性分类模型，输出 +1 或 -1。',
        '判别函数：f(x) = sign(w · x + b)',
        '策略：误分类点到超平面的距离之和最小。',
        '算法：随机挑一个误分类点，把 w 和 b 往「纠正」的方向推一小步。',
        '感知机只能分开线性可分的数据。异或为什么分不开？',
        '老师画的那条分界线和支持向量机有什么不一样，没记清。'
      ].join('\n'),
      pack: {
        knowledge: [
          '机器学习三要素是模型、策略、算法。',
          '感知机是线性二分类模型，输出为 +1 或 -1。',
          '它只能处理线性可分的数据。'
        ],
        formulas: [
          'f(x) = sign(w · x + b)',
          '误分类时更新：w ← w + η y x，b ← b + η y'
        ],
        doubts: [
          '异或为什么感知机分不开？',
          '感知机的分界线和 SVM 差在哪？'
        ],
        quiz: [
          {
            q: '感知机的输出是？',
            choices: ['任意实数', '+1 或 -1', '0 到 1 的概率'],
            answer: 1,
            why: '经典感知机做的是符号函数，不是概率。'
          },
          {
            q: '下面哪组数据感知机学不会？',
            choices: ['线性可分的两类点', '异或（XOR）', '一条直线两侧的点'],
            answer: 1,
            why: '异或不是线性可分的。'
          },
          {
            q: '机器学习三要素不包括？',
            choices: ['模型', '算力', '策略'],
            answer: 1,
            why: '李航那本里写的是模型、策略、算法。'
          }
        ],
        script: {
          kicker: '感知机可以当成一根会挪动的直尺。',
          lines: [
            '直尺一边是 +1，一边是 -1。',
            '点站错边，就把直尺往对的方向推一下。',
            '如果两类本来就缠在一起，比如异或，这根尺永远摆不平。'
          ],
          close: '三要素别混：模型是尺子，策略是对错标准，算法是怎么推。'
        }
      }
    }
  ];

  var els = {
    input: document.getElementById('noteInput'),
    title: document.getElementById('noteTitle'),
    make: document.getElementById('makeBtn'),
    sampleBar: document.getElementById('sampleBar'),
    desk: document.getElementById('desk'),
    sheetCards: document.getElementById('sheetCards'),
    sheetQuiz: document.getElementById('sheetQuiz'),
    sheetScript: document.getElementById('sheetScript'),
    deskFoot: document.getElementById('deskFoot'),
    knowList: document.getElementById('knowList'),
    formulaList: document.getElementById('formulaList'),
    doubtList: document.getElementById('doubtList'),
    quizList: document.getElementById('quizList'),
    quizScore: document.getElementById('quizScore'),
    scriptKicker: document.getElementById('scriptKicker'),
    scriptLines: document.getElementById('scriptLines'),
    scriptClose: document.getElementById('scriptClose'),
    timerBtn: document.getElementById('timerBtn'),
    timerReadout: document.getElementById('timerReadout'),
    copyScriptBtn: document.getElementById('copyScriptBtn'),
    saveBtn: document.getElementById('saveBtn'),
    saveMsg: document.getElementById('saveMsg'),
    archiveToggle: document.getElementById('archiveToggle'),
    archivePanel: document.getElementById('archivePanel'),
    archiveClose: document.getElementById('archiveClose'),
    archiveList: document.getElementById('archiveList'),
    archiveCount: document.getElementById('archiveCount'),
    shotBtn: document.getElementById('shotBtn'),
    albumBtn: document.getElementById('albumBtn'),
    talkBtn: document.getElementById('talkBtn'),
    audioFileBtn: document.getElementById('audioFileBtn'),
    shotInput: document.getElementById('shotInput'),
    albumInput: document.getElementById('albumInput'),
    audioInput: document.getElementById('audioInput'),
    captureStatus: document.getElementById('captureStatus'),
    clipRow: document.getElementById('clipRow')
  };

  var state = {
    current: null,
    answers: [],
    timerId: null,
    remain: 60,
    clips: [],
    talking: false,
    recognition: null,
    ocrBusy: false,
    ocrWorker: null,
    mediaRecorder: null,
    audioStream: null,
    audioChunks: []
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function loadArchive() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  function saveArchive(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function isDoubt(line) {
    return /[？?]/.test(line) || /为什么|如何|怎么|不懂|没听懂|没太听懂|听不懂|没记清|有点乱/.test(line);
  }

  function isFormula(line) {
    return /[=≠≈≤≥∑∫√]|det\(|lim|→|f\(|w\s*←|线性组合|公式|定义：/.test(line) ||
      /\b[a-zA-Z]'?\(/.test(line);
  }

  function cleanLine(line) {
    return line.replace(/^[\d一二三四五六七八九十]+[、.\s]*/, '').trim();
  }

  function unique(list) {
    var seen = {};
    return list.filter(function (item) {
      if (seen[item] || !item) return false;
      seen[item] = true;
      return true;
    });
  }

  function take(list, n, fallback) {
    var out = list.slice(0, n);
    while (out.length < n) out.push(fallback);
    return out;
  }

  function inferPack(text) {
    var lines = text.split(/\n+/).map(cleanLine).filter(function (line) {
      return line.length >= 4;
    });
    var knowledge = [];
    var formulas = [];
    var doubts = [];

    lines.forEach(function (line) {
      if (isDoubt(line)) doubts.push(line);
      else if (isFormula(line)) formulas.push(line);
      else knowledge.push(line);
    });

    knowledge = unique(knowledge);
    formulas = unique(formulas);
    doubts = unique(doubts);

    if (!knowledge.length && lines.length) knowledge = lines.slice(0, 3);
    if (!formulas.length) formulas = ['这节课没有单独抽出公式，先把上面的判断句当定义看。'];
    if (!doubts.length) doubts = ['把最含糊的那一句标出来，下节课问老师。'];

    var quizSeeds = knowledge.concat(formulas).slice(0, 3);
    var quiz = quizSeeds.map(function (seed, index) {
      var brief = seed.length > 22 ? seed.slice(0, 22) + '…' : seed;
      var rotated = rotateChoices([
        seed,
        '这句是干扰项，课上没有这样下结论。',
        '把定义和例子反过来记了。'
      ], index);
      return {
        q: '关于这节课，哪一句更接近笔记？',
        choices: rotated.choices,
        answer: rotated.answer,
        why: '对照原句：' + brief
      };
    });

    while (quiz.length < 3) {
      quiz.push({
        q: '整理笔记时，最该单独留住的是？',
        choices: ['定义和自己的疑问', '只抄板书上的装饰性箭头', '把整页手机相册存下来就行'],
        answer: 0,
        why: '能复述定义、能问出疑问，这节课才算带走了。'
      });
    }

    var spoken = take(knowledge, 3, '这节课还有一句，下课后再补进卡片。');
    return {
      knowledge: take(knowledge, 4, '').filter(Boolean),
      formulas: take(formulas, 3, '').filter(Boolean),
      doubts: take(doubts, 3, '').filter(Boolean),
      quiz: quiz.slice(0, 3),
      script: {
        kicker: '用一分钟讲给室友，不看稿也该能顺下来。',
        lines: spoken,
        close: '讲完问一句：你听懂了哪一句，哪一句还糊。'
      }
    };
  }

  function rotateChoices(choices, offset) {
    var copy = choices.slice();
    var correct = copy[0];
    for (var i = 0; i < offset % copy.length; i++) copy.push(copy.shift());
    return {
      choices: copy,
      answer: copy.indexOf(correct)
    };
  }

  function normalizeQuiz(quiz) {
    return quiz.map(function (item, index) {
      if (item.choices && typeof item.answer === 'number') return item;
      var rotated = rotateChoices(item.choices || item.raw, index);
      return {
        q: item.q,
        choices: rotated.choices,
        answer: rotated.answer,
        why: item.why
      };
    });
  }

  function findSample(id) {
    for (var i = 0; i < SAMPLES.length; i++) {
      if (SAMPLES[i].id === id) return SAMPLES[i];
    }
    return null;
  }

  function renderList(node, items) {
    if (!items || !items.length) {
      node.innerHTML = '<li class="empty-slot">这一栏暂时空着</li>';
      return;
    }
    node.innerHTML = items.map(function (item) {
      return '<li>' + escapeHtml(item) + '</li>';
    }).join('');
  }

  function renderQuiz(quiz) {
    state.answers = quiz.map(function () { return null; });
    els.quizScore.textContent = '0 / 3';
    els.quizList.innerHTML = quiz.map(function (item, qi) {
      var buttons = item.choices.map(function (choice, ci) {
        return '<button type="button" class="choice" data-q="' + qi + '" data-c="' + ci + '">' +
          escapeHtml(choice) + '</button>';
      }).join('');
      return '<li class="quiz-item">' +
        '<p>' + (qi + 1) + '. ' + escapeHtml(item.q) + '</p>' +
        '<div class="choices">' + buttons + '</div>' +
        '<p class="explain" id="why-' + qi + '" hidden></p>' +
        '</li>';
    }).join('');
  }

  function renderScript(script) {
    els.scriptKicker.textContent = script.kicker;
    els.scriptClose.textContent = script.close;
    els.scriptLines.innerHTML = script.lines.map(function (line) {
      return '<p>' + escapeHtml(line) + '</p>';
    }).join('');
    resetTimer(true);
  }

  function showPack(pack) {
    els.desk.dataset.empty = 'false';
    els.sheetCards.hidden = false;
    els.sheetQuiz.hidden = false;
    els.sheetScript.hidden = false;
    els.deskFoot.hidden = false;
    els.saveMsg.hidden = true;
    renderList(els.knowList, pack.knowledge);
    renderList(els.formulaList, pack.formulas);
    renderList(els.doubtList, pack.doubts);
    renderQuiz(normalizeQuiz(pack.quiz));
    renderScript(pack.script);
  }

  function makePapers() {
    var text = els.input.value.trim();
    if (!text) {
      els.input.focus();
      return;
    }
    var sample = null;
    SAMPLES.forEach(function (item) {
      if (item.source === text) sample = item;
    });
    var title = els.title.value.trim() || (sample ? sample.title : '未命名笔记');
    var pack = sample ? sample.pack : inferPack(text);
    state.current = {
      title: title,
      source: text,
      pack: pack
    };
    showPack(pack);
  }

  function onQuizClick(event) {
    var btn = event.target.closest('.choice');
    if (!btn || !state.current) return;
    var qi = Number(btn.getAttribute('data-q'));
    var ci = Number(btn.getAttribute('data-c'));
    if (state.answers[qi] !== null) return;

    var item = state.current.pack.quiz[qi];
    var correct = item.answer;
    state.answers[qi] = ci;
    var group = els.quizList.querySelectorAll('.choice[data-q="' + qi + '"]');
    group.forEach(function (node) {
      var index = Number(node.getAttribute('data-c'));
      if (index === correct) node.setAttribute('data-state', 'right');
      else if (index === ci) node.setAttribute('data-state', 'wrong');
    });
    var why = document.getElementById('why-' + qi);
    why.hidden = false;
    why.textContent = item.why;
    var score = state.answers.filter(function (ans, index) {
      return ans === state.current.pack.quiz[index].answer;
    }).length;
    els.quizScore.textContent = score + ' / 3';
  }

  function resetTimer(silent) {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
    state.remain = 60;
    els.timerReadout.textContent = '1:00';
    els.timerReadout.classList.remove('is-low');
    els.timerBtn.textContent = '开始 60 秒';
    if (!silent) els.timerReadout.textContent = '1:00';
  }

  function tick() {
    state.remain -= 1;
    if (state.remain <= 0) {
      els.timerReadout.textContent = '0:00';
      els.timerReadout.classList.add('is-low');
      resetTimer(true);
      els.timerBtn.textContent = '再来一遍';
      return;
    }
    var m = Math.floor(state.remain / 60);
    var s = state.remain % 60;
    els.timerReadout.textContent = m + ':' + (s < 10 ? '0' + s : s);
    els.timerReadout.classList.toggle('is-low', state.remain <= 10);
  }

  function toggleTimer() {
    if (state.timerId) {
      resetTimer();
      return;
    }
    state.remain = 60;
    els.timerBtn.textContent = '停表';
    state.timerId = setInterval(tick, 1000);
  }

  function scriptText() {
    if (!state.current) return '';
    var script = state.current.pack.script;
    return [script.kicker].concat(script.lines, [script.close]).join('\n');
  }

  function copyScript() {
    var text = scriptText();
    if (!text) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        els.copyScriptBtn.textContent = '已复制';
        setTimeout(function () { els.copyScriptBtn.textContent = '复制口播稿'; }, 1200);
      });
      return;
    }
    window.prompt('复制下面这段', text);
  }

  function refreshArchive() {
    var list = loadArchive();
    els.archiveCount.textContent = String(list.length);
    if (!list.length) {
      els.archiveList.innerHTML = '<li class="empty-slot">还没有存档。做成三张纸之后再点「存进本周」。</li>';
      return;
    }
    els.archiveList.innerHTML = list.map(function (item) {
      return '<li><button type="button" data-id="' + escapeHtml(item.id) + '">' +
        '<strong>' + escapeHtml(item.title) + '</strong>' +
        '<time>' + escapeHtml(item.savedAt) + '</time></button></li>';
    }).join('');
  }

  function saveCurrent() {
    if (!state.current) return;
    var list = loadArchive();
    list.unshift({
      id: String(Date.now()),
      title: state.current.title,
      source: state.current.source,
      pack: state.current.pack,
      savedAt: new Date().toLocaleString('zh-CN', { hour12: false })
    });
    saveArchive(list.slice(0, 20));
    refreshArchive();
    els.saveMsg.hidden = false;
  }

  function openArchive(open) {
    els.archivePanel.hidden = !open;
    els.archiveToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function restoreArchive(id) {
    var item = loadArchive().filter(function (row) { return row.id === id; })[0];
    if (!item) return;
    els.input.value = item.source;
    els.title.value = item.title;
    state.current = { title: item.title, source: item.source, pack: item.pack };
    showPack(item.pack);
    openArchive(false);
  }

  function paintSamples() {
    els.sampleBar.innerHTML = SAMPLES.map(function (item) {
      return '<button type="button" class="sample" data-sample="' + item.id + '">' +
        escapeHtml(item.label) + '</button>';
    }).join('');
  }

  function selectSample(id) {
    var sample = findSample(id);
    if (!sample) return;
    els.input.value = sample.source;
    els.title.value = sample.title;
    Array.prototype.forEach.call(els.sampleBar.querySelectorAll('.sample'), function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-sample') === id ? 'true' : 'false');
    });
  }

  els.sampleBar.addEventListener('click', function (event) {
    var btn = event.target.closest('[data-sample]');
    if (btn) selectSample(btn.getAttribute('data-sample'));
  });
  els.make.addEventListener('click', makePapers);
  els.quizList.addEventListener('click', onQuizClick);
  els.timerBtn.addEventListener('click', toggleTimer);
  els.copyScriptBtn.addEventListener('click', copyScript);
  els.saveBtn.addEventListener('click', saveCurrent);
  els.archiveToggle.addEventListener('click', function () {
    openArchive(els.archivePanel.hidden);
  });
  els.archiveClose.addEventListener('click', function () { openArchive(false); });
  els.archiveList.addEventListener('click', function (event) {
    var btn = event.target.closest('[data-id]');
    if (btn) restoreArchive(btn.getAttribute('data-id'));
  });

  function setCaptureStatus(text, warn) {
    els.captureStatus.hidden = !text;
    els.captureStatus.textContent = text || '';
    els.captureStatus.classList.toggle('is-warn', !!warn);
  }

  function tidyOcr(text) {
    return String(text || '')
      .replace(/([\u4e00-\u9fff])\s+(?=[\u4e00-\u9fff])/g, '$1')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function appendNote(text) {
    var chunk = String(text || '').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
    if (!chunk) return;
    var cur = els.input.value.replace(/\s+$/, '');
    els.input.value = cur ? cur + '\n' + chunk : chunk;
  }

  function renderClips() {
    if (!state.clips.length) {
      els.clipRow.hidden = true;
      els.clipRow.innerHTML = '';
      return;
    }
    els.clipRow.hidden = false;
    els.clipRow.innerHTML = state.clips.map(function (clip) {
      if (clip.kind === 'image') {
        return '<div class="clip">' +
          '<img alt="" src="' + clip.url + '">' +
          '<button type="button" data-clip="' + clip.id + '">去掉</button></div>';
      }
      return '<div class="clip clip-audio">' +
        '<audio controls src="' + clip.url + '"></audio>' +
        '<button type="button" data-clip="' + clip.id + '">去掉</button></div>';
    }).join('');
  }

  function addClip(kind, file, url) {
    state.clips.push({
      id: String(Date.now()) + Math.random().toString(16).slice(2),
      kind: kind,
      name: file.name,
      url: url
    });
    renderClips();
  }

  var OCR = {
    scripts: [
      'vendor/tesseract/tesseract.min.js',
      'https://unpkg.com/tesseract.js@5.1.1/dist/tesseract.min.js',
      'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js'
    ],
    workerPath: 'vendor/tesseract/worker.min.js',
    corePath: 'vendor/tesseract/tesseract-core.wasm.js',
    langPath: 'vendor/tesseract'
  };

  function absUrl(path) {
    return new URL(path, window.location.href).href;
  }

  function ensureTesseract(done) {
    if (window.Tesseract) {
      done();
      return;
    }
    var index = 0;
    function fail() {
      fetch(OCR.scripts[0]).then(function (res) { return res.text(); }).then(function (code) {
        var script = document.createElement('script');
        script.text = code;
        document.head.appendChild(script);
        if (window.Tesseract) done();
        else done(new Error('load'));
      }).catch(function () { done(new Error('load')); });
    }
    function tryNext() {
      if (index >= OCR.scripts.length) {
        fail();
        return;
      }
      var script = document.createElement('script');
      script.src = OCR.scripts[index++];
      script.async = true;
      script.onload = function () { done(); };
      script.onerror = function () { tryNext(); };
      document.head.appendChild(script);
    }
    tryNext();
  }

  function downscaleImage(file, maxEdge, done) {
    var url = URL.createObjectURL(file);
    var img = new Image();
    img.onload = function () {
      var width = img.width;
      var height = img.height;
      var scale = Math.min(1, maxEdge / Math.max(width, height));
      var canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(width * scale));
      canvas.height = Math.max(1, Math.round(height * scale));
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob(function (blob) {
        done(blob || file);
      }, 'image/jpeg', 0.86);
    };
    img.onerror = function () {
      URL.revokeObjectURL(url);
      done(file);
    };
    img.src = url;
  }

  function readPhoto(file) {
    if (!file || !file.type || file.type.indexOf('image/') !== 0) {
      setCaptureStatus('请选一张板书或笔记照片。', true);
      return;
    }
    if (state.ocrBusy) return;
    state.ocrBusy = true;
    els.shotBtn.disabled = true;
    els.albumBtn.disabled = true;
    var preview = URL.createObjectURL(file);
    addClip('image', file, preview);
    setCaptureStatus('正在识别板书上的字，第一次会下载字库，稍等片刻…');
    ensureTesseract(function (err) {
      if (err || !window.Tesseract) {
        state.ocrBusy = false;
        els.shotBtn.disabled = false;
        els.albumBtn.disabled = false;
        setCaptureStatus('识别库没加载成功。可检查网络，或把字打进输入框。', true);
        return;
      }
      downscaleImage(file, 1600, function (blob) {
        var options = {
          workerPath: absUrl(OCR.workerPath),
          corePath: absUrl(OCR.corePath),
          langPath: absUrl(OCR.langPath),
          logger: function (msg) {
            if (!msg) return;
            if (msg.status === 'recognizing text' && msg.progress != null) {
              setCaptureStatus('正在识别板书… ' + Math.round(msg.progress * 100) + '%');
            } else if (msg.status && msg.status.indexOf('download') !== -1) {
              setCaptureStatus('正在下载中文字库…');
            }
          }
        };
        var ready = state.ocrWorker ?
          Promise.resolve(state.ocrWorker) :
          window.Tesseract.createWorker('chi_sim', 1, options);
        ready.then(function (worker) {
          state.ocrWorker = worker;
          return worker.recognize(blob);
        }).then(function (result) {
          var text = tidyOcr(result && result.data ? result.data.text : '');
          appendNote(text);
          setCaptureStatus(text && text.trim() ?
            '板书已写入输入框，认错的字可以直接改。' :
            '这张照片里没认出字，换一张更清楚的再试。', !text || !text.trim());
        }).catch(function () {
          setCaptureStatus('这张照片识别失败，换一张或改用打字。', true);
        }).then(function () {
          state.ocrBusy = false;
          els.shotBtn.disabled = false;
          els.albumBtn.disabled = false;
        });
      });
    });
  }

  function SpeechCtor() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
  }

  function stopTalking() {
    state.talking = false;
    els.talkBtn.setAttribute('aria-pressed', 'false');
    els.talkBtn.textContent = '口述笔记';
    if (state.recognition) {
      try { state.recognition.stop(); } catch (e) {}
    }
    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
      try { state.mediaRecorder.stop(); } catch (e) {}
    } else if (state.audioStream) {
      state.audioStream.getTracks().forEach(function (track) { track.stop(); });
      state.audioStream = null;
    }
    state.mediaRecorder = null;
  }

  function startTalking() {
    var Ctor = SpeechCtor();
    if (!Ctor) {
      setCaptureStatus('当前浏览器不支持口述转写。请用 Chrome / Edge，或改用打字、拍照。', true);
      return;
    }
    var rec = new Ctor();
    rec.lang = 'zh-CN';
    rec.continuous = true;
    rec.interimResults = true;
    rec.onresult = function (event) {
      var interim = '';
      var finals = [];
      for (var i = event.resultIndex; i < event.results.length; i++) {
        var piece = event.results[i][0].transcript;
        if (event.results[i].isFinal) finals.push(piece);
        else interim += piece;
      }
      if (finals.length) appendNote(finals.join(''));
      setCaptureStatus(interim ? '正在听：' + interim : '正在听，讲完再点一次「停口述」。');
    };
    rec.onerror = function (event) {
      if (event.error === 'not-allowed') {
        setCaptureStatus('没有麦克风权限。请在浏览器地址栏允许后重试。', true);
      } else if (event.error !== 'aborted' && event.error !== 'no-speech') {
        setCaptureStatus('口述中断了，再点一次「口述笔记」。', true);
      }
      stopTalking();
    };
    rec.onend = function () {
      if (state.talking) {
        try { rec.start(); } catch (e) { stopTalking(); }
      }
    };
    state.recognition = rec;
    state.talking = true;
    els.talkBtn.setAttribute('aria-pressed', 'true');
    els.talkBtn.textContent = '停口述';
    setCaptureStatus('正在听，用普通话把板书或疑问讲出来。');

    function beginSpeech() {
      try {
        rec.start();
      } catch (e) {
        stopTalking();
        setCaptureStatus('没法打开麦克风，请换 Chrome 或检查权限。', true);
      }
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        state.audioStream = stream;
        state.audioChunks = [];
        var mime = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : '';
        var recorder = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
        recorder.ondataavailable = function (event) {
          if (event.data && event.data.size) state.audioChunks.push(event.data);
        };
        recorder.onstop = function () {
          if (state.audioStream) {
            state.audioStream.getTracks().forEach(function (track) { track.stop(); });
            state.audioStream = null;
          }
          if (!state.audioChunks.length) return;
          var blob = new Blob(state.audioChunks, { type: recorder.mimeType || 'audio/webm' });
          addClip('audio', new File([blob], '口述.webm', { type: blob.type }), URL.createObjectURL(blob));
        };
        state.mediaRecorder = recorder;
        recorder.start();
        beginSpeech();
      }).catch(function () {
        beginSpeech();
      });
      return;
    }
    beginSpeech();
  }

  function toggleTalking() {
    if (state.talking) {
      stopTalking();
      setCaptureStatus('口述已停，字在输入框里，可以改。');
      return;
    }
    startTalking();
  }

  function readAudio(file) {
    var isAudio = (file.type && file.type.indexOf('audio/') === 0) ||
      /\.(mp3|wav|m4a|aac|ogg|webm)$/i.test(file.name || '');
    if (!isAudio) {
      setCaptureStatus('请选一段音频。', true);
      return;
    }
    addClip('audio', file, URL.createObjectURL(file));
    setCaptureStatus('音频已挂上，可先点播放听一遍。浏览器不能直接把文件转成字，请点「口述笔记」把要点讲进输入框。');
  }

  els.shotBtn.addEventListener('click', function () { els.shotInput.click(); });
  els.albumBtn.addEventListener('click', function () { els.albumInput.click(); });
  els.audioFileBtn.addEventListener('click', function () { els.audioInput.click(); });
  els.talkBtn.addEventListener('click', toggleTalking);
  els.shotInput.addEventListener('change', function () {
    var file = els.shotInput.files && els.shotInput.files[0];
    els.shotInput.value = '';
    if (file) readPhoto(file);
  });
  els.albumInput.addEventListener('change', function () {
    var file = els.albumInput.files && els.albumInput.files[0];
    els.albumInput.value = '';
    if (file) readPhoto(file);
  });
  els.audioInput.addEventListener('change', function () {
    var file = els.audioInput.files && els.audioInput.files[0];
    els.audioInput.value = '';
    if (file) readAudio(file);
  });
  els.clipRow.addEventListener('click', function (event) {
    var btn = event.target.closest('[data-clip]');
    if (!btn) return;
    var id = btn.getAttribute('data-clip');
    state.clips = state.clips.filter(function (clip) {
      if (clip.id === id) {
        URL.revokeObjectURL(clip.url);
        return false;
      }
      return true;
    });
    renderClips();
  });

  paintSamples();
  refreshArchive();
  selectSample('calc');
})();
