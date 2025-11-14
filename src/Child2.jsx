export const Child2 = ({ name = "Guest", matricNo, dept }) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>Matric No: {matricNo}</h3>
      <p> Department: {dept}</p>
    </>
  );
};
