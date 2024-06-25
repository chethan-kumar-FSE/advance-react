export const logProps = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} minor={19} />;
  };
};
