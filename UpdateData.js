 const UPDATE_TODO = gql `
  mutation ($id: Int, $title: String) {
    update_todos (
      _set: {
        title: $title,
      },
      where: {
        id: {
          _eq: $id
        }
      }
    ) {
      returning {
        id
        title
      }
    }
  }
 `
