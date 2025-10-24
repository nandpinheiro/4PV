# 🚀 Guia de Deploy no GitHub Pages

## Passo a Passo para Publicar o Site

### 1. Criar Repositório no GitHub
1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Dê um nome ao repositório (ex: "nosso-primeiro-mes")
4. Deixe público (para GitHub Pages gratuito)
5. Clique em "Create repository"

### 2. Fazer Upload dos Arquivos
1. No repositório criado, clique em "uploading an existing file"
2. Arraste todos os arquivos do projeto:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `.gitignore`
   - Pasta `fotos/` (com as imagens)
   - Pasta `musicas/` (com os arquivos de música)
3. Clique em "Commit changes"

### 3. Configurar GitHub Pages
1. Vá em "Settings" (aba superior)
2. Role até "Pages" (menu lateral esquerdo)
3. Em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main"
5. Clique em "Save"
6. Aguarde alguns minutos para o deploy

### 4. Acessar o Site
- O link será algo como: `https://seu-usuario.github.io/nome-do-repositorio`
- Aparecerá na seção "Pages" após o deploy

## ✅ Checklist de Deploy

- [ ] Todos os arquivos foram enviados
- [ ] As imagens estão na pasta `fotos/`
- [ ] O arquivo `index.html` está na raiz
- [ ] GitHub Pages está ativado
- [ ] O site está funcionando no link gerado

## 🔧 Solução de Problemas

### Imagens não aparecem
- Verifique se estão na pasta `fotos/`
- Confirme se os nomes dos arquivos estão corretos
- Teste localmente primeiro

### Músicas não tocam
- Verifique se estão na pasta `musicas/`
- Confirme se os nomes dos arquivos estão corretos
- Teste localmente primeiro
- Alguns navegadores podem bloquear autoplay

### CSS não carrega
- Verifique se o arquivo `styles.css` foi enviado
- Confirme se o link no HTML está correto

### JavaScript não funciona
- Verifique se o arquivo `script.js` foi enviado
- Confirme se o script está sendo carregado

## 📱 Teste Final

Após o deploy, teste:
- [ ] Navegação entre seções
- [ ] Exibição das imagens
- [ ] Contador funcionando
- [ ] Animações dos corações
- [ ] Responsividade no mobile

## 🎉 Pronto!

Seu site romântico está online e pode ser compartilhado com seu amor! 💕
