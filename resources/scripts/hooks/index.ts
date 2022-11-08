export const fetchTodoItems = () => {};

/*interface Action {
  type: 'add_item' | 'item_completed' | 'delete_item' | 'edit_item';
  payload: any;
}

export const useTodoItemsMutation = () => {
  const options: MutationOptions<any, any, any, any> = {
    mutationFn: (action: Action): Promise<any> => {
      switch (action.type) {
        case 'add_item':
          return axios.post('api/item/store', {
            item: action.payload,
          });
        case 'delete_item':
          return axios.delete(`api/item/${action.payload.id}`);
        case 'edit_item':
          return axios.put(`api/item/${action.payload.id}`, {
            item: action.payload,
          });
        default:
          return Promise.reject();
      }
    },
  };
  return useMutation(options);
};
*/
