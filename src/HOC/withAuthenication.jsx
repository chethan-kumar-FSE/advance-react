const withAuthenication = (Component) => {
  return (props) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    }
    return <Component {...props} />;
  };
};

export { withAuthenication };
