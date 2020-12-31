const REMOVE_TODO = gql`
  mutation deleteTodo($id: Int) {
    delete_todos (
      where: {
        id: {
          _eq: $id
        }
      }
    ) {
      affected_rows
    }
  }
  `
  const updateCache = (client) => {
    const data = client.readQuery({
      query: FETCH_TODOS,
      variables: {
        isPublic
      }
    });
    const newData = {
      todos: data.todos.filter((t) => t.id !== item.id)
    }
    client.writeQuery({
      query: FETCH_TODOS,
      variables: {
        isPublic
      },
      data: newData
    });
  }
  
    const [deleteTodo, { loading: deleting, error: deleteError }] = useMutation(REMOVE_TODO);
    // run function
    deleteTodo({
                  variables: { id: item.id },
                  update: updateCache
                });

