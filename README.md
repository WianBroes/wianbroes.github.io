# wianbroes.github.io

Page de présentation dev de Wian Broes (InkOrb / KidOrb). Site statique, aucun build.

En ligne pour l'instant sur : https://wianbroes.github.io/

## Brancher le domaine wian.dev une fois acheté

1. Chez le registrar (Namecheap, Cloudflare, etc.), configurer les DNS :
   - Enregistrements **A** pour l'apex (`wian.dev`) vers les IPs GitHub Pages :
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Enregistrement **CNAME** pour `www.wian.dev` → `wianbroes.github.io`
2. Créer un fichier `CNAME` à la racine du repo contenant uniquement `wian.dev`, committer et pousser.
3. Dans GitHub → Settings → Pages, renseigner `wian.dev` comme domaine personnalisé et cocher "Enforce HTTPS" une fois le certificat émis (peut prendre jusqu'à 24h).

## Structure

- `index.html` : page unique
- `style.css` : styles
- `script.js` : animation de fond (bille + traînée colorée, clin d'œil au mécanisme d'InkOrb/KidOrb)
- `assets/` : icônes et captures d'écran des deux apps
