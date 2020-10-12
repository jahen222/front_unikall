import gql from "graphql-tag";

const POST_BUSINESS = gql` mutation(
    $name: String!, 
    $tagline: String!, 
    $description: String!, 
    $address: String!,
    $user: ID!
    ) {
        createBusiness( input: {
            data: {
                name: $name, 
                tagline: $tagline, 
                description: $description, 
                address: $address, 
                user: $user
            }
        }) {
            business {  
                name
                tagline
                description
                address
                user {
                    id
                    username
                }
            }
        }
    }
`;

export default POST_BUSINESS;