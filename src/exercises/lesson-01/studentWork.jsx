//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Damilare Adedeji';
  const age = 37;
  const hobbies = ['Reading', 'coding', 'playing chess', 'playing soccer'];
  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>
      <p>
        My name is {name}. I am {age} years old. Here are some of my hobbies.
      </p>
      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}> {hobby}</li>
        ))}
      </ul>
    </div>
  );
}
