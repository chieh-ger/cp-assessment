# ChargePoint Assessment

## Description
Create a react application that would make use of the OMDB API to retrieve movies based on a search criteria and display their respective posters for the user to see. You can also click on the poster itself to view more information around that particular movie

## Notes
- ts-ignore used in SearchResult component on Line 15 due to the fact that the reference could be null at that point but given scope and time constraint of, I decided to ts-ignore for now. Usually this would be fixed upon the next iteration.

- Made use of Typescript and models for service responses

- Used flexboxing for displaying results as that made the most sense keeping in mind the requirements

- Added an additional feature to also show information about a movie when clicking on one of the returned results

- Search mechanism triggered by 'Enter' key or 'Search' button. Reason for this approach instead of searching on every keypress/input is to minimise the amount of calls to the API server as the potential of API call limits (if any) might be reached and also performance concerns.
## How to run
- yarn add
- yarn start