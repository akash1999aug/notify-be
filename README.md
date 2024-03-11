## Naming convention

folder name - kebab-case
file name - snake_case
variable name - camelCase
class name - PascalCase
function name - camelCase
interface name - camelCase(having i prefix example - iUserInfo)

## Boilerplate having -

Router setup ✅
config setup ✅
response setup ✅
error setup (static and dynamic as well) ✅
logger setup ✅
Database setup ✅
repository setup
pagination setup ✅
external service calling setup ✅
redis setup
kafka setup
CORS setup

## Response formate

{
statusCode : 200,
message : "",
data : {} || [{}],

    <!--  error -->
    errors : {} || [{}],
    errorCode : "CUSTOM_CODE_2000",
    debugId : "debugUUID",
    timestamp : "InGMT",
    metadata : {
        total : 100,
        page : 2
        perPage : 20,
        previousPage : "",
        nextPage : "",
    }

}

## Running Requirements

Add Environment file
Use Npm command (npm run start:dev) to run this on development env

## Env Variables

Do create a Environment file named .env.development in development env

FIREBASE_PROJECT_ID =
FIREBASE_PRIVATE_KEY =
FIREBASE_CLIENT_EMAIL =
