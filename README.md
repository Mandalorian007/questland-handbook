# Questland Handbook
This project is meant to be a repository of Questland information, opinionated best practices, and utilities.

## Special Thanks
This document is only possible because of the many amazing guild members and friends who have taught 
me.  I want to call out some in particular who really inspired me with how helpful and amazing they 
have been.

- SIBB
- TigerFan
- Vangoth
- Punisher777
- Draugluin
- Juoh
- Monstercat
- Peitcadon
- ZombieKat


## Developers run locally
- Node & Yarn are required
- `yarn install`
- `yarn build`
- `yarn local`

## Developers deploy to GCE
- Gcloud SDK + gcp project with billing enabled is needed
- you need a local environment variables file `env_variables.yaml` with Google Tag Manager settings
```yaml
env_variables:
  REACT_APP_GTM_ID: 'GTM-59N8KB2'
```
- `yarn build`
- `gcloud app deploy app.yaml -v 1`