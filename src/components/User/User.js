function User({user}) {
  const {id,name,username,email} = user;
  console.log(user)
  return (
    <div>
      <div>{id}{name}--{username}--{email}</div>
    </div>
  );
}

export default User;