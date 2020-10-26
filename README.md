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
- you need a local environment variables file `env_variables.yaml` with Google Analytics settings
```yaml
env_variables:
  REACT_APP_GA_TRACKING_ID: 'MEASUREMENT_ID_GOES_HERE'
  REACT_APP_GA_DEBUG: 'false'
```
- `yarn build`
- `gcloud app deploy app.yaml -v 1`