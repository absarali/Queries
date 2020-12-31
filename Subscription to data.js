const FETCH_TODOS = gql`
  subscription {
    todos(
      order_by: { created_at: desc }
      where: { is_public: { _eq: false } }
    ) {
      id
      title
    }
  }
`;
  const { data, error, loading } = useSubscription(FETCH_TODOS);

