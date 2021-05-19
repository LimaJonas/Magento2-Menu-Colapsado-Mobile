## Magento Modulo de Menu Colapsado - BR

- Modulo para adicionar botões no menu lateral colapsado da visão mobile do tema.
- Testado e criado usando Magento 2.3.6
### Instalação (Apenas manual)
- Faça o [download](https://github.com/LimaJonas/Magento2-Menu-Colapsado-Mobile/releases "download") do modulo.
- Em [Magento_Root]/App/Code, crie as pastas Jonaslima/Sidemenumobile.
- Extraia arquivos dentro da pasta Sidemenumobile.
- Execute os comandos:

```
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy pt_BR -f
php bin/magento cache:flush
```
- Pronto, instalado. Basta testar!
## Imagens
[![](https://i.imgur.com/drF7Emz.gif)](https://i.imgur.com/drF7Emz.gif)