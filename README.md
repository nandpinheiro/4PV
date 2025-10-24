# 💕 Nosso Primeiro Mês - Site Romântico

Um site especial criado para celebrar o primeiro mês de namoro, com uma galeria de fotos, músicas românticas, uma carta de amor e um contador de tempo juntos.

## 🎨 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Efeitos visuais elegantes e interativos
- **Galeria de Fotos**: Exibe as fotos especiais do casal
- **Seção de Músicas**: Playlist romântica com botões interativos
- **Carta de Amor**: Uma carta especial escrita com carinho
- **Contador de Tempo**: Mostra exatamente quanto tempo estão juntos
- **Navegação Suave**: Links internos com scroll suave

## 📁 Estrutura do Projeto

```
site/
├── index.html          # Página principal
├── styles.css          # Estilos CSS organizados
├── script.js           # JavaScript com todas as funcionalidades
├── fotos/              # Pasta com as imagens
│   ├── img1.jpeg
│   ├── img2.jpeg
│   └── img3.jpeg
├── musicas/            # Pasta com arquivos de música
├── .gitignore          # Arquivos ignorados pelo Git
└── README.md           # Este arquivo
```

## 🚀 Como Usar

1. **Clone ou baixe** o projeto
2. **Abra** o arquivo `index.html` em qualquer navegador moderno
3. **Navegue** pelas seções usando o menu superior
4. **Interaja** com os elementos da página

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com animações
- **JavaScript**: Funcionalidades interativas
- **Tailwind CSS**: Framework CSS para design responsivo
- **Google Fonts**: Fontes personalizadas (Dancing Script, Poppins)

## 📸 Imagens

As imagens estão organizadas na pasta `fotos/` e são referenciadas corretamente no HTML. O site está configurado para exibir 3 fotos principais:

- `[img1.jpeg](https://github.com/GustaXH7/sitedela/blob/9f137062cc7f70815d2da32ed9f4dadd5eddf07b/img1.jpeg)` - Primeiro Nascer do Sol
- `[img2.jpeg](https://github.com/GustaXH7/sitedela/blob/9f137062cc7f70815d2da32ed9f4dadd5eddf07b/img2.jpeg)` - Jantar Especial  
- `i[mg3.jpeg](https://github.com/GustaXH7/sitedela/blob/9f137062cc7f70815d2da32ed9f4dadd5eddf07b/img1.jpeg)` - Cinema

## 🎵 Músicas

A seção de músicas inclui uma playlist romântica com reprodução real:
- **Te Vivo** - Luan Santana (Acústico)
- **Superpowers** - Daniel Caesar
- **Vi Amor no Seu Olhar** - Belo

As músicas estão na pasta `musicas/` e podem ser reproduzidas diretamente no site!

## 💝 Personalização

Para personalizar o site:

1. **Substitua as imagens** na pasta `fotos/` pelas suas próprias fotos
2. **Atualize as descrições** das fotos no arquivo `index.html`
3. **Modifique a carta** na seção correspondente
4. **Configure a data do namoro** no arquivo `script.js`:
   ```javascript
   const NAMORO_INICIO = {
       dia: 20,    // Dia do mês
       mes: 7,     // Mês (1-12, onde 1=janeiro, 7=julho)
       ano: 2024   // Ano
   };
   ```
5. **Personalize as cores** editando o arquivo `styles.css`

## 🌐 Deploy no GitHub Pages

### Método 1: Upload Direto (Mais Fácil)
1. **Crie um repositório** no GitHub (público para GitHub Pages gratuito)
2. **Clique em "uploading an existing file"**
3. **Arraste todos os arquivos** da pasta do projeto
4. **Faça commit** com uma mensagem como "Site romântico - Primeiro mês"
5. **Vá em Settings > Pages**
6. **Selecione "Deploy from a branch" > Branch: main**
7. **Aguarde alguns minutos** e acesse o link gerado

### Método 2: Git Command Line
```bash
git init
git add .
git commit -m "Site romântico - Primeiro mês"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

### ⚠️ Importante
- O repositório deve ser **público** para GitHub Pages gratuito
- O arquivo `index.html` deve estar na **raiz** do repositório
- Aguarde 5-10 minutos após o primeiro deploy

## 📱 Compatibilidade

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🎯 Funcionalidades

- [x] Navegação suave entre seções
- [x] Contador de tempo em tempo real
- [x] Animações de corações flutuantes
- [x] Efeitos hover nas fotos
- [x] Botões de música interativos
- [x] Design responsivo
- [x] Carta com efeito de papel

## 💖 Feito com Amor

Este projeto foi criado especialmente para celebrar o amor e os momentos especiais de um casal. Cada elemento foi pensado com carinho para criar uma experiência única e memorável.

---

**Desenvolvido com ❤️ para celebrar o amor**

