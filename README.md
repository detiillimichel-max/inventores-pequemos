# inventores-pequemos
# 🤖 Inventores Mirins - O Jogo (v2)

> Jogo educativo em HTML/CSS/JS. Monte 20 projetos de robótica infantil peça por peça, comprando na loja e evitando as armadilhas. Baseado no e-book **"20 Projetos de Robótica Infantil - Inventores Mirins"**.

![Jogo](https://img.shields.io/badge/jogo-HTML5-orange) ![PWA](https://img.shields.io/badge/PWA-offline-blue) ![Vidas](https://img.shields.io/badge/vidas-3-red)

**▶️ Jogar:** https://seuusuario.github.io/inventores-mirins-jogo

---

## 🎮 Como jogar

O usuário entra no jogo, vai para a **Loja de Peças** e monta o robô do projeto atual.

1. Veja o nome do projeto, categoria e tempo estimado
2. Role até a Loja e toque em **"Comprar"**
3. **Peça correta**: encaixa na Bancada com animação (+10 pontos)
4. **Peça errada (decoy)**: perde 1 vida 🔋 — nada encaixa
5. **Pode errar três vezes**. Na 4ª, com zero vidas → **Game Over e volta do zero**
6. Preencha todos os slots ❔ e toque em **"Concluir Projeto"**

### 🖼️ Visual da Bancada
- Slots vazios: pontilhados com ❔
- Peça correta: ícone temático (🔋 💡 ⚙️ ☀️ 🪵) + nome
- Bancada completa: borda verde brilhante ✅ com animação

## 🪙 Moedas e Pontuação
- Começa com **30 moedas**
- Peça correta: **+10 pontos**
- Projeto concluído: **+50 × fase** pontos + **10 + 2×fase** moedas
- Pacotes da loja (não custam vidas):
    - **Pequeno (15🪙)**: 2 peças corretas (+5 pts cada)
    - **Grande (35🪙)**: 5 peças corretas (+5 pts cada)

## ❌ Peças Erradas (Decoys)
A loja mistura itens inúteis para confundir:
`🍴 Garfo de plástico`, `🧦 Meia furada`, `🥄 Colher`, `🧻 Papel higiênico`...

Quanto mais avançada a fase, mais decoys aparecem.

## 🔋 Vidas
- 3 baterias no início
- Cada erro = -1 bateria
- 0 baterias = **Curto-Circuito!** → pontuação, fase e moedas resetam

## 🔁 Ciclo / Loop
Ao completar os 20 projetos:
- Tela **"Mestre Inventor" 🏆**
- Ao continuar, recomeça do Projeto 1 com posições embaralhadas e novos decoys
- Pontuação continua acumulando

## 📋 Os 20 Projetos
1. Circuito Simples
2. LED Throwie
3. Circuito em Série
4. Circuito Paralelo
5. Luz Noturna com Formato de Robô
6. Motor Homopolar
7. Robô Rabiscador
8. Robô Dançante Solar
9. Robô Sapo Saltador
10. Orbitador Móvel Solar
11. Droide PB-D2
12. Robô de Efeitos Sonoros
13. Robô que Desafia a Gravidade
14. Circuito de LED com Placa de Testes
15. Robô Varredor
16. Barco Solar
17. Robô Detector de Penhasco
18. Robô de Quatro Pernas
19. Robô Hexápode
20. Robô Bípede

## 📂 Arquivos
© 2026 Michel Detilli.
Todos os direitos reservados. 
É permitido jogar online. É proibida a cópia, distribuição ou uso comercial do código sem autorização
