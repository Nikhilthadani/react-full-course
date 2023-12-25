const Profile = ({ name, email, phone }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Email: {email}</p>
      <article> Phone: {phone}</article>
    </div>
  );
};

export default Profile;
