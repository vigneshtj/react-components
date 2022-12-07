const printProps = (Component) => {
  return (props) => {
    console.log(JSON.stringify(props));
    return <Component {...props}></Component>;
  };
};

export default printProps;
