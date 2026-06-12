const projetos = [
 {nome:"Circuito Simples",cat:"EletrÃ´nica",tempo:"15 min",pecas:[{n:"Pilha AA",i:"ðŸ”‹"},{n:"LED",i:"ðŸ’¡"},{n:"Fio",i:"ðŸ”Œ"},{n:"Fita isolante",i:"ðŸ§·"}]},
 {nome:"LED Throwie",cat:"EletrÃ´nica",tempo:"10 min",pecas:[{n:"Pilha moeda",i:"ðŸ”‹"},{n:"LED",i:"ðŸ’¡"},{n:"ÃmÃ£",i:"ðŸ§²"}]},
 {nome:"Circuito em SÃ©rie",cat:"EletrÃ´nica",tempo:"20 min",pecas:[{n:"Pilha AA",i:"ðŸ”‹"},{n:"LED",i:"ðŸ’¡"},{n:"LED",i:"ðŸ’¡"},{n:"Fio",i:"ðŸ”Œ"}]},
 {nome:"Circuito Paralelo",cat:"EletrÃ´nica",tempo:"20 min",pecas:[{n:"Pilha AA",i:"ðŸ”‹"},{n:"LED",i:"ðŸ’¡"},{n:"LED",i:"ðŸ’¡"},{n:"Fio",i:"ðŸ”Œ"},{n:"Interruptor",i:"ðŸŽšï¸"}]},
 {nome:"Luz Noturna RobÃ´",cat:"Criativo",tempo:"25 min",pecas:[{n:"LED",i:"ðŸ’¡"},{n:"Pilha",i:"ðŸ”‹"},{n:"PapelÃ£o",i:"ðŸ“¦"},{n:"Caneta",i:"ðŸ–Šï¸"}]},
 {nome:"Motor Homopolar",cat:"Motores",tempo:"15 min",pecas:[{n:"Pilha AA",i:"ðŸ”‹"},{n:"ÃmÃ£",i:"ðŸ§²"},{n:"Fio cobre",i:"ðŸŒ€"},{n:"Parafuso",i:"ðŸ”©"}]},
 {nome:"RobÃ´ Rabiscador",cat:"RobÃ³tica",tempo:"30 min",pecas:[{n:"Motor DC",i:"âš™ï¸"},{n:"Pilha",i:"ðŸ”‹"},{n:"Canetinhas",i:"ðŸ–ï¸"},{n:"Copo plÃ¡stico",i:"ðŸ¥¤"},{n:"Fita",i:"ðŸ§·"}]},
 {nome:"RobÃ´ DanÃ§ante Solar",cat:"Solar",tempo:"35 min",pecas:[{n:"Painel solar",i:"â˜€ï¸"},{n:"Motor",i:"âš™ï¸"},{n:"PapelÃ£o",i:"ðŸ“¦"},{n:"Palito",i:"ðŸ¥¢"}]},
 {nome:"RobÃ´ Sapo Saltador",cat:"MecÃ¢nica",tempo:"30 min",pecas:[{n:"ElÃ¡stico",i:"âž°"},{n:"PapelÃ£o",i:"ðŸ“¦"},{n:"Clips",i:"ðŸ“Ž"},{n:"Olhos mÃ³veis",i:"ðŸ‘€"}]},
 {nome:"Orbitador MÃ³vel Solar",cat:"Solar",tempo:"40 min",pecas:[{n:"Painel solar",i:"â˜€ï¸"},{n:"Motor",i:"âš™ï¸"},{n:"Rodas",i:"âš™ï¸"},{n:"Base madeira",i:"ðŸªµ"}]},
 {nome:"Droide PB-D2",cat:"RobÃ³tica",tempo:"45 min",pecas:[{n:"Motor",i:"âš™ï¸"},{n:"Pilha",i:"ðŸ”‹"},{n:"Sensor",i:"ðŸ“¡"},{n:"LED",i:"ðŸ’¡"},{n:"PapelÃ£o",i:"ðŸ“¦"}]},
 {nome:"RobÃ´ de Efeitos Sonoros",cat:"Som",tempo:"30 min",pecas:[{n:"Buzzer",i:"ðŸ”Š"},{n:"Pilha",i:"ðŸ”‹"},{n:"Fio",i:"ðŸ”Œ"},{n:"Interruptor",i:"ðŸŽšï¸"}]},
 {nome:"RobÃ´ que Desafia a Gravidade",cat:"FÃ­sica",tempo:"35 min",pecas:[{n:"ÃmÃ£",i:"ðŸ§²"},{n:"Pilha",i:"ðŸ”‹"},{n:"Fio",i:"ðŸ”Œ"},{n:"Base",i:"ðŸªµ"}]},
 {nome:"Circuito LED com Protoboard",cat:"EletrÃ´nica",tempo:"40 min",pecas:[{n:"Protoboard",i:"ðŸ§©"},{n:"LED",i:"ðŸ’¡"},{n:"Resistor",i:"ã€°ï¸"},{n:"Pilha",i:"ðŸ”‹"},{n:"Jumpers",i:"ðŸ”Œ"}]},
 {nome:"RobÃ´ Varredor",cat:"RobÃ³tica",tempo:"45 min",pecas:[{n:"Motor",i:"âš™ï¸"},{n:"Escova",i:"ðŸ§¹"},{n:"Pilha",i:"ðŸ”‹"},{n:"Rodas",i:"âš™ï¸"},{n:"PapelÃ£o",i:"ðŸ“¦"}]},
 {nome:"Barco Solar",cat:"Solar",tempo:"40 min",pecas:[{n:"Painel solar",i:"â˜€ï¸"},{n:"Motor",i:"âš™ï¸"},{n:"HÃ©lice",i:"ðŸŒ€"},{n:"Isopor",i:"ðŸ§½"}]},
 {nome:"RobÃ´ Detector de Penhasco",cat:"Sensores",tempo:"50 min",pecas:[{n:"Sensor IR",i:"ðŸ“¡"},{n:"Motor",i:"âš™ï¸"},{n:"Motor",i:"âš™ï¸"},{n:"Pilha",i:"ðŸ”‹"},{n:"Rodas",i:"âš™ï¸"}]},
 {nome:"RobÃ´ de Quatro Pernas",cat:"RobÃ³tica",tempo:"55 min",pecas:[{n:"Motor",i:"âš™ï¸"},{n:"Motor",i:"âš™ï¸"},{n:"Pilha",i:"ðŸ”‹"},{n:"Palitos",i:"ðŸ¥¢"},{n:"PapelÃ£o",i:"ðŸ“¦"}]},
 {nome:"RobÃ´ HexÃ¡pode",cat:"AvanÃ§ado",tempo:"60 min",pecas:[{n:"Servo",i:"âš™ï¸"},{n:"Servo",i:"âš™ï¸"},{n:"Servo",i:"âš™ï¸"},{n:"Controlador",i:"ðŸŽ›ï¸"},{n:"Pilha",i:"ðŸ”‹"},{n:"Estrutura",i:"ðŸªµ"}]},
 {nome:"RobÃ´ BÃ­pede",cat:"AvanÃ§ado",tempo:"70 min",pecas:[{n:"Servo",i:"âš™ï¸"},{n:"Servo",i:"âš™ï¸"},{n:"Servo",i:"âš™ï¸"},{n:"Servo",i:"âš™ï¸"},{n:"Bateria",i:"ðŸ”‹"},{n:"Placa",i:"ðŸ§©"}]},
];

const decoys = [
 {n:"Garfo de plÃ¡stico",i:"ðŸ´"},{n:"Meia furada",i:"ðŸ§¦"},{n:"Colher",i:"ðŸ¥„"},{n:"Papel higiÃªnico",i:"ðŸ§»"},
 {n:"Sabonete",i:"ðŸ§¼"},{n:"Pente",i:"ðŸª®"},{n:"Chave inglesa",i:"ðŸ”§"},{n:"Pregador",i:"ðŸ“Ž"}
];

let fase=1, pontos=0, moedas=30, vidas=3;
let pecasNecessarias=[], pecasCompradas=[], loja=[];

const el = id=>document.getElementById(id);
function atualizaHUD(){
 el('fase').textContent=fase;
 el('pontos').textContent=pontos;
 el('moedas').textContent=moedas;
 el('vidas').textContent='ðŸ”‹'.repeat(vidas)+'ðŸª«'.repeat(3-vidas);
}
function embaralha(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

function carregaFase(){
 const p = projetos[fase-1];
 el('nome-projeto').textContent=p.nome;
 el('categoria').textContent=p.cat;
 el('tempo').textContent=p.tempo;
 pecasNecessarias = [...p.pecas];
 pecasCompradas = [];
 // cria slots
 const slots = el('slots'); slots.innerHTML='';
 embaralha([...pecasNecessarias]).forEach((_,i)=>{
   const d=document.createElement('div');d.className='slot';d.innerHTML='<div class="icon">â”</div><div class="nome">vazio</div>';d.dataset.idx=i;slots.appendChild(d);
 });
 document.querySelector('.bancada').classList.remove('pronta');
 el('concluir').disabled=true;
 el('mensagem').textContent='';
 montaLoja();
 atualizaHUD();
}

function montaLoja(){
 loja=[];
 // adiciona peÃ§as corretas
 pecasNecessarias.forEach(pc=>loja.push({...pc, correta:true}));
 // adiciona decoys (mais nas fases altas)
 const nDecoy = Math.min(3+Math.floor(fase/3), decoys.length);
 embaralha([...decoys]).slice(0,nDecoy).forEach(d=>loja.push({...d, correta:false}));
 embaralha(loja);
 const cont = el('itens-loja'); cont.innerHTML='';
 loja.forEach((item,idx)=>{
   const div=document.createElement('div');div.className='item';
   div.innerHTML=`<div class="top"><span class="icon">${item.i}</span><strong>${item.n}</strong></div><button data-idx="${idx}">Comprar</button>`;
   cont.appendChild(div);
 });
 cont.querySelectorAll('button').forEach(b=>b.onclick=()=>comprar(parseInt(b.dataset.idx)));
}

function comprar(idx){
 const item = loja[idx];
 if(!item) return;
 // verifica se jÃ¡ comprou essa correta
 if(item.correta){
   // encontra slot vazio correspondente
   const pos = pecasCompradas.length;
   pecasCompradas.push(item);
   pontos+=10;
   // anima slot
   const slot = document.querySelectorAll('.slot')[pos];
   slot.classList.add('preenchido');
   slot.innerHTML=`<div class="icon">${item.i}</div><div class="nome">${item.n}</div>`;
   el('mensagem').textContent=`âœ… ${item.n} encaixou!`;
   // remove da loja
   loja[idx]=null;
   document.querySelector(`button[data-idx="${idx}"]`).disabled=true;
   if(pecasCompradas.length===pecasNecessarias.length){
     document.querySelector('.bancada').classList.add('pronta');
     el('concluir').disabled=false;
     el('mensagem').textContent='Bancada completa! Conclua o projeto.';
   }
 } else {
   vidas--; atualizaHUD();
   el('mensagem').textContent=`âŒ ${item.n} nÃ£o serve! Perdeu 1 vida.`;
   if(vidas<=0){ gameOver(); }
   // desativa botÃ£o
   document.querySelector(`button[data-idx="${idx}"]`).disabled=true;
 }
 atualizaHUD();
}

function gameOver(){
 document.getElementById('gameover').classList.remove('hidden');
}

function concluirProjeto(){
 const bonus = 50*fase;
 pontos += bonus;
 moedas += 10 + 2*fase;
 el('mensagem').textContent=`Projeto concluÃ­do! +${bonus} pontos`;
 if(fase===20){
   document.getElementById('pontos-final').textContent=pontos;
   document.getElementById('vitoria').classList.remove('hidden');
 } else {
   fase++; setTimeout(carregaFase,1200);
 }
 atualizaHUD();
}

function pacote(tipo){
 const custo = tipo==='p'?15:35;
 const qtd = tipo==='p'?2:5;
 if(moedas < custo){el('mensagem').textContent='Moedas insuficientes!';return}
 moedas -= custo;
 // dÃ¡ peÃ§as corretas aleatÃ³rias ainda nÃ£o compradas
 const faltam = pecasNecessarias.filter((_,i)=>i>=pecasCompradas.length);
 embaralha(faltam);
 for(let i=0;i<Math.min(qtd,faltam.length);i++){
   const pc = faltam[i];
   pecasCompradas.push(pc);
   pontos+=5;
   const slot = document.querySelectorAll('.slot')[pecasCompradas.length-1];
   slot.classList.add('preenchido');
   slot.innerHTML=`<div class="icon">${pc.i}</div><div class="nome">${pc.n}</div>`;
 }
 if(pecasCompradas.length===pecasNecessarias.length){
   document.querySelector('.bancada').classList.add('pronta');
   el('concluir').disabled=false;
 }
 atualizaHUD();
 el('mensagem').textContent=`Pacote aberto! +${Math.min(qtd,faltam.length)} peÃ§as`;
}

document.getElementById('concluir').onclick=concluirProjeto;
document.getElementById('pac-peq').onclick=()=>pacote('p');
document.getElementById('pac-gra').onclick=()=>pacote('g');
document.getElementById('reiniciar').onclick=()=>{fase=1;pontos=0;moedas=30;vidas=3;document.getElementById('gameover').classList.add('hidden');carregaFase();};
document.getElementById('continuar').onclick=()=>{document.getElementById('vitoria').classList.add('hidden');fase=1;carregaFase();};

carregaFase();
// PWA
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
