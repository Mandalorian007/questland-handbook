# Questland Handbook
This project is meant to be a repository of Questland information, opinionated best practices, and utilities.

# Status

This project is no longer in active development and should be considered
deprecated. Any changes made will be to support the existing production
deployment while it's still active. Any community developers who wish
to take over this project need only fork this repository and do not
need any special permission. I do request that credit for the original
work be acknowledged in any forked projects. If this project is to be
used for commercial means then please contact me first for approval.

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