const List = (props) => {
  return (
    <div>
      <h5>People:</h5>

      {props.people.map((item) => (
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
            margin: "10px",
          }}
          key={item.id}
        >
          <div>
            <p>Name: {item.name}</p>
            <p>Profession: {item.profession}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default List;
