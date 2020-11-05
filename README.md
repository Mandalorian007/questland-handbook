# Questland Handbook
This project is meant to be a repository of Questland information, opinionated best practices, and utilities.

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