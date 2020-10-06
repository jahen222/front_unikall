import gql from "graphql-tag";

const UPLOAD = gql`
  mutation uploadFile($file: Upload!) {
    upload(file: $file) {
      id
    }
  }
`;

export default UPLOAD;