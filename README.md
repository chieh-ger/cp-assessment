# ChargePoint Assessment

## Description

Create a react application that would make use of the OMDB API to retrieve movies based on a search criteria and display their respective posters for the user to see. You can also click on the poster itself to view more information around that particular movie

## Notes

- ts-ignore used in SearchResult component on Line 52 as the reference could be null at that point but given scope and time constraint, I decided to use ts-ignore for now. Usually this would be fixed upon the next iteration.

- Made use of Typescript and models for service responses

- Used flexboxing for displaying results as that made the most sense keeping in mind the requirements

- Using axios request library rather than the native fetch API as it handles many features like automatically transforming data to JSON from promises, cors issues etc without additional effort to handle that within the application as it is handled through the library. Other upsides for axios also includes built-in interceptors, cancelling requests and support for request progress (uploading/downloading for example), which are not used in this project. https://axios-http.com/

- Added an additional feature to also show information about a movie when clicking on one of the returned results

- Search mechanism triggered by 'Enter' key or 'Search' button. Reason for this approach instead of searching on every keypress/input is to minimise the amount of calls to the API server as the potential of API call limits (if any) might be reached and also performance concerns.

- Test are added to ensure the API does return correctly and app components rendered

- Linting using Prettier https://prettier.io/

## How to run

1 ```yarn```
2 ```yarn test``` Run this to ensure App component and services/helpers are working as expected (Optional)
2 ```yarn start```

