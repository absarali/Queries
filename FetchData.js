const FETCH_TODOS = gql`
  query {
  todos(where: {is_public: {_eq: false}}) {
    id
    title
  }
}

`;
  const { data, error, loading } = useQuery(FETCH_TODOS);

