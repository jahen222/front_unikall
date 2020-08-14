import gql from "graphql-tag";

const POST_BUSINESS = gql` mutation(
        $name: String!, 
        $logo: ID!, 
        $tagline: String!, 
        $description: String!, 
        $work_images: [ID!], 
        $address: String!, 
        $user: ID!
    ) {
        createBusiness(
            input: { 
                data: { 
                    name: $name, 
                    logo: $logo, 
                    tagline: $tagline, 
                    description: $description, 
                    work_images: $work_images,
                    address: $address, 
                    user: $user 
                } 
            }
        ) {
            business {
                name
                logo
                tagline
                description
                work_images
                address
                user
            }
        }
    }
`;

export default POST_BUSINESS;