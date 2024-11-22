
// const DeleteAllProducts = () => {
//   return (
//     <div>
//          window.alert('Products have been deleted Successfully');
//     </div>
//   )
// }

// export default DeleteAllProducts



const DeleteAllProducts = () => {
  const handleDelete = () => {
    window.alert('Products have been deleted Successfully');
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete All Products</button>
    </div>
  );
}

export default DeleteAllProducts;