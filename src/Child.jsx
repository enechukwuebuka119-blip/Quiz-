import Images from "./assets/Images/type.jpg";
import "./Child.css";
export const Child = () => {
  const name = "Nzube";
  const age = 17;
  const department = "Software Engineering";
  const matricNo = "24/1768";
  const list = ["vegetable", "food", "frutits"];
  return (
    <>
      <h1>Welcome to Child Component</h1>
      <p>My name is {name}</p>
      <p>I am {age} years old</p>
      <p>My matric No {matricNo}</p>
      <p>My department is {department}</p>
      <p>{age >= 18 ? "Adult" : "You are not an adult"}</p>
      <ul>
        {list.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>

      <img src={Images} />
    </>
  );
};
