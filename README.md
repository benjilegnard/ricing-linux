# "Ricing Linux" : Comment une palette de couleur a changé ma manière d'utiliser un ordinateur.
<img src="./assets/ricing-linux-header.jpeg"/>

## Abstract

```markdown
À la base, je suis développeur front. Pendant longtemps, mon métier, c'était principalement d'appliquer des chartes graphiques.

Un jour, j'ai décidé d'appliquer la mienne à mon système d'exploitation.

Une règle, absurde et non négociable : tout utilise la même palette, "Catppuccin Mocha". Le bootloader, l'écran de login, la barre de statut, l'éditeur, le terminal, les notifications, les applications. Absolument tout. Bienvenue dans le monde merveilleux du "Ricing" linux.

Colorier un bouton oblige à savoir qui le dessine. Et surtout, les outils qui acceptent d'être coloriés sont ceux dont la configuration tient dans un fichier texte, donc ceux qui acceptent de s'adapter à vous. Les autres résistent. En cherchant bêtement la cohérence visuelle, j'ai changé de gestionnaire de fenêtres, d'éditeur, de terminal, et de façon de travailler. Une histoire de couleurs est devenue une histoire d'ergonomie.

Démos à l'appui, je raconte ce glissement vers un système 100% personnalisé: le passage à un gestionnaire de fenêtres en carrelage, neovim et tmux, les impasses, et le coût réel de l'affaire.
```


## Plan 

### 1. __You__: Moi et linux *(2 minutes max)*
  - Ubuntu / Gnome depuis 2005 et l'IUT
  - 2021/2022, inspirations (collègues)
  - 2022 clavier split + passage à i3/sway
  - dev front, l'ux/ui, l'application de DS (CHARTE GRAPHIQUE), c'est ma came
### 2. __Need__: Le ricing ? kézako? *(6 minutes)*
  - bases d'un système linux, pourquoi c'est possible (macos/win = gros bloc de bois, linux=kaplas)
  - c'est quoi une "distribution, environnements de bureau etc...
  - examples GTK / QT
  - gnome-look/kde-look
  - themes/.config folders (dotfiles)
  - XDG / freedesktop.org
### 3. __Go__: la fameuse palette catppuccin qui m'a fait basculer *(2 minutes)*
  - 2p, 2c, syntaxe, 4 déclinaisons d'ultra light à dark
  - peu de contraste par défaut, mais une fois sur du noir, c'est mieux
  - les multiiiiples ports
  - switch de vim, vers neovim.?
  - switch de i3 vers sway ?
  - tout en même temps ? non!
### 4. __Search__: essayer plein de trucs *(10 minutes)*
  - depuis la page d'install de neovim
  - liste des plugins
  - démo/explication d'une sélection de plugins
    - base de nvim / dashboard
    - telescope 
    - flash positions
    - diffview
    - neotest
  - évidemment, pas que l'éditeur
  - GRUB / plymouth / greeters (rapide, avant l'os)
  - pour le reste de l'OS:
### 5. __Find__: I3/Sway + bar, le plus gros changement *(5 minutes)*
  - c'est quoi un TWM ?
  - wayland / X11 : explications rapide
  - un compositeur de fenêtres ? wat ?
  - y'a le choix (tour d'horizon rapide)
  - démo de mon TWM
    - workspaces / panneaux launcher
### 6. __Take__: payer le prix *(5 minutes)*
  - tmux: les tui's c'est la vie (mais pas portable)
  - neovim: nombreux plugins (trop?)
  - sway: bugs avec nvidia, bugs avec displaylink (wlroots)
  - passer du temps à tester, configurer
  - aujourd'hui c'est mon IDE, mon OS, stable
### 7. __Return__: to moi et linux *(4 minutes)*
  - j'ai essayé plein de gestionnaires de fenêtres
  - adoption d'une approche "minimaliste", fuck les distros, je fait la mienne
  - les dotfiles, ça change la vie
  - j'ai fait à la main, mais `chezmoi`/`stow`/`nix home-manager` existent
  - aujourd'hui ce qu'il me manque / reste à faire: extensions shell, quickshell eww 
### 8. __Change__: ce que ça a changé réèllement *(4 minutes)*
  - Ergonomie: les outils doivent s'adapter à l'humain, pas l'inverse
  - Connaissance/Contrôle: je sais qui fait quoi, vu que je les ai configuré
  - Rapidité (d'usage et d'installation)
  - Est-ce une perte de temps monumentale ? (oui, un peu, mais je fais ce que je veux.)
  - Retour sur mac/windows => dur, mais le ricing y est possible aussi (yabai/komorebi)
### 9. Conclusions / questions
  - Reprenez le contrôle sur votre OS
  - Shoutout à mes anciens collègues seniors.

## Références

- [mes dotfiles](https://github.com/benjilegnard/dotfiles)
- [catppuccin.com](https://catppuccin.com/): la fameuse palette et ses multiples déclinaisons
- liste des plugins nvim supportés par [catppuccin/nvim](https://github.com/catppuccin/nvim) 
- [`/r/unixporn`](https://www.reddit.com/r/unixporn/) : plein de gens partagent leur setup et dotfiles ( c'est Safe For Work, malgré le nom)
- [genèse du projet (lien twitter)](https://x.com/benjilegnard/status/1727005796683391180https://x.com/benjilegnard/status/1727005796683391180)
