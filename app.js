const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
const days=64;let completed=JSON.parse(localStorage.getItem('a2_completed')||'[]');
const words=[['die Ausbildung','training / vocational education'],['der Beruf','profession / occupation'],['die Prüfung','exam'],['lernen','to learn'],['arbeiten','to work'],['bekommen','to receive / get'],['reisen','to travel'],['heiraten','to get married']];
let wi=0;
function save(){localStorage.setItem('a2_completed',JSON.stringify(completed));renderProgress()}
function renderProgress(){$('#progressText').textContent=`${completed.length} / ${days} days` ;$('#progressBar').style.width=(completed.length/days*100)+'%';$('#doneCount').textContent=completed.length;$('#streakCount').textContent=completed.length?completed.length:0}
function show(tab){$$('.view').forEach(v=>v.classList.remove('active'));$('#'+tab).classList.add('active');$$('.tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));}
$$('.tab').forEach(b=>b.onclick=()=>show(b.dataset.tab));
$('#startLesson').onclick=()=>show('teacher');$('#backToday').onclick=()=>show('today');
$('#completeLesson').onclick=()=>{if(!completed.includes(1))completed.push(1);save();$('#completeLesson').textContent='Day 1 completed ✓'};
$('#finishDay').onclick=()=>{$('#completeLesson').click();show('today')};
$('#reset').onclick=()=>{if(confirm('Reset all saved course progress?')){completed=[];save()}};
function renderDays(){$('#lessonList').innerHTML=Array.from({length:days},(_,i)=>{let n=i+1,done=completed.includes(n);return `<div class="day"><div><b>Day ${n} · ${n===1?'Kapitel 1 — Und was machst du?':'A2 guided lesson'}</b><small>${done?'Completed':'60-minute study session'}</small></div><button ${n!==1?'disabled':''} onclick="document.querySelector('[data-tab=today]').click()">${done?'✓ Done':n===1?'Open':'Coming soon'}</button></div>`}).join('')}
function renderWord(){$('#word').textContent=words[wi][0];$('#meaning').textContent=words[wi][1];$('#meaning').classList.add('hidden');$('#reveal').textContent='Reveal meaning';$('#wordCount').textContent=`${wi+1} / ${words.length}`}
$('#reveal').onclick=()=>{$('#meaning').classList.toggle('hidden');$('#reveal').textContent=$('#meaning').classList.contains('hidden')?'Reveal meaning':'Hide meaning'};
$('#nextWord').onclick=()=>{wi=(wi+1)%words.length;renderWord()};$('#prevWord').onclick=()=>{wi=(wi-1+words.length)%words.length;renderWord()};
$('#checkAnswers').onclick=()=>{let a=document.querySelector('input[name=q1]:checked'),b=document.querySelector('input[name=q2]:checked');$('#feedback1').textContent=a?(a.value==='b'?'Correct! “machen” uses haben.':'Not quite. “machen” uses haben.'):'Choose an answer.';$('#feedback2').textContent=b?(b.value==='a'?'Correct! “fahren” uses sein here.':'Not quite. Movement to another place uses sein here.'):'Choose an answer.'};
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
function online(){ $('#offline').textContent=navigator.onLine?'ONLINE · OFFLINE READY':'OFFLINE MODE';}
window.addEventListener('online',online);window.addEventListener('offline',online);online();renderProgress();renderDays();renderWord();