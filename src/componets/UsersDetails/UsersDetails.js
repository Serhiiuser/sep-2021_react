const UserDetails = ({user,getUserId}) => {
  console.log(user)
  const {id,name,username,email} = user
  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{username}</div>
      <div>{email}</div>
      <button onClick={()=>getUserId(id)}>Posts</button>
    </div>
  );

}

export default UserDetails;