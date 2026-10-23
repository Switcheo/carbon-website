# CircleCI Google deployments

The `master` deployment uses short-lived CircleCI V3 OIDC tokens and Google
Workload Identity Federation. This replaces its preceding dependency on the
absent shared `GCP_SERVICE_KEY`.

## Verified deployment identity

| Boundary | Required value |
| --- | --- |
| CircleCI project | `ec984d9f-a1fc-4e28-a657-0374c6c325eb` |
| Repository for checkout and configuration | `github.com/Switcheo/carbon-website` |
| Reference for checkout and configuration | `refs/heads/master` |
| Google pool and provider | `circleci-carbon-website-master` |
| Deployment service account | `carbon-website-master-ci@cloud-nodes-372902.iam.gserviceaccount.com` |
| Sole storage role | `roles/storage.objectAdmin` on `carbon-website-master` |

The dedicated pool/provider and service account are provisioned with issuer
`https://oidc.circleci.com/org/f89a5655-8f99-40ef-b40b-1501f16a6372` and allowed audience `f89a5655-8f99-40ef-b40b-1501f16a6372`. Map `google.subject` and
`attribute.project_id` to `assertion['oidc.circleci.com/project-id']`; the raw
V3 subject can exceed Google's subject-length limit.

Require this exact provider condition:

```text
assertion['oidc.circleci.com/project-id'] == 'ec984d9f-a1fc-4e28-a657-0374c6c325eb' && assertion['oidc.circleci.com/checkout-source'] == 'github.com/Switcheo/carbon-website' && assertion['oidc.circleci.com/checkout-ref'] == 'refs/heads/master' && assertion['oidc.circleci.com/config-source'] == 'github.com/Switcheo/carbon-website' && assertion['oidc.circleci.com/config-ref'] == 'refs/heads/master'
```

Grant `roles/iam.workloadIdentityUser` on this service account only to
`principalSet://iam.googleapis.com/projects/290730833389/locations/global/workloadIdentityPools/circleci-carbon-website-master/attribute.project_id/ec984d9f-a1fc-4e28-a657-0374c6c325eb`. Grant no project-wide role and create no
service-account key. The policy readback evidence is recorded below.
This rollout provisions only `master`; the other branch retains its separate
configuration and must have its own dedicated identity before adopting this
configuration.

## Publishing and recovery

The build and existing branch filters are preserved. Only the deployment job
stops requesting the shared secrets context. It attaches the build and upload
helper from the same workspace, then authenticates with its built-in OIDC token.
Credential files are owner-only and the token is never printed.

`scripts/ci/deploy-gcs.sh` accepts only `master` and `staging`, uploads non-HTML
files first and `index.html` last, and sets `Cache-Control: public, max-age=0`
on the entrypoint. It copies directly without deleting existing objects and
uses one Cloud SDK worker process to avoid credential-cache migration races.

After deployment, verify the matching live page and asset URLs. CarbonHub's
existing redirect remains in place; publishing its retained bundle does not
change routing. Rollback uses the previous build and entrypoint; no old hashed
assets are removed by this upload.

References: [CircleCI OIDC claims and V3 tokens](https://circleci.com/docs/guides/permissions-authentication/openid-connect-tokens/),
[Google deployment federation](https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines).

## Provisioning readback — 23 October 2026

Verified at `2026-10-23T02:43:54.812165+00:00` before the CI rollout:

- Pool `projects/290730833389/locations/global/workloadIdentityPools/circleci-carbon-website-master` and its sole provider are active; issuer, audience, mappings, and the exact condition above match the approved plan.
- Service account unique ID: `116517838434919637833`. Its sole impersonation binding is `roles/iam.workloadIdentityUser` for the project principal in this dedicated pool.
- The account has `roles/storage.objectAdmin` only on `carbon-website-master`. Existing bucket bindings were preserved.
- No user-managed service-account key exists, and no direct project-level IAM role was granted.
