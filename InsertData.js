  const [description, setDescription] = useState("");

const INSERT_TODO =  gql`
  mutation ($text: String!){
   insert_todos (
     objects: [{
       title: $text,
     }]
   ){
     returning {
       id
       title
     }
   }
 }
  `
  
  const submit = () => {
    insertTodo({
      variables: { text: description },
    });
  };
  
  const [insertTodo, { loading, error }] = useMutation(INSERT_TODO);
