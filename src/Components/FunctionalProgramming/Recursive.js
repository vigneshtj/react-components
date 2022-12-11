const isObject = (item) => typeof item === "object" && item !== null;

const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <ul>
      {pairs.map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </ul>
  );
};

function RecursiveParent() {
  const nestedObject = {
    a: 1,
    b: {
      b1: 4,
      b2: {
        b23: "Hello",
      },
      b3: {
        b31: {
          message: "Hi",
        },
        b32: {
          message: "Hi",
        },
      },
    },
    c: {
      c1: 2,
      c2: 3,
    },
  };

  return <RecursiveComponent data={nestedObject} />;
}

export default RecursiveParent;
